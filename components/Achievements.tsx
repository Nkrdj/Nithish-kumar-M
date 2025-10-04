import React, { useEffect, useRef, useState } from 'react';
import { Star, Briefcase, BarChart3, Code } from 'lucide-react';

const achievementsData = [
  {
    title: 'NCC Captain',
    description: 'Led and managed cadets, fostering discipline and teamwork. Organized training programs, drills, and leadership activities.',
    icon: <Star className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Professional Internships',
    description: 'Completed internships as a Technical Support Engineer, Digital Marketer, and Content Writer at Sansys Business Solutions and Icanio Technologies.',
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Power BI Certification',
    description: 'Skilled in creating interactive dashboards, data modeling with DAX, and transforming data into actionable insights.',
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Java & Full Stack Certifications',
    description: 'Proficient in Java, OOP, data structures, and backend development. Gained proficiency in React.js, HTML, CSS, and JavaScript.',
    icon: <Code className="w-8 h-8 text-blue-400" />,
  },
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

const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        Achievements
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/60 transition-colors duration-300">
              <div className="flex-shrink-0 bg-slate-700 p-3 rounded-full">{achievement.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200">{achievement.title}</h3>
                <p className="text-slate-400">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;