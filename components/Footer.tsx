
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 py-6 text-center text-slate-400">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Nithish Kumar M. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
