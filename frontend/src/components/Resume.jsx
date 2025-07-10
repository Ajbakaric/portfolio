import React from 'react';

export default function Resume() {
  return (
    <section
      id="resume"
      className="w-full px-6 py-20 bg-sky-50 text-blue-900 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-sky-700 mb-4">My Resume</h2>
      <p className="text-lg text-blue-800 mb-8 text-center max-w-2xl">
        Here's a quick overview of my experience and skills. You can also
        download my full resume below.
      </p>

      <div className="flex gap-4 mt-6 mb-8">
        <a
          href="/public/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          View Resume
        </a>
        <a
          href="/public/Resume.pdf"
          download
          className="px-6 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Resume Content Grid */}
      <div className="grid gap-12 w-full max-w-5xl md:grid-cols-2 text-left">
        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-sky-700">Experience</h3>

          {/* Developer */}
          <div>
            <h4 className="font-bold">Fullstack Developer</h4>
            <p className="text-sm text-blue-700/70">
              Freelance | 2023 – Present
            </p>
            <ul className="list-disc list-inside mt-1 text-blue-800 space-y-1">
              <li>
                Built and deployed fullstack web applications using React, Ruby
                on Rails, and PostgreSQL
              </li>
              <li>
                Developed a real-time chat app, a personal portfolio, and image
                search tools
              </li>
              <li>
                Emphasized accessibility, responsive design, and performance
                optimization
              </li>
              <li>
                Version control, testing, and deployment via GitHub, Jest,
                Netlify, and Render
              </li>
            </ul>
          </div>

          {/* Office Manager */}
          <div>
            <h4 className="font-bold">Assistant Office Manager</h4>
            <p className="text-sm text-blue-700/70">
              Gears Mining USA LLC | 2020 – 2022 | Salt Lake City, UT
            </p>
            <ul className="list-disc list-inside mt-1 text-blue-800 space-y-1">
              <li>
                Managed daily operations for mining equipment parts ordering and
                underground repair coordination
              </li>
              <li>
                Oversaw order processing, vendor communication, and inventory
                management
              </li>
              <li>
                Collaborated with technicians to schedule repairs and support
                workflow
              </li>
              <li>
                Handled administrative duties and resolved client issues
                promptly
              </li>
            </ul>
          </div>

          {/* Salon */}
          <div>
            <h4 className="font-bold">Creative Director / Salon Stylist</h4>
            <p className="text-sm text-blue-700/70">
              Self-employed | 2015 – Present
            </p>
            <ul className="list-disc list-inside mt-1 text-blue-800 space-y-1">
              <li>Founded and operated a boutique salon in Salt Lake City</li>
              <li>Led branding, visual identity, and marketing campaigns</li>
              <li>
                Built long-term client relationships and fostered local
                community partnerships
              </li>
              <li>
                Refined creative and communication skills through personalized
                client care
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-sky-700">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">The Odin Project</h4>
              <p className="text-sm text-blue-700/70">
                Full-Stack JavaScript & Ruby on Rails Curriculum
              </p>
              <p className="mt-1 text-blue-800">
                Completed self-paced tracks covering HTML, CSS, JavaScript,
                Ruby, Rails, Git, testing, deployment, and React.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Paul Mitchell The School</h4>
              <p className="text-sm text-blue-700/70">
                Cosmetology Program | Completed 2016
              </p>
              <p className="mt-1 text-blue-800">
                Specialized in color theory, design aesthetics, and client
                services. Developed skills now applied to frontend design and
                user experience.
              </p>
              <p className="text-sm text-blue-700/70 mt-1 italic">
                Licensed Cosmetologist, Utah — 2016
              </p>
            </div>
            <div>
              <h4 className="font-bold">Murray High School</h4>
              <p className="text-sm text-blue-700/70">Diploma | Murray, UT</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-2xl font-semibold text-sky-700">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>Responsive Web Design – freeCodeCamp</li>
            <li>JavaScript Algorithms & Data Structures – freeCodeCamp</li>
            <li>Version Control with Git – The Odin Project</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-2xl font-semibold text-sky-700">
            Technical Skills
          </h3>
          <ul className="flex flex-wrap gap-3 text-blue-800">
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">React</li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              Ruby on Rails
            </li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              PostgreSQL
            </li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">Jest</li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              Netlify / Render
            </li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              Git & GitHub
            </li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">Vite</li>
            <li className="bg-sky-200 px-3 py-1 rounded-full text-sm">
              Heroku
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
