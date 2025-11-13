
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  sections: Section[];
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ sections, activeSection }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset for the fixed navbar height
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors">
              Ishaan Goswami
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? 'text-white bg-indigo-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
