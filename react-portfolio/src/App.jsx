import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-grid relative">
      {/* Animated Aurora Background Blobs */}
      <div className="blob-cont fixed inset-0 overflow-hidden pointer-events-none z-[0] opacity-70">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <BackgroundAnimation theme={theme} />
      <CustomCursor theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} />
        <About />
        <Projects />
        <Hackathons />
        <TechStack />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
