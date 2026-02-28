import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Product', id: 'product' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-content flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg"
          >
            <span className="text-brand-blue font-black -rotate-12">Q</span>
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">Qvanto AI</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setCurrentPage(link.id)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative ${currentPage === link.id ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              {link.name}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="navbar-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('contact')} 
            className="btn-primary text-[10px] py-2.5 px-6"
          >
            Request a Demo
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => {
                setCurrentPage(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-2 font-bold text-white/80 hover:text-white uppercase tracking-widest text-xs transition-colors"
            >
              {link.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
