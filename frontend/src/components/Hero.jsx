import React from 'react';
import Cube from './Cube'; // Assuming you have this component already

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] w-full bg-white dark:bg-[#05041c] text-black dark:text-white flex flex-col items-center justify-center px-4"
    >
      <div className="text-center w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm Austin Bakaric
        </h1>
        <p className="text-lg md:text-xl text-indigo-700 dark:text-indigo-200">
          Fullstack Developer & Creative Technologist
        </p>
      </div>
      <div className="mt-8">
        <Cube />
      </div>
    </section>
  );
}
