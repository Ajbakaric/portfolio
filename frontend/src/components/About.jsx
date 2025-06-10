import React from "react";

export default function About() {
  return (
    <section
  id="about"
  className="w-full bg-white dark:bg-[#1b1d4d] text-gray-900 dark:text-white py-20 px-6 flex flex-col items-center text-center"
>
  <h1 className="text-5xl font-bold mb-4">Austin Bakaric</h1>
  <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
        Full-Stack Developer & Creative Technologist
      </h2>
      <p className="max-w-2xl text-black dark:text-indigo-100 text-lg leading-relaxed">

        I'm a passionate, self-taught developer with a background in design,
        community building, and creative expression. I specialize in building full-stack
        applications using React and Ruby on Rails, blending functionality with visual storytelling.
      </p>
    </section>
  );
}
