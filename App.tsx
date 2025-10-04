
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import GithubStats from './components/GithubStats';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Services />
        <GithubStats />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
