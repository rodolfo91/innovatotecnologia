import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Innovato Tecnologia" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-blue-medium ${
                    isActive ? 'text-blue-medium' : 'text-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="/#servicos"
                className="text-lg font-medium text-gray-700 transition-colors hover:text-blue-medium"
              >
                Serviços
              </a>
            </li>
            <li>
              <NavLink
                to="/diagnostico"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-blue-medium ${
                    isActive ? 'text-blue-medium' : 'text-gray-700'
                  }`
                }
              >
                Diagnóstico
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-blue-medium ${
                    isActive ? 'text-blue-medium' : 'text-gray-700'
                  }`
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
            <nav className="container-custom">
              <ul className="flex flex-col space-y-3">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium ${
                        isActive ? 'text-blue-medium' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <a
                    href="/#servicos"
                    className="block py-2 text-lg font-medium text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/diagnostico"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium ${
                        isActive ? 'text-blue-medium' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Diagnóstico
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contato"
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium ${
                        isActive ? 'text-blue-medium' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;