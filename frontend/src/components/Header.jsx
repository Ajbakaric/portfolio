import React from 'react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="fixed top-1/2 left-6 transform -translate-y-1/2 z-50 bg-white/10 backdrop-blur p-4 rounded-2xl flex flex-col items-center space-y-6 shadow-lg">
      
      {/* Logo at top of bubble */}
      <a href="#hero" className="flex items-center justify-center">
        <div className="w-20 h-10 relative">
          <img
            src="/logo.svg"
            alt="Austin Bakaric Logo"
            className="absolute inset-0 scale-[1.6] object-contain hover:scale-[1.75] hover:drop-shadow-lg transition-transform duration-300"
          />
        </div>
      </a>

      {/* Vertical Nav Links */}
      <nav className="flex flex-col space-y-4 text-sm font-medium text-black dark:text-white">
        <a href="#about" className="cursor-pointer px-3 py-1 rounded-md text-base hover:text-lg transition-all duration-200">About</a>
        <a href="#skills" className="cursor-pointer px-3 py-1 rounded-md text-base hover:text-lg transition-all duration-200">Skills</a>
        <a href="#projects" className="cursor-pointer px-3 py-1 rounded-md text-base hover:text-lg transition-all duration-200">Projects</a>
        <a href="#contact" className="cursor-pointer px-3 py-1 rounded-md text-base hover:text-lg transition-all duration-200">Contact</a>
      </nav>
    </header>
  );
}

