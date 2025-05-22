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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Contact Me</h2>
        {submitted ? (
          <p className="text-center text-green-600">Thanks for reaching out!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" placeholder="Name" onChange={handleChange} required className="p-3 border border-gray-300 rounded" />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="p-3 border border-gray-300 rounded" />
            <textarea name="message" placeholder="Message" onChange={handleChange} required rows="5" className="p-3 border border-gray-300 rounded" />
            <button type="submit" className="bg-indigo-500 text-white py-3 rounded hover:bg-indigo-600 transition">Send</button>
          </form>
        )}
      </div>
    </section>
  );
}
