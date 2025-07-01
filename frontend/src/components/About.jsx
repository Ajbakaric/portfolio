import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white/70 dark:bg-[#1b1d4d]/70 backdrop-blur-md text-gray-900 dark:text-white py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-12"
    >
    
      {/* Text Content */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-indigo-100 leading-relaxed">
          I'm a passionate, self-taught developer with a background in design,
          community building, and creative expression. I specialize in building
          full-stack applications using React and Ruby on Rails, blending
          functionality with visual storytelling.
        </p>

        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="px-6 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 rounded border border-indigo-600 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
