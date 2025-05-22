import React from 'react';


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="flex justify-center gap-10 p-4 text-sm font-medium text-indigo-600">
        <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </nav>
    </header>
  );
}
