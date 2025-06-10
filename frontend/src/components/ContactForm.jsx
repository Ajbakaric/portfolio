import React, { useState } from 'react';

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
<section id="contact" className="py-20 px-6 bg-white dark:bg-[#0e0f2c]">
  <div className="max-w-xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">Contact Me</h2>
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
  <button className="bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition">
    Send
  </button>
</form>

        )}
      </div>
    </section>
  );
}
