import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="scroll-smooth bg-white text-black dark:bg-[#05041c] dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />

      {/* About + Floating Skills Card */}
      <section className="relative w-full flex flex-col lg:flex-row items-start justify-between px-6 py-20 bg-white dark:bg-[#1b1d4d]">
        <div className="w-full lg:w-1/2">
          <About />
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 lg:-mt-3">
          <Skills />
        </div>
      </section>

      {/* Remaining sections */}
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
