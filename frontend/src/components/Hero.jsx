import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isNarrowScreen = window.innerWidth < 768;
      const isMobileAgent = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      setIsMobile(isNarrowScreen || isMobileAgent);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center bg-black text-white z-10"
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

      {/* Spline or Video Background */}
      <div className={`${loading ? 'invisible' : 'visible'} absolute inset-0 w-full h-full z-0`}>
        {isMobile ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setLoading(false)}
            className="fullscreen-video"
          >
            <source src="/videos/spline-background.webm" type="video/webm" />
            <source src="/videos/spline-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Spline
            scene="/spline/scene.splinecode"
            onLoad={() => setLoading(false)}
          />
        )}
      </div>

      {/* Down Arrow */}
      {!loading && (
        <div className="absolute bottom-6 z-10">
          <button
            onClick={() =>
              document
                .getElementById('about')
                .scrollIntoView({ behavior: 'smooth' })
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
