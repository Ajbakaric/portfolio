import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center space-y-4">
      <img
        src="/logo.gif" // ← updated to use your GIF
        alt="Loading..."
        className="w-32 h-32" // slightly larger for GIF visibility
      />
      <p className="text-black text-lg font-medium">Loading...</p>
    </div>
  );
}
