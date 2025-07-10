import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Preloader from './components/Preloader';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden scroll-smooth text-black dark:text-white transition-colors duration-300">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#C0F7FF',
          backgroundImage: `url("data:image/svg+xml,%3Csvg ... %3E")`, // insert your pattern
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          opacity: 0.15,
        }}
      ></div>

      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />

          <div className="relative z-10 bg-white dark:bg-[#05041c]">
            <section id="about">
              <About />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="resume">
              <Resume />
            </section>

            <section id="contact">
              <ContactForm />
            </section>

            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
