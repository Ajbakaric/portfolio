import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Hero() {
  const [loading, setLoading] = useState(true);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center bg-black text-white"
    >
      {/* Preloader Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
          <img
            src="/logo.png"
            alt="Loading Logo"
            className="w-24 h-24 animate-spin mb-4"
          />
          <p className="text-lg font-semibold tracking-widest">Loading...</p>
        </div>
      )}

      {/* Spline Background */}
      <div className={`${loading ? 'invisible' : 'visible'} absolute inset-0 z-0`}>
        <Spline
          scene="https://prod.spline.design/iVEaathZeu7wOZdg/scene.splinecode"
          onLoad={() => setLoading(false)}
        />
      </div>

      {/* Down Arrow */}
      {!loading && (
        <div className="absolute bottom-6 z-10">
          <button
            onClick={() =>
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
            }
            className="animate-bounce text-white hover:text-indigo-300 transition"
            style={{ fontSize: '30px' }}
          >
            <HiChevronDoubleDown />
          </button>
        </div>
      )}
    </section>
  );
}
