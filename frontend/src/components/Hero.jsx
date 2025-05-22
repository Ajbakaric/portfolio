import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-[#05041c] text-white flex items-center justify-center px-4"
      data-aos="fade-up"
    >
      <div className="text-center w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hi, I'm Austin Bakaric
        </h1>
        <p className="text-lg md:text-xl text-indigo-200">
          Fullstack Developer specializing in Ruby, Rails, React, and modern frontend.
        </p>
      </div>
    </section>
  );
}
