import React, { useState, useEffect } from 'react';

const taglines = [
  "Technical Support Engineer",
  "Full-Stack Developer",
  "Digital Marketer",
];

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex === taglines[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % taglines.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      if (!targetId) return;
  
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
    };


  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start text-left pt-20">
      <div className="max-w-4xl">
        <p className="text-blue-400 text-lg mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
          Nithish Kumar M.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            I'm a <span className="text-white">{`${taglines[index].substring(0, subIndex)}`}</span>
            <span className={`transition-opacity duration-300 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h2>
        <div className="flex flex-wrap gap-4">
            <a href="#contact" onClick={handleLinkClick} className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-md font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Get In Touch
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;