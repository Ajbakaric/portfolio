import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap, FaTerminal
} from 'react-icons/fa';
import {
  SiPostgresql, SiTypescript, SiJest, SiWebpack,
  SiTailwindcss, SiHeroku, SiRubygems, SiRubyonrails, SiRender
} from 'react-icons/si';

const iconStyle =
  "text-4xl text-sky-500 transition duration-300 hover:text-teal-100 hover:drop-shadow-[0_0_8px_#38bdf8]";


export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-sky-50 backdrop-blur-lg text-blue-900 py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-16 flex-wrap"
    >
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-6 flex-1">
        <h2 className="text-4xl font-bold text-sky-700">About Me</h2>
        <p className="text-lg text-blue-800 leading-relaxed">
          I'm a passionate, self-taught developer with a background in design,
          community building, and creative expression. I specialize in building
          full-stack applications using React and Ruby on Rails — blending
          functionality with clean, modern design and a touch of visual storytelling.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <a
    href="#contact"
    className="inline-block px-6 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition duration-200"
  >
    Hire Me
  </a>
  <a
    href="/resume.pdf"
    download
    className="inline-block px-6 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition duration-200"
  >
    Download Resume
  </a>
</div>


      </div>

      {/* Floating Skills Card */}
      <div className="relative w-80 p-6 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center space-y-6 border border-white/30 hover:scale-105 transition-transform duration-300">
        
        {/* Decorative Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-sky-300 blur-3xl opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold text-sky-700 z-10">My Tech Stack</h3>

      <div className="grid grid-cols-3 gap-4 justify-items-center text-blue-800 text-sm z-10">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaHtml5 className={iconStyle} /><span className="mt-1">HTML</span>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaCss3Alt className={iconStyle} /><span className="mt-1">CSS</span>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaJs className={iconStyle} /><span className="mt-1">JavaScript</span>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiTypescript className={iconStyle} /><span className="mt-1">TypeScript</span>
  </a>
  <a href="https://www.ruby-lang.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiRubygems className={iconStyle} /><span className="mt-1">Ruby</span>
  </a>
  <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiPostgresql className={iconStyle} /><span className="mt-1">PostgreSQL</span>
  </a>
  <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiRubyonrails className={iconStyle} /><span className="mt-1">Rails</span>
  </a>
  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaReact className={iconStyle} /><span className="mt-1">React</span>
  </a>
  <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiJest className={iconStyle} /><span className="mt-1">Jest</span>
  </a>
  <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaBootstrap className={iconStyle} /><span className="mt-1">Bootstrap</span>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiTailwindcss className={iconStyle} /><span className="mt-1">Tailwind</span>
  </a>
  <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiWebpack className={iconStyle} /><span className="mt-1">Webpack</span>
  </a>
  <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaGitAlt className={iconStyle} /><span className="mt-1">Git</span>
  </a>
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaGithub className={iconStyle} /><span className="mt-1">GitHub</span>
  </a>
  <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiHeroku className={iconStyle} /><span className="mt-1">Heroku</span>
  </a>
  <a href="https://render.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <SiRender className={iconStyle} /><span className="mt-1">Render</span>
  </a>
  <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition">
    <FaTerminal className={iconStyle} /><span className="mt-1">Terminal</span>
  </a>
</div>
</div>
    </section>
  );
}
