
import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

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


const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! (This is a demo form)");
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
        Get In Touch
      </h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate-400 mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
        </p>
        <div className="bg-slate-800/50 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" required className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" required className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" rows={5} required className="w-full p-3 bg-slate-700 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/30">
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 flex justify-center items-center space-x-6">
          <a href="https://wa.me/919345587473" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/YOUR_USERNAME/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:nkdpm78@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
