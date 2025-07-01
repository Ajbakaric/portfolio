import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4567/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => setSubmitted(true));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-indigo-100 to-indigo-300 dark:from-[#0e0f2c] dark:to-[#1b1d4d]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left Side: Info & Socials */}
        <div className="w-full lg:w-1/2 text-black dark:text-white space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg max-w-md">
            I'm always open to connecting! Feel free to reach out via the form or through my socials below.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Email:</span>
              <a href="mailto:youremail@example.com" className="text-indigo-700 dark:text-indigo-300 hover:underline">
                youremail@example.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white dark:bg-[#1b1d4d] p-8 rounded-lg shadow-lg">
            {submitted ? (
              <p className="text-center text-green-600 dark:text-green-400">Thanks for reaching out!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-3 border border-gray-300 dark:border-indigo-800 rounded bg-white dark:bg-[#1b1d4d] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-3 border border-gray-300 dark:border-indigo-800 rounded bg-white dark:bg-[#1b1d4d] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="p-3 border border-gray-300 dark:border-indigo-800 rounded bg-white dark:bg-[#1b1d4d] text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <button className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
