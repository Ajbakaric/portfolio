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
    <section id="contact" className="py-20 px-6 bg-sky-50 text-blue-900 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative z-10">
        
        {/* Left Side: Info & Socials */}
        <div className="w-full lg:w-1/2 space-y-6 relative">
          
          {/* Faded Envelope Behind Title */}
          <img
            src="/images/letter-1132703_1280.png"
            alt="Envelope"
            className="absolute right-0 top-0 w-60 opacity-10 -rotate-12 -translate-x-8 -translate-y-4 pointer-events-none select-none hidden md:block"
          />

          <h2 className="text-4xl font-bold text-sky-700 relative z-10">Contact Me</h2>
          <p className="text-lg max-w-md text-blue-800">
            I'm always open to connecting! Feel free to reach out via the form or through my socials below.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Email:</span>
              <a href="mailto:youremail@example.com" className="text-sky-600 hover:underline">
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
              className="p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          {submitted ? (
            <p className="text-center text-green-700 text-xl">Thanks for reaching out!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <button className="bg-sky-600 text-white py-3 rounded hover:bg-sky-700 transition">
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
