import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-sky-50 text-blue-900 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/debora-pilati-dOG0z4-gqp0-unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-sky-700">
        Projects
      </h2>

      <div
        data-testid="projects-grid"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {projects.length > 0 ? (
          projects.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <article
                className="relative p-6 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 hover:scale-105 transition-transform duration-300 flex flex-col items-center space-y-4 w-full h-full"
                data-testid={`project-card-${idx}`}
              >
                {/* Optional Decorative Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-sky-500 blur-3xl opacity-20 pointer-events-none"></div>

                <img
                  src={proj.image}
                  alt={`Project preview: ${proj.title}`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h3 className="text-xl font-semibold text-sky-700">{proj.title}</h3>
                <p className="text-blue-800 text-center">{proj.description}</p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded bg-sky-600 hover:bg-teal-100 text-white transition"
                  aria-label={`View project: ${proj.title}`}
                >
                  View Project
                </a>
              </article>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-blue-800 w-full col-span-2">
            No projects to display at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
