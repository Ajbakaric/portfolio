import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center space-y-4">
      <img
        src="/logo.gif" // or "/logo_transparent.png" if you want the PNG
        alt="Loading..."
        className="w-32 h-32"
      />
      <p className="text-white text-lg font-medium">Loading...</p>
    </div>
  );
}
