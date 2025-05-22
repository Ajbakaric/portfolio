import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4567/projects")
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <section id="projects" name="projects" className="py-20 px-4 bg-[#0b0c2a] text-white w-full">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-indigo-500 bg-[#14163f] hover:bg-[#1d1f55] transition"
          >
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-sm text-indigo-200 mt-2">{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
