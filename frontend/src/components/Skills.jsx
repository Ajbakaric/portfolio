import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap, FaTerminal
} from 'react-icons/fa';
import {
  SiPostgresql, SiTypescript, SiJest, SiWebpack,
  SiTailwindcss, SiHeroku, SiRubygems, SiRubyonrails
} from 'react-icons/si';

const iconStyle = "text-4xl text-indigo-400 hover:text-white transition duration-300 hover:drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-20 bg-[#0b0c2a] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">

        {/* Languages & Databases */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Languages & Databases</h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            <FaHtml5 className={iconStyle} title="HTML" />
            <FaCss3Alt className={iconStyle} title="CSS" />
            <FaJs className={iconStyle} title="JavaScript" />
            <SiTypescript className={iconStyle} title="TypeScript" />
            <SiRubygems className={iconStyle} title="Ruby" />
            <SiPostgresql className={iconStyle} title="PostgreSQL" />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Frameworks & Libraries</h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            <SiRubyonrails className={iconStyle} title="Rails" />
            <FaReact className={iconStyle} title="React" />
            <SiJest className={iconStyle} title="Jest" />
            <FaBootstrap className={iconStyle} title="Bootstrap" />
            <SiTailwindcss className={iconStyle} title="Tailwind CSS" />
            <SiWebpack className={iconStyle} title="Webpack" />
          </div>
        </div>

        {/* Dev Tools */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-indigo-300">Dev Tools</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            <FaGitAlt className={iconStyle} title="Git" />
            <FaGithub className={iconStyle} title="GitHub" />
            <SiHeroku className={iconStyle} title="Heroku" />
            <FaTerminal className={iconStyle} title="Terminal / IDE" />
          </div>
        </div>

      </div>
    </section>
  );
}
