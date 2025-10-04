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
            Hello! I'm Nithish Kumar, a passionate Computer Science student with a strong foundation in software development and a keen interest in creating practical, impactful solutions. My journey in tech is complemented by my experience as an NCC Captain, where I honed my leadership, discipline, and teamwork skills.
          </p>
          <p>
            My professional experience includes internships in technical support, digital marketing, and content writing, giving me a well-rounded perspective on the tech industry. I thrive on solving complex problems, whether it's troubleshooting hardware and software issues or building dynamic, user-friendly web applications.
          </p>
          <p>
            I'm proficient in technologies like Java, React, and Power BI, and I'm always eager to learn and apply new skills to build innovative projects. I am driven by a desire to leverage technology to create efficient and engaging user experiences.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
                <img 
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3456&auto=format&fit=crop" 
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