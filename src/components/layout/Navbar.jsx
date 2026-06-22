import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import Button from '../common/Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/templates', label: 'Templates' },
  { to: '/builder', label: 'Builder' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handle = requestAnimationFrame(() => setIsOpen(false));
    return () => cancelAnimationFrame(handle);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-slate-200/50 dark:border-slate-700/50 ${
        scrolled ? 'shadow-md shadow-slate-900/5 dark:shadow-black/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-3">
          <Link to="/" className="flex items-center gap-2 group shrink-0 min-w-0">
            <div className="p-1.5 sm:p-2 rounded-xl gradient-bg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform shrink-0">
              <FiFileText className="text-white text-base sm:text-lg" />
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white truncate">
              Resume<span className="gradient-text">Craft</span>
              <span className="hidden sm:inline"> Pro</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>
            <Button to="/builder" size="sm">Create Resume</Button>
          </div>

          <div className="flex lg:hidden items-center gap-1 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/40 lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden glass border-t border-slate-200/50 dark:border-slate-700/50 relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {link.label === 'Builder' ? 'Resume Builder' : link.label}
                  </NavLink>
                ))}
                <div className="pt-3 pb-2">
                  <Button to="/builder" size="sm" className="w-full !flex">
                    Create Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
