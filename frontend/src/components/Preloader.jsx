import React from 'react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center space-y-4">
      <img
        src="/logo.png"
        alt="Loading..."
        className="w-24 h-24"
        style={{
          animation: 'spin 3s linear infinite',
        }}
      />
      <p className="text-black text-lg font-medium">Loading...</p>
    </div>
  );
}
