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
    <section id="projects" className="w-full px-6 py-20 bg-white dark:bg-[#14163f] text-gray-900 dark:text-white">

      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((proj, idx) => (
    <a
      key={idx}
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-indigo-500 bg-indigo-100 dark:bg-[#1b1d4d] hover:bg-indigo-200 dark:hover:bg-[#242866] hover:shadow-xl hover:shadow-indigo-500/30 transition duration-300"

    >
      {proj.image && (
        <img
          src={proj.image}
          alt={`${proj.title} screenshot`}
          className="w-full h-48 object-cover border-b border-indigo-500 group-hover:opacity-90 transition"
        />
      )}
      <div className="p-6">
       <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition">

          {proj.title}
        </h3>
        <p className="text-sm text-indigo-700 dark:text-indigo-200 mb-4">
{proj.description}</p>
        <div className="flex flex-wrap gap-2">
          {proj.tags?.map((tag, i) => (
          <span
  key={i}
  className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 group-hover:bg-indigo-300 dark:group-hover:bg-indigo-600 transition"
>
  {tag}
</span>

          ))}
        </div>
      </div>
    </a>
  ))}
</div>

    </section>
  );
}
