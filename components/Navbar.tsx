import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled || isMenuOpen
    ? 'bg-clean-white/80 dark:bg-dark-navy/80 backdrop-blur-lg shadow-md'
    : 'bg-transparent';
  
  const navItems = [
    { name: 'Beranda', href: '#' },
    { name: 'Artikel', href: '#artikel' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${navClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-poppins text-xl font-bold text-dark-navy dark:text-clean-white" onClick={() => setIsMenuOpen(false)}>
          Dunia<span className="text-neon-blue">Programmer</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.slice(1).map(item => (
            <a key={item.name} href={item.href} className="font-medium text-slate-600 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 mr-4"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-slate-800" />}
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
              {isMenuOpen ? <XIcon className="w-7 h-7 text-dark-navy dark:text-clean-white" /> : <MenuIcon className="w-7 h-7 text-dark-navy dark:text-clean-white" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-clean-white/95 dark:bg-dark-navy/95 backdrop-blur-lg pb-6">
          <nav className="flex flex-col items-center space-y-6 pt-4">
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="font-poppins text-lg font-semibold text-dark-navy dark:text-clean-white hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};