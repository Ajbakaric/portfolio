"use client"
import React from 'react';
import { useRef } from "react"
import { useAnimationFrame } from "motion/react";


export default function Cube() {
  const ref = useRef(null)

  useAnimationFrame((t) => {
    if (!ref.current) return

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -20
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  return (
    <div className="relative z-0 flex justify-center items-center w-full h-72 md:h-96 overflow-visible">
      <div ref={ref} className="cube relative w-40 h-40">
        <div className="side front" />
        <div className="side back" />
        <div className="side right" />
        <div className="side left" />
        <div className="side top" />
        <div className="side bottom" />
      </div>

      <style>{`
        .cube {
          transform-style: preserve-3d;
        }
        .side {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }
        .front  { transform: rotateY(  0deg) translateZ(80px); background-color: #6366f1; }
        .back   { transform: rotateY(180deg) translateZ(80px); background-color: #f59e0b; }
        .right  { transform: rotateY( 90deg) translateZ(80px); background-color: #10b981; }
        .left   { transform: rotateY(-90deg) translateZ(80px); background-color: #ef4444; }
        .top    { transform: rotateX( 90deg) translateZ(80px); background-color: #3b82f6; }
        .bottom { transform: rotateX(-90deg) translateZ(80px); background-color: #8b5cf6; }
      `}</style>
    </div>
  )
}
