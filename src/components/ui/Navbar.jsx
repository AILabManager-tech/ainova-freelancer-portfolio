import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSystem } from '../../context/SystemContext';

const Navbar = () => {
  const { isOverclocked } = useSystem();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-xl shadow-cyan-glow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className={`w-10 h-10 rounded-full ${
              isOverclocked
                ? 'bg-stark-red shadow-red-glow'
                : 'bg-stark-cyan shadow-cyan-glow'
            } flex items-center justify-center animate-pulse-glow`}>
              <span className="text-stark-black font-bold text-xl font-rajdhani">
                A
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-stark-cyan font-rajdhani tracking-wider">
                AINOVA
              </h1>
              <p className="text-xs text-stark-cyan/60 font-fira">
                STARK EDITION
              </p>
            </div>
          </motion.div>

          {/* Navigation links */}
          <div className="hidden lg:flex items-center space-x-6">
            {[
              { label: 'ACCUEIL', href: '#' },
              { label: 'SERVICES', href: '#services' },
              { label: 'PROJETS', href: '#vault' },
              { label: 'TARIFS', href: '#pricing' },
              { label: 'BLOG', href: '#blog' },
              { label: 'CONTACT', href: '#contact' },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-stark-cyan/80 hover:text-stark-cyan transition-colors font-fira text-sm tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stark-cyan group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className={`w-2 h-2 rounded-full animate-pulse ${
              isOverclocked ? 'bg-stark-red' : 'bg-green-500'
            }`} />
            <span className="text-xs font-fira text-stark-cyan/60 hidden lg:block">
              {isOverclocked ? 'OVERCLOCK ACTIVE' : 'SYSTEM ONLINE'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className={`h-px bg-gradient-to-r from-transparent via-stark-cyan/50 to-transparent ${
        scrolled ? 'opacity-100' : 'opacity-0'
      } transition-opacity`} />
    </motion.nav>
  );
};

export default Navbar;
