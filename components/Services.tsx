import React, { useEffect, useRef, useState } from 'react';
import { Code2, Megaphone, Wrench, BarChart3 } from 'lucide-react';

const servicesData = [
  {
    name: 'Full-Stack Development',
    description: 'Building responsive and dynamic web applications with a focus on user experience, using modern technologies like React.',
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
  },
  {
    name: 'Digital Marketing & Automation',
    description: 'Creating content and automating marketing workflows with tools like HubSpot to improve lead engagement.',
    icon: <Megaphone className="w-10 h-10 text-blue-400" />,
  },
  {
    name: 'L1 Technical Support',
    description: 'Providing technical support by troubleshooting hardware, software, and network issues to ensure timely resolution.',
    icon: <Wrench className="w-10 h-10 text-blue-400" />,
  },
  {
    name: 'Data Visualization',
    description: 'Creating interactive dashboards and reports with Power BI to transform complex data into actionable business insights.',
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
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

const Services: React.FC = () => {
  return (
    <SectionWrapper id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        Services I Offer
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{service.name}</h3>
            <p className="text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;