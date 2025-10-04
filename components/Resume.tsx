
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Star, Award, Code, Building } from 'lucide-react';

const resumeData = {
    workExperience: [
        {
          role: 'Technical Support Engineer',
          company: 'Icanio Technologies, Tirunelveli',
          period: 'Jul 2025 - Present',
          description: 'Provided L1 technical support by troubleshooting hardware, software, and network issues. Handled incident tickets, remote support, and user queries, ensuring timely resolution and customer satisfaction.'
        },
        {
          role: 'Digital Marketing • Internship',
          company: 'Sansys Business Solutions, Coimbatore',
          period: 'Jan 2025',
          description: 'Created technical and non-technical content for blogs, websites, and social media to support digital campaigns.'
        },
        {
          role: 'Content Writing • Internship',
          company: 'Sansys Business Solutions, Coimbatore',
          period: 'Aug 2024',
          description: 'Developed engaging content for various digital platforms.'
        },
        {
          role: 'Various Internships',
          company: 'Multiple Companies & Roles',
          period: '2024 - 2025',
          description: 'Gained hands-on experience in Technical Support, Content Writing, and Digital Marketing through multiple internship roles, contributing to live projects and campaigns.'
        }
    ],
    education: [
        {
          degree: 'Bachelor of Engineering (B.E), Computer Science',
          institution: 'Jai Shriram Engineering College',
          period: '2022 - 2026'
        },
        {
          degree: 'Senior Secondary (XII), Stateboard Of Tamilnadu',
          institution: 'VEVEAHAM MATRIC HIGHER SECONDARY SCHOOL',
          period: '2022'
        },
        {
          degree: 'Secondary (X), Stateboard Of Tamilnadu',
          institution: 'VEVEAHAM MATRIC HIGHER SECONDARY SCHOOL',
          period: '2020'
        }
    ],
    certifications: [
        {
            name: 'Java',
            provider: 'Jai Shriram Engineering College, Tiruppur',
            date: 'Feb 2025',
            description: 'Proficient in Java with experience in OOP, data structures, and backend development. Familiar with multithreading, exception handling, and API integration.'
        },
        {
            name: 'Power BI',
            provider: 'SimpleLearn, Virtual',
            date: 'Oct 2024',
            description: 'Skilled in creating interactive dashboards and reports, performing data modeling with DAX, and transforming complex data into actionable business insights.'
        },
        {
            name: 'Full Stack Development',
            provider: 'Altalya, Tiruppur',
            date: 'May 2024',
            description: 'Gained proficiency in React.js, HTML, CSS, and JavaScript. Built interactive web pages with dynamic content and user engagement.'
        }
    ]
};

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


const Resume: React.FC = () => {
  return (
    <SectionWrapper id="resume">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        My Resume
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        {/* Work Experience Column */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
            <Briefcase size={28} /> Work Experience
          </h3>
          <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
            {resumeData.workExperience.map((job, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-slate-900"></div>
                    <p className="font-semibold text-slate-400 text-sm">{job.period}</p>
                    <h4 className="font-bold text-xl text-slate-100 mt-1">{job.role}</h4>
                    <p className="text-slate-300 mb-2 flex items-center gap-2"><Building size={16}/> {job.company}</p>
                    <p className="text-slate-400">{job.description}</p>
                </div>
            ))}
          </div>
        </div>
        
        {/* Education Column */}
        <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                <GraduationCap size={28} /> Education
            </h3>
            <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-slate-900"></div>
                        <p className="font-semibold text-slate-400 text-sm">{edu.period}</p>
                        <h4 className="font-bold text-xl text-slate-100 mt-1">{edu.degree}</h4>
                        <p className="text-slate-300">{edu.institution}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

       {/* Trainings & Certifications Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3 justify-center">
            <Award size={28} /> Trainings & Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
            {resumeData.certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                        <div className="text-blue-400 mt-1"><Code size={24} /></div>
                        <div>
                            <p className="font-semibold text-slate-400 text-sm">{cert.date} via {cert.provider}</p>
                            <h4 className="font-bold text-xl text-slate-100 mt-1">{cert.name}</h4>
                            <p className="text-slate-400 mt-2">{cert.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
