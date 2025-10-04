
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

const GithubStats: React.FC = () => {
    // IMPORTANT: Replace with your actual GitHub username to show your own stats.
    const githubUsername = "nithish-kumar-m"; 

    return (
        <SectionWrapper id="github-stats">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
                My GitHub Activity
            </h2>
            <div className="flex flex-col items-center gap-8">
                 <p className="text-slate-400 text-center max-w-2xl -mt-4 mb-4">
                    A snapshot of my coding journey and contributions on GitHub.
                </p>
                <div className="w-full max-w-4xl p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
                    <img 
                        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&icon_color=3b82f6&text_color=e2e8f0&title_color=60a5fa&hide_border=true`}
                        alt="GitHub Stats"
                        className="w-full"
                        aria-label={`GitHub stats for ${githubUsername}`}
                    />
                </div>
                 <div className="w-full max-w-4xl flex justify-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
                    <img 
                        src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=dark&background=00000000&border=3b82f6&hide_border=false&date_format=M%20j%5B%2C%20Y%5D`}
                        alt="GitHub Streak"
                         aria-label={`GitHub streak stats for ${githubUsername}`}
                    />
                </div>
                <div className="w-full max-w-4xl p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
                    <img 
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&text_color=e2e8f0&hide_border=true&card_width=450`}
                        alt="Top Languages"
                        className="mx-auto"
                         aria-label={`Top languages for ${githubUsername}`}
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default GithubStats;
