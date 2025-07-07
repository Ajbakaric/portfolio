import React from 'react';

export default function Header() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[80%] max-w-2xl px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl shadow-md flex justify-between items-center">
      
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => handleSmoothScroll(e, 'hero')}
        className="flex items-center space-x-2"
      >
        <img
          src="/logo.png"
          alt="Austin Bakaric Logo"
          className="h-12 w-auto object-contain hover:scale-110 hover:drop-shadow transition duration-300"
        />
        <span className="hidden sm:inline-block font-semibold text-blue-900 text-base">Austin Bakaric</span>
      </a>

      {/* Nav */}
      <nav className="flex gap-4 text-sm font-medium text-blue-900">
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, 'about')}
          className="hover:text-blue-600 transition"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => handleSmoothScroll(e, 'projects')}
          className="hover:text-blue-600 transition"
        >
          Projects
        </a>
        <a
          href="#resume"
          onClick={(e) => handleSmoothScroll(e, 'resume')}
          className="hover:text-blue-600 transition"
        >
          CV
        </a>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="hover:text-blue-600 transition"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
