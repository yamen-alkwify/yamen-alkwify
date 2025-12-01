import { useEffect, useRef, useState } from 'react';

export default function ZoomLens({
  imageSrc,
  zoomScale = 1.35,
  radius = 90,
  children,
  enabledOnMobile = false,
}) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 1, h: 1 });
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const resize = () => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const handleMove = (event) => {
    if (prefersReduced || (!enabledOnMobile && isTouchDevice())) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setActive(true);
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const handleLeave = () => setActive(false);

  const posX = Math.max(0, Math.min(pos.x, size.w));
  const posY = Math.max(0, Math.min(pos.y, size.h));
  const bgPosX = `${(posX / size.w) * 100}%`;
  const bgPosY = `${(posY / size.h) * 100}%`;

  return (
    <div
      ref={containerRef}
      className="zoom-lens"
      onMouseMove={handleMove}
      onMouseEnter={handleMove}
      onMouseLeave={handleLeave}
      aria-hidden
    >
      <div
        className="zoom-lens__base"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {children}
      </div>
      {active && !prefersReduced && (
        <div
          className="zoom-lens__circle"
          style={{
            width: radius * 2,
            height: radius * 2,
            left: posX - radius,
            top: posY - radius,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${zoomScale * 100}%`,
            backgroundPosition: `${bgPosX} ${bgPosY}`,
          }}
        />
      )}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(media.matches);
    const listener = () => setPrefers(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  return prefers;
}

function isTouchDevice() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}
