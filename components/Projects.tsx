
import React, { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    title: 'Digital Marketing Agency (LevelUp)',
    description: 'Co-founded and managed a digital marketing agency, providing SEO, content, and social media strategies to various clients.',
    tags: ['SEO', 'Content Marketing', 'Entrepreneurship', 'Client Management'],
  },
  {
    title: 'Modern Transportation Website',
    description: 'Developed a full-stack website for a transportation company, featuring booking, tracking, and admin dashboard functionalities.',
    tags: ['React', 'Node.js', 'MongoDB', 'Web Development'],
  },
  {
    title: 'Integrated Farming Plan',
    description: 'Designed and implemented a business plan for an integrated farming system, focusing on sustainability and supply chain efficiency.',
    tags: ['Business Planning', 'Agriculture', 'Supply Chain', 'Sustainability'],
  },
  {
    title: 'Various Internships',
    description: 'Gained hands-on experience in web development, content writing, and digital marketing through multiple internship roles, contributing to live projects and campaigns.',
    tags: ['Web Dev', 'Content Writing', 'Digital Marketing', 'Teamwork'],
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

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        Projects & Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
            <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
            <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
