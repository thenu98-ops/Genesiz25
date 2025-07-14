import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4  max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" onClick={scrollToSection('home')}>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] hover:from-[#2ef2ff] hover:to-[#ff2a93] transition-all duration-500">
              GENESIZ'25
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-10">
            {['Home', 'About', 'Scoreboard', 'Timeline', 'Partners', 'FAQ', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-semibold text-xl group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] transition-all duration-300 group-hover:w-[calc(100%-2rem)] group-hover:left-4"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden w-full transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 bg-black bg-opacity-90">
          {['Home', 'About', 'Scoreboard', 'Timeline', 'Partners', 'FAQ', 'Contact Us'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={(e) => {
                  scrollToSection(item.toLowerCase().replace(' ', ''))(e);
                  setMenuOpen(false); // Close menu after click
                }}
                className="text-white text-lg font-semibold hover:text-[#2ef2ff] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
