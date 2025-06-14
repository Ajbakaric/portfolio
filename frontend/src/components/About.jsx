import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center bg-no-repeat text-gray-900 dark:text-white py-20 px-6"
      style={{
        backgroundImage: "url('/hector-j-rivas-1FxMET2U5dU-unsplash.jpg')"
      }}
    >
      <div className="bg-white/70 dark:bg-[#05041c]/70 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Austin Bakaric</h1>
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
          Full-Stack Developer & Creative Technologist
        </h2>
        <p className="text-lg leading-relaxed text-black dark:text-indigo-100">
          I'm a passionate, self-taught developer with a background in design,
          community building, and creative expression. I specialize in building full-stack
          applications using React and Ruby on Rails, blending functionality with visual storytelling.
        </p>
      </div>
    </section>
  );
}
