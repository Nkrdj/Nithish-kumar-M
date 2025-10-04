
import React, { useEffect, useRef, useState } from 'react';
import { Award, Star, Briefcase, Cloud, Sigma } from 'lucide-react';

const achievementsData = [
  {
    title: 'NCC Captain Leadership',
    description: 'Led a contingent of cadets, fostering discipline, teamwork, and leadership skills.',
    icon: <Star className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Multiple Tech Internships',
    description: 'Successfully completed internships in web development, digital marketing, and content writing.',
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Power BI Certification',
    description: 'Certified in data visualization and business intelligence using Microsoft Power BI.',
    icon: <Sigma className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Cloud & DevOps Certifications',
    description: 'Achieved certifications in cloud computing fundamentals and DevOps practices.',
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
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
