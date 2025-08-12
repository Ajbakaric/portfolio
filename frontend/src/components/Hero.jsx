import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNotice, setShowMobileNotice] = useState(false);
  const [allowMobileView, setAllowMobileView] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const isNarrowScreen = window.innerWidth < 768;
      const isMobileAgent = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      const mobileDevice = isNarrowScreen || isMobileAgent;

      setIsMobile(mobileDevice);

      const accepted = localStorage.getItem('allowMobileView') === 'true';
      setAllowMobileView(accepted);
      setShowMobileNotice(mobileDevice && !accepted);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) setWebglSupported(false);
  }, []);

  const handleContinue = () => {
    localStorage.setItem('allowMobileView', 'true');
    setAllowMobileView(true);
    setShowMobileNotice(false);
  };

  const shouldShowVideo = isMobile || !webglSupported;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center bg-black text-white select-none"
    >
      {/* Mobile/Desktop fallback notice */}
      {showMobileNotice && !allowMobileView && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-white px-6 text-center">
          <h2 className="text-xl font-bold mb-4">Best Viewed on Desktop</h2>
          <p className="mb-6 max-w-md">
            For the full visual experience, we recommend visiting on a desktop. Some features may be limited or cropped on mobile.
          </p>
          <button
            onClick={handleContinue}
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            Continue Anyway
          </button>
        </div>
      )}

      {/* Preloader */}
      {loading && !showMobileNotice && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-transparent text-white">
          <img
            src="/logo.gif"
            alt="Loading Logo"
            className="w-32 h-32 mb-4"
            draggable={false}
          />
          <p className="text-lg font-semibold tracking-widest">Loading...</p>
        </div>
      )}

      {/* Render Spline scene or fallback video */}
      <div
        className={`${loading ? 'invisible pointer-events-none' : 'visible pointer-events-auto'} absolute inset-0 w-full h-full z-0`}
      >
        {shouldShowVideo ? (
          allowMobileView && (
            <video
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setLoading(false)}
              className="fullscreen-video"
              draggable={false}
            >
              <source src="/videos/spline-background.mp4" type="video/mp4" />
              <source src="/videos/spline-background.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <div
            className="w-full h-full"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          >
            <Spline
              scene="/spline/scene.splinecode"
              onLoad={() => setLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                WebkitUserDrag: 'none',
                userSelect: 'none',
                pointerEvents: 'auto',
                touchAction: 'none',
              }}
            />
          </div>
        )}
      </div>

      {/* If preloader has transitioned out but still mounted, ensure it doesn't eat clicks */}
      {!loading && !showMobileNotice && (
        <div className="absolute inset-0 z-40 pointer-events-none"></div>
      )}

      {/* Scroll Arrow */}
      {!loading && !showMobileNotice && (
        <div className="absolute bottom-6 z-10">
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
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
