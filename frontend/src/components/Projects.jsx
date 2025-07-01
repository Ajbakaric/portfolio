import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects" className="w-full py-20 px-6 bg-transparent text-white relative">
      <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Projects</h2>

      <div className="relative max-w-6xl mx-auto space-y-32">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 relative`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Image in Transparent Card */}
            <div className="w-full lg:w-1/2 relative p-4 rounded-lg bg-white/5 dark:bg-white/10 backdrop-blur-md shadow-lg">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full rounded-md"
              />
              <div className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {proj.title}
              </div>
              <div className="absolute bottom-4 right-4 text-sm opacity-70">
                {proj.date || "2024"}
              </div>
            </div>

            {/* Project Description & Link */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
              <p className="text-indigo-300">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white transition"
              >
                View Project
              </a>
            </div>

            {/* Optional Center Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500/50 z-[-1]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
