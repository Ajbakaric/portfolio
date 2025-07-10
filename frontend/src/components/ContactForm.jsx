import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://formsubmit.co/ajax/bakaric.dev@gmail.com',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // clear fields
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-sky-50 text-blue-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 relative z-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6 relative">
          <img
            src="/images/letter-1132703_1280.png"
            alt="Envelope"
            className="absolute right-0 top-0 w-60 opacity-10 -rotate-12 -translate-x-8 -translate-y-4 pointer-events-none select-none hidden md:block"
          />
          <h2 className="text-4xl font-bold text-sky-700 relative z-10">
            Contact Me
          </h2>
          <p className="text-lg max-w-md text-blue-800">
            I'm always open to connecting! Feel free to reach out via the form
            or through my socials below.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:bakaric.dev@gmail.com"
                className="text-sky-600 hover:underline"
              >
                bakaric.dev@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Ajbakaric"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/austin-bakaric-891994353/"
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
            <p className="text-center text-green-700 text-xl">
              Thanks for reaching out!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="_captcha" value="false" />
              <input
                name="name"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="p-3 border border-blue-300 rounded bg-white text-blue-900 placeholder:text-blue-700/50"
              />
              <button
                type="submit"
                className="bg-sky-600 text-white py-3 rounded hover:bg-sky-700 transition"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
