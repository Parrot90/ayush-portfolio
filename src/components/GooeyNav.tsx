"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import "./GooeyNav.css";

// --- TYPE DEFINITIONS ---
interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  onItemClick?: (href: string) => void; // Prop to handle click events in the parent
  activeIndex?: number; // Controlled active index from parent
}

// --- COMPONENT ---
const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  onItemClick,
  activeIndex = 0,
}) => {
  // --- REFS AND STATE ---
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // --- ANIMATION LOGIC ---
  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = useCallback((distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  }, []);

  const createParticle = useCallback((i: number) => {
    const pRotate = noise(10);
    const colors = [1, 2, 3, 1, 2, 3, 1, 4];
    return {
      start: getXY(90, 15 - i, 15),
      end: getXY(10 + noise(7), 15 - i, 15),
      time: 1200 + noise(600),
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: pRotate > 0 ? (pRotate + 5) * 10 : (pRotate - 5) * 10,
    };
  }, [getXY]);

  const makeParticles = useCallback((element: HTMLElement) => {
    for (let i = 0; i < 15; i++) {
      const p = createParticle(i);
      setTimeout(() => {
        if (!element) return;
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.className = "particle";
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.className = "point";
        particle.appendChild(point);
        element.appendChild(particle);
        setTimeout(() => { try { element.removeChild(particle); } catch {} }, p.time);
      }, 30);
    }
  }, [createParticle]);

  const updateEffectPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = { left: `${pos.left - containerRect.left}px`, top: `${pos.top - containerRect.top}px`, width: `${pos.width}px`, height: `${pos.height}px` };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  }, []);

  // --- EVENT HANDLERS ---
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault(); // Prevent default link behavior (page jump)
    if (onItemClick) {
      onItemClick(items[index].href); // Trigger the parent's scroll function
    }
  };

  // --- EFFECTS ---
  useEffect(() => {
    const listNode = listRef.current;
    if (!listNode) return;
    const activeLi = listNode.children[activeIndex] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      if (filterRef.current) {
        filterRef.current.innerHTML = '';
        makeParticles(filterRef.current);
      }
      if (textRef.current) {
        textRef.current.classList.remove("active");
        void textRef.current.offsetWidth;
        textRef.current.classList.add("active");
      }
    }
  }, [activeIndex, makeParticles, updateEffectPosition]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      {/* SVG filter for the gooey effect - more reliable and performant */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <nav>
        <ul ref={listRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? "active" : ""}>
              <a href={item.href} onClick={(e) => handleClick(e, index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
