
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#github-stats', label: 'GitHub' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      let currentSection = '#home';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - 81; // 80px header height + 1px buffer
          if (window.scrollY >= sectionTop) {
            currentSection = link.href;
          }
        }
      });
       // Check if user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        currentSection = '#contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;

    if (targetId === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80; // Corresponds to h-20 in Tailwind CSS (5rem = 80px)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    
    if (isOpen) {
      setIsOpen(false);
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <a href="#home" onClick={handleLinkClick} className="text-2xl font-bold text-white neon-text">
          NK
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={handleLinkClick} 
              className={`transition-colors duration-300 font-medium ${activeSection === link.href ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-900`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={handleLinkClick} 
              className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.href ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
