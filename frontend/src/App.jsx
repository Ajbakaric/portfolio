// App.jsx
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
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
