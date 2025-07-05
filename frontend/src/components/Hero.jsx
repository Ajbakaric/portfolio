import React from 'react';
import Spline from '@splinetool/react-spline';
import { HiChevronDoubleDown } from 'react-icons/hi';

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
      
      {/* Down Arrow Positioned at Bottom */}
      <div className="absolute bottom-6 z-10">
      <button
       onClick={() =>
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }
  className="animate-bounce text-white hover:text-indigo-300 transition"
  style={{ fontSize: '30px' }} // Custom size in pixels
>
  <HiChevronDoubleDown />
</button>

      </div>
    </section>
  );
}
