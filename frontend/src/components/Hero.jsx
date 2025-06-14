import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cube from './Cube';
import '../index.css'; // ensure this imports your custom styles

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[60vh] w-full text-black dark:text-white flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-20" />

      {/* Foreground content */}
      <motion.div
        style={{ y, opacity }}
        className="text-center w-full z-10 relative"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Austin Bakaric
        </h1>
        <p className="text-lg md:text-xl text-indigo-700 dark:text-indigo-200">
          Fullstack Developer & Creative Technologist
        </p>
      </motion.div>

      <div className="mt-8 z-10 relative">
        <Cube />
      </div>
    </section>
  );
}
