import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap, FaTerminal, FaServer
} from 'react-icons/fa'; // <-- Make sure FaServer is included here

import {
  SiPostgresql, SiTypescript, SiJest, SiWebpack,
  SiTailwindcss, SiHeroku, SiRubygems, SiRubyonrails
} from 'react-icons/si';

const iconStyle = "text-4xl text-indigo-400 hover:text-white transition duration-300 hover:drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-20 bg-gray-100 dark:bg-[#0b0c2a] text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">My Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">

        {/* Languages & Databases */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Languages & Databases</h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {[
              { icon: <FaHtml5 className={iconStyle} />, label: 'HTML' },
              { icon: <FaCss3Alt className={iconStyle} />, label: 'CSS' },
              { icon: <FaJs className={iconStyle} />, label: 'JavaScript' },
              { icon: <SiTypescript className={iconStyle} />, label: 'TypeScript' },
              { icon: <SiRubygems className={iconStyle} />, label: 'Ruby' },
              { icon: <SiPostgresql className={iconStyle} />, label: 'PostgreSQL' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <span className="mt-2 text-sm text-black dark:text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Frameworks & Libraries</h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {[
              { icon: <SiRubyonrails className={iconStyle} />, label: 'Rails' },
              { icon: <FaReact className={iconStyle} />, label: 'React' },
              { icon: <SiJest className={iconStyle} />, label: 'Jest' },
              { icon: <FaBootstrap className={iconStyle} />, label: 'Bootstrap' },
              { icon: <SiTailwindcss className={iconStyle} />, label: 'Tailwind CSS' },
              { icon: <SiWebpack className={iconStyle} />, label: 'Webpack' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <span className="mt-2 text-sm text-black dark:text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Tools */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Dev Tools</h3>
          <div className="grid grid-cols-5 gap-6 justify-items-center">
            {[
             { icon: <FaGitAlt className={iconStyle} />, label: 'Git' },
      { icon: <FaGithub className={iconStyle} />, label: 'GitHub' },
      { icon: <SiHeroku className={iconStyle} />, label: 'Heroku' },
      { icon: <FaTerminal className={iconStyle} />, label: 'Terminal / IDE' },
      { icon: <FaServer className={iconStyle} />, label: 'Render' }, // Render added here
    ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <span className="mt-2 text-sm text-black dark:text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
