import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap, FaTerminal
} from 'react-icons/fa';
import {
  SiPostgresql, SiTypescript, SiJest, SiWebpack,
  SiTailwindcss, SiHeroku, SiRubygems, SiRubyonrails, SiRender
} from 'react-icons/si';

const iconStyle = "text-4xl text-indigo-400 hover:text-white transition duration-300 hover:drop-shadow-[0_0_5px_rgba(99,102,241,0.8)]";

export default function Skills() {
  return (
    <section id="skills" className="-mt-10 relative z-10 px-6">
      <div className="lg:w-[490px] mx-auto rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-10 text-gray-900 dark:text-white">

        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">My Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {/* Languages & Databases */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
              Languages & Databases
            </h3>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                <FaHtml5 className={iconStyle} />
                <span className="mt-2 text-sm">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className={iconStyle} />
                <span className="mt-2 text-sm">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className={iconStyle} />
                <span className="mt-2 text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className={iconStyle} />
                <span className="mt-2 text-sm">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiRubygems className={iconStyle} />
                <span className="mt-2 text-sm">Ruby</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className={iconStyle} />
                <span className="mt-2 text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                <SiRubyonrails className={iconStyle} />
                <span className="mt-2 text-sm">Rails</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className={iconStyle} />
                <span className="mt-2 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJest className={iconStyle} />
                <span className="mt-2 text-sm">Jest</span>
              </div>
              <div className="flex flex-col items-center">
                <FaBootstrap className={iconStyle} />
                <span className="mt-2 text-sm">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className={iconStyle} />
                <span className="mt-2 text-sm">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <SiWebpack className={iconStyle} />
                <span className="mt-2 text-sm">Webpack</span>
              </div>
            </div>
          </div>

          {/* Dev Tools */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">
              Dev Tools
            </h3>
            <div className="grid grid-cols-4 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                <FaGitAlt className={iconStyle} />
                <span className="mt-2 text-sm">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className={iconStyle} />
                <span className="mt-2 text-sm">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <SiHeroku className={iconStyle} />
                <span className="mt-2 text-sm">Heroku</span>
              </div>
              <div className="flex flex-col items-center">
                <SiRender className={iconStyle} />
                <span className="mt-2 text-sm">Render</span>
              </div>
              <div className="flex flex-col items-center">
                <FaTerminal className={iconStyle} />
                <span className="mt-2 text-sm">Terminal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
