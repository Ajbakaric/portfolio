import React from 'react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#1b1d4d] border-b border-gray-200 dark:border-indigo-500">
      <nav className="flex justify-between items-center px-6 p-4 text-sm font-medium text-indigo-600 dark:text-indigo-200">
        
        {/* Left section: logo + nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
    <a href="#hero" className="flex items-center gap-2">
    <div className="w-20 h-10 relative">
    <img
      src="/logo.svg"
      alt="Austin Bakaric Logo"
      className="absolute inset-0 scale-[1.6] object-contain hover:scale-[1.75] hover:drop-shadow-lg transition-transform duration-300"
    />
  </div>
  <span className="hidden sm:inline-block text-black dark:text-white font-semibold tracking-wide">
    {/* Optional label if you want text next to logo */}
  </span>
</a>

          {/* Nav links */}
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 px-3 py-1 rounded transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}
