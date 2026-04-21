import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../common/AnimatedSection';

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/Ã‚Â·|Â·/g, '·')
    .replace(/Ã¢â‚¬Â¢\s*|â€¢\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function Experience({ experiences }) {
  const items = experiences.map((item) => ({
    ...item,
    company: cleanText(item.company),
    role: cleanText(item.role),
    location: cleanText(item.location),
    summary: cleanText(item.summary),
    impact: cleanText(item.impact || item.summary),
    highlights: item.highlights.map(cleanText),
    stack: item.stack.map(cleanText),
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const dragState = useRef({ isDragging: false, startX: 0, deltaX: 0, moved: false });
  const suppressClickTimer = useRef(null);
  const sceneRef = useRef(null);

  const rotateTo = (direction) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  const setSceneTilt = (rotateY, rotateX, glowX = '50%', glowY = '50%') => {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty('--experience-rotate-y', `${rotateY}deg`);
    scene.style.setProperty('--experience-rotate-x', `${rotateX}deg`);
    scene.style.setProperty('--experience-glow-x', glowX);
    scene.style.setProperty('--experience-glow-y', glowY);
  };

  useEffect(() => {
    if (isDragging || items.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [isDragging, items.length]);

  useEffect(
    () => () => {
      window.clearTimeout(suppressClickTimer.current);
    },
    [],
  );

  const handlePointerDown = (event) => {
    if (items.length <= 1) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      deltaX: 0,
      moved: false,
    };
    setIsDragging(true);
    setDragProgress(0);
    setSceneTilt(0, 0);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDragging) return;

    const deltaX = event.clientX - dragState.current.startX;
    dragState.current.deltaX = deltaX;

    if (Math.abs(deltaX) > 8) {
      dragState.current.moved = true;
    }

    setDragProgress(Math.max(-1, Math.min(1, deltaX / 180)));
  };

  const handlePointerUp = (event) => {
    if (!dragState.current.isDragging) return;

    const deltaX = dragState.current.deltaX;
    if (Math.abs(deltaX) >= 70) {
      rotateTo(deltaX < 0 ? 1 : -1);
    }

    dragState.current.isDragging = false;
    dragState.current.deltaX = 0;
    setIsDragging(false);
    setDragProgress(0);

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    window.clearTimeout(suppressClickTimer.current);
    suppressClickTimer.current = window.setTimeout(() => {
      dragState.current.moved = false;
    }, 120);
  };

  const handleMouseMove = (event) => {
    if (dragState.current.isDragging || !sceneRef.current) return;

    const rect = sceneRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    setSceneTilt((relativeX - 0.5) * 4.8, (0.5 - relativeY) * 3.2, `${relativeX * 100}%`, `${relativeY * 100}%`);
  };

  const handleMouseLeave = () => {
    if (dragState.current.isDragging) return;
    setSceneTilt(0, 0);
  };

  return (
    <AnimatedSection className="experience section" id="experience">
      <div className="experience__header container">
        <p className="experience__eyebrow">Executive Track Record</p>
        <h2 className="section__title-1">
          <span>Experience.</span>
        </h2>
        <p className="experience__lead">
          Leadership, systems thinking, and product delivery across roles where structure, reliability, and execution
          quality mattered most.
        </p>
      </div>

      <div className={`experience__stage container${isDragging ? ' experience__stage--dragging' : ''}`}>
        <div
          ref={sceneRef}
          className="experience__scene"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {items
            .map((item, index) => ({
              ...item,
              index,
              offset: getCircularOffset(index, activeIndex, items.length) + dragProgress,
            }))
            .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset))
            .map((item) => {
              const distance = Math.abs(item.offset);
              const isActive = item.index === activeIndex;

              return (
                <article
                  className={`experience-orbit${isActive ? ' experience-orbit--active' : ''}`}
                  key={`${item.company}-${item.role}`}
                  style={{
                    '--offset': item.offset,
                    '--distance': distance,
                    '--experience-accent': item.accent,
                  }}
                  onClick={() => {
                    if (dragState.current.moved) return;
                    setActiveIndex(item.index);
                  }}
                >
                  <span className="experience-orbit__glow" aria-hidden />

                  <div className="experience-orbit__head">
                    <div className="experience-orbit__brand">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="experience-orbit__logo-link">
                          <div className="experience-orbit__logo">
                            {item.logo ? <img src={item.logo} alt={`${item.company} logo`} /> : <span>{item.company.slice(0, 2)}</span>}
                          </div>
                        </a>
                      ) : (
                        <div className="experience-orbit__logo">
                          {item.logo ? <img src={item.logo} alt={`${item.company} logo`} /> : <span>{item.company.slice(0, 2)}</span>}
                        </div>
                      )}

                      <div className="experience-orbit__meta">
                        <span className="experience-orbit__period">{item.period}</span>
                        <span className="experience-orbit__location">{item.location}</span>
                      </div>
                    </div>

                    {item.href && (
                      <a href={item.href} target="_blank" rel="noreferrer" className="experience-orbit__visit">
                        <i className="ri-arrow-right-up-line" />
                      </a>
                    )}
                  </div>

                  <div className="experience-orbit__title">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>

                  <p className="experience-orbit__summary">{item.summary}</p>

                  <ul className="experience-orbit__highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <i className="ri-sparkling-2-line" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="experience-orbit__footer">
                    <p className="experience-orbit__impact">{item.impact}</p>

                    <div className="experience-orbit__tags">
                      {item.stack.map((tech) => (
                        <span className="experience-orbit__tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </AnimatedSection>
  );
}
