import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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
    <div className="relative scroll-smooth text-black dark:text-white transition-colors duration-300">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#C0F7FF",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%238964ff'/%3E%3Cstop offset='1' stop-color='%238964ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2360e5ff'/%3E%3Cstop offset='1' stop-color='%2360e5ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234904ff'/%3E%3Cstop offset='1' stop-color='%234904ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23C0F7FF'/%3E%3Cstop offset='1' stop-color='%23C0F7FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF08A8'/%3E%3Cstop offset='1' stop-color='%23FF08A8' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230CF'/%3E%3Cstop offset='1' stop-color='%230CF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
      ></div>

      {/* Site Content */}
      <div className="relative z-10 bg-white dark:bg-[#05041c]">
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

        {/* Remaining Sections */}
        <Projects />
        <Resume />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
