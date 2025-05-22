// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-[#05041c] text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
