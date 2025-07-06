import React, { useEffect, useState } from 'react';
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
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
  // Smooth scroll function to replace HashLink functionality
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#home" onClick={scrollToSection('home')}>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]">
              GENESIZ'25
            </div>
          </a>
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Scoreboard', 'Timeline', 'Partners', 'FAQ', 'Contact Us'].map(item => <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={scrollToSection(item.toLowerCase().replace(' ', ''))} className="text-gray-300 hover:text-[#2ef2ff] transition-colors duration-300 font-medium">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
      </div>
    </header>;
};
export default Header;