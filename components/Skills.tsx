import React, { useEffect, useRef, useState } from 'react';
import { Code2, BarChart3, Megaphone, Users, Wrench } from 'lucide-react';

const skillsData = [
  { name: 'Web & Backend', skills: ['Java', 'Python', 'React', 'HTML', 'CSS', 'JavaScript'], icon: <Code2 className="w-10 h-10 text-blue-400" /> },
  { name: 'Data & Analytics', skills: ['Power BI', 'DAX', 'MS-Excel'], icon: <BarChart3 className="w-10 h-10 text-blue-400" /> },
  { name: 'Digital Marketing', skills: ['HubSpot', 'Automation', 'Content Creation'], icon: <Megaphone className="w-10 h-10 text-blue-400" /> },
  { name: 'Technical Support', skills: ['L1 Support', 'Troubleshooting'], icon: <Wrench className="w-10 h-10 text-blue-400" /> },
  { name: 'Leadership', skills: ['Team Management', 'Discipline'], icon: <Users className="w-10 h-10 text-blue-400" /> },
];

const SectionWrapper: React.FC<{ children: (isVisible: boolean) => React.ReactNode; id: string }> = ({ children, id }) => {
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

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
        {children(isVisible)}
    </section>
  );
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      {(isVisible) => (
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 p-6 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div 
                    className={`mb-4 transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-200 mb-2">{skill.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {skill.skills.map((s, i) => (
                        <span key={i} className="bg-slate-700 text-slate-300 text-xs font-medium px-2 py-1 rounded-md">{s}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default Skills;