
import React, { useEffect, useRef, useState } from 'react';

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
        {children}
    </section>
  );
};

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        About Me
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-lg text-slate-400 space-y-4">
          <p>
            Hello! I'm Nithish Kumar, a passionate Computer Science student with a drive for technology and innovation. My journey has been diverse, from leading as an NCC Captain, which instilled in me discipline and leadership, to diving deep into the tech world through various internships.
          </p>
          <p>
            My experience spans full-stack web development, content creation, and strategic digital marketing. I'm fascinated by the power of AI to solve real-world problems and have a keen interest in its applications.
          </p>
          <p>
            Beyond the screen, I'm an entrepreneur at heart, running a small-scale farming business. This venture has taught me invaluable lessons in management, sustainability, and the importance of grounding technology in practical, everyday solutions.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
                <img 
                    src="https://picsum.photos/400/400" 
                    alt="Nithish Kumar M"
                    className="relative w-full h-full object-cover rounded-full border-4 border-blue-500/50 shadow-lg"
                />
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
