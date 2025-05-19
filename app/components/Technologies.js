"use client";
import React, { useState, useEffect, useRef } from "react";

const Technologies = ({ data }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [lastPos, setLastPos] = useState(null);
  const liRef = useRef(null);

  useEffect(() => {
    setLastPos({ x: 50, y: 50 });
  }, []);

  const handleMouseMove = (e) => {
    const rect = liRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    setLastPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCursorPos(lastPos);
  };

  return (
    <li
      ref={liRef}
      className="relative h-50 w-50 rounded-[40px] flex justify-center items-center text-2xl font-semibold cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {lastPos && (
        <div
          className="absolute bg-white blur-[40px] opacity-10 rounded-full transition-all duration-300 ease-out pointer-events-none"
          style={{
            top: `${(hovering ? cursorPos.y : lastPos?.y) - 60}px`,
            left: `${(hovering ? cursorPos.x : lastPos?.x) - 60}px`,
            width: "160px",
            height: "160px",
          }}
        />
      )}

      {/* Actual text on top */}
      <span className="z-10 text-white">{data.title}</span>
    </li>
  );
};

export default Technologies;