import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center bg-black text-white"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/iVEaathZeu7wOZdg/scene.splinecode" />
      </div>

      {/* Overlay Content */}
     
    </section>
  );
}
