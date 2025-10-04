
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, BarChart3, Megaphone, Cloud, Search, Link, Users, BrainCircuit } from 'lucide-react';

const skillsData = [
  { name: 'Full-Stack Development', icon: <Code className="w-10 h-10 text-blue-400" /> },
  { name: 'Data Science', icon: <Database className="w-10 h-10 text-blue-400" /> },
  { name: 'Digital Marketing', icon: <Megaphone className="w-10 h-10 text-blue-400" /> },
  { name: 'Cloud Computing', icon: <Cloud className="w-10 h-10 text-blue-400" /> },
  { name: 'SEO', icon: <Search className="w-10 h-10 text-blue-400" /> },
  { name: 'Supply Chain Planning', icon: <Link className="w-10 h-10 text-blue-400" /> },
  { name: 'Leadership', icon: <Users className="w-10 h-10 text-blue-400" /> },
  { name: 'AI Solutions', icon: <BrainCircuit className="w-10 h-10 text-blue-400" /> },
];

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

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="bg-slate-800/50 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="font-semibold text-lg text-slate-200">{skill.name}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
