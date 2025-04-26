import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold">
            <span className={`${isScrolled ? 'text-blue-600' : 'text-black'}`}>Sea</span>
            <span className={`${isScrolled ? 'text-blue-400' : 'text-blue-200'}`}> Beach</span>
            <span className={`${isScrolled ? 'text-gray-700' : 'text-black'}`}> Villa</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 ">
          <NavLink to="/" isActive={isActive('/')} isScrolled={isScrolled}>
            Home
          </NavLink>
          <NavLink to="/about" isActive={isActive('/about')} isScrolled={isScrolled}>
            About
          </NavLink>
          <NavLink to="/services" isActive={isActive('/services')} isScrolled={isScrolled}>
            Services
          </NavLink>

          <Link 
            to="/contact" 
            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink to="/services" isActive={isActive('/services')} onClick={() => setIsMenuOpen(false)}>
              Services
            </MobileNavLink>
            
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Desktop Navigation Link Component
function NavLink({ children, to, isActive, isScrolled }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? `${isScrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white bg-opacity-20'}`
          : `${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-black hover:text-blue-600'}`

      }`}
    >
      {children}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ children, to, isActive, onClick }) {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md font-medium ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Navbar;
