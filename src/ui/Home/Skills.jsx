import { useEffect, useRef, useState } from 'react';

function getCircularOffset(index, activeIndex, total) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export default function Skills({ skillRows }) {
  const skills = skillRows.flat();
  const [activeIndex, setActiveIndex] = useState(Math.floor(skills.length / 2));
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const dragState = useRef({ isDragging: false, startX: 0, deltaX: 0, moved: false });
  const suppressClickTimer = useRef(null);
  const sceneRef = useRef(null);

  const rotateTo = (direction) => {
    setActiveIndex((current) => (current + direction + skills.length) % skills.length);
  };

  const setSceneTilt = (rotateY, rotateX, glowX = '50%', glowY = '50%') => {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty('--scene-rotate-y', `${rotateY}deg`);
    scene.style.setProperty('--scene-rotate-x', `${rotateX}deg`);
    scene.style.setProperty('--scene-glow-x', glowX);
    scene.style.setProperty('--scene-glow-y', glowY);
  };

  useEffect(() => {
    if (isDragging || skills.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % skills.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isDragging, skills.length]);

  useEffect(
    () => () => {
      window.clearTimeout(suppressClickTimer.current);
    },
    [],
  );

  const handlePointerDown = (event) => {
    if (skills.length <= 1) return;

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

    setDragProgress(Math.max(-1, Math.min(1, deltaX / 170)));
  };

  const handlePointerUp = (event) => {
    if (!dragState.current.isDragging) return;

    const deltaX = dragState.current.deltaX;
    if (Math.abs(deltaX) >= 65) {
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

    const rotateY = (relativeX - 0.5) * 5.5;
    const rotateX = (0.5 - relativeY) * 3.8;

    setSceneTilt(rotateY, rotateX, `${relativeX * 100}%`, `${relativeY * 100}%`);
  };

  const handleMouseLeave = () => {
    if (dragState.current.isDragging) return;
    setSceneTilt(0, 0);
  };

  return (
    <section className="skills section" id="skills">
      <div className="skills__header container">
        <p className="skills__eyebrow">Core Capabilities</p>

        <h2 className="section__title-2">
          <span>Skills.</span>
        </h2>

        <p className="skills__lede">
          A smaller set, used deeply across delivery, analysis, planning, and technical control.
        </p>
      </div>

      <div className={`skills__stage container${isDragging ? ' skills__stage--dragging' : ''}`}>
        <div
          ref={sceneRef}
          className="skills__scene"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {skills
            .map((skill, index) => ({
              ...skill,
              index,
              offset: getCircularOffset(index, activeIndex, skills.length) + dragProgress,
            }))
            .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset))
            .map((skill) => {
              const distance = Math.abs(skill.offset);
              const isActive = skill.index === activeIndex;

              return (
                <article
                  className={`skill-orbit${isActive ? ' skill-orbit--active' : ''}`}
                  key={skill.name}
                  style={{
                    '--offset': skill.offset,
                    '--distance': distance,
                    '--direction': Math.sign(skill.offset || 1),
                  }}
                  onClick={() => {
                    if (dragState.current.moved) return;
                    setActiveIndex(skill.index);
                  }}
                >
                  <div className="skill-orbit__icon">
                    <img src={skill.img} alt={skill.alt} loading="lazy" />
                  </div>

                  <div className="skill-orbit__body">
                    <p className="skill-orbit__eyebrow">{skill.eyebrow}</p>
                    <h3 className="skill-orbit__title">{skill.name}</h3>
                    <p className="skill-orbit__copy">{skill.description}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
