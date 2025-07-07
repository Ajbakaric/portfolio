import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap, FaTerminal
} from 'react-icons/fa';
import {
  SiPostgresql, SiTypescript, SiJest, SiWebpack,
  SiTailwindcss, SiHeroku, SiRubygems, SiRubyonrails, SiRender
} from 'react-icons/si';

const iconStyle = "text-4xl text-sky-500 hover:text-sky-700 transition duration-300";

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
            className="px-6 py-2 rounded bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 rounded border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Floating Skills Card */}
      <div className="relative w-80 p-6 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center space-y-6 border border-white/30 hover:scale-105 transition-transform duration-300">
        
        {/* Decorative Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-sky-500 blur-3xl opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold text-sky-700 z-10">My Tech Stack</h3>

        <div className="grid grid-cols-3 gap-4 justify-items-center text-blue-800 text-sm z-10">
          <div className="flex flex-col items-center"><FaHtml5 className={iconStyle} /><span className="mt-1">HTML</span></div>
          <div className="flex flex-col items-center"><FaCss3Alt className={iconStyle} /><span className="mt-1">CSS</span></div>
          <div className="flex flex-col items-center"><FaJs className={iconStyle} /><span className="mt-1">JavaScript</span></div>
          <div className="flex flex-col items-center"><SiTypescript className={iconStyle} /><span className="mt-1">TypeScript</span></div>
          <div className="flex flex-col items-center"><SiRubygems className={iconStyle} /><span className="mt-1">Ruby</span></div>
          <div className="flex flex-col items-center"><SiPostgresql className={iconStyle} /><span className="mt-1">PostgreSQL</span></div>
          <div className="flex flex-col items-center"><SiRubyonrails className={iconStyle} /><span className="mt-1">Rails</span></div>
          <div className="flex flex-col items-center"><FaReact className={iconStyle} /><span className="mt-1">React</span></div>
          <div className="flex flex-col items-center"><SiJest className={iconStyle} /><span className="mt-1">Jest</span></div>
          <div className="flex flex-col items-center"><FaBootstrap className={iconStyle} /><span className="mt-1">Bootstrap</span></div>
          <div className="flex flex-col items-center"><SiTailwindcss className={iconStyle} /><span className="mt-1">Tailwind</span></div>
          <div className="flex flex-col items-center"><SiWebpack className={iconStyle} /><span className="mt-1">Webpack</span></div>
          <div className="flex flex-col items-center"><FaGitAlt className={iconStyle} /><span className="mt-1">Git</span></div>
          <div className="flex flex-col items-center"><FaGithub className={iconStyle} /><span className="mt-1">GitHub</span></div>
          <div className="flex flex-col items-center"><SiHeroku className={iconStyle} /><span className="mt-1">Heroku</span></div>
          <div className="flex flex-col items-center"><SiRender className={iconStyle} /><span className="mt-1">Render</span></div>
          <div className="flex flex-col items-center"><FaTerminal className={iconStyle} /><span className="mt-1">Terminal</span></div>
        </div>
      </div>
    </section>
  );
}
