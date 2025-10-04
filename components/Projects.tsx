
import React, { useEffect, useRef, useState } from 'react';
import { CameraOff, Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Lead Automation with n8n and HubSpot',
    description: 'Built a custom automation system using n8n to streamline lead management for digital marketing. Integrated Google Sheets, Gmail, and HubSpot CRM to automate lead collection, follow-up emails, and deal status updates. Reduced manual data entry by 60% and improved lead engagement by 25%.',
    tags: ['n8n', 'HubSpot', 'Automation', 'API Integration', 'Digital Marketing'],
    imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=3540&auto=format&fit=crop',
    liveUrl: null,
    repoUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY',
  },
  {
    title: 'Smart Attendance System',
    description: 'Automates attendance marking using facial recognition. Can be integrated with college or corporate attendance systems.',
    tags: ['Facial Recognition', 'Python', 'AI/ML', 'System Design'],
    imageUrl: 'https://images.unsplash.com/photo-1617901422732-35312a024213?q=80&w=3540&auto=format&fit=crop',
    liveUrl: null,
    repoUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a subscription-based service. Utilized logistic regression and random forest classifiers, achieving 85% accuracy in identifying at-risk customers.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop',
    liveUrl: null,
    repoUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Created a content-based movie recommendation system using NLP techniques on movie synopses. Implemented TF-IDF vectorization and cosine similarity to recommend movies with similar plots.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Recommendation System'],
    imageUrl: 'https://images.unsplash.com/photo-1627843563095-2df97824c965?q=80&w=3474&auto=format&fit=crop',
    liveUrl: null,
    repoUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY',
  }
];


type Project = typeof projectsData[0];

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
        {children}
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
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
    <div
      ref={ref}
      className={`bg-slate-800/50 rounded-lg flex flex-col overflow-hidden transform transition-all duration-500 ease-in-out hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-slate-700 flex items-center justify-center text-slate-500">
          <CameraOff size={48} />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <div className="flex space-x-3 text-slate-400">
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300" aria-label="GitHub repository">
                        <Github size={22} />
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300" aria-label="Live demo">
                        <ExternalLink size={22} />
                    </a>
                )}
            </div>
        </div>
        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
