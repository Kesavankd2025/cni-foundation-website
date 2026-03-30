import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'News & Media', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className="sticky-nav"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.98)'
          : 'rgba(15, 32, 80, 0.03)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.15)' : '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo2.png"
            alt="CNI Foundation Logo"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[13px] font-semibold transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-secondary after:w-full'
                      : `after:w-0 hover:after:w-full ${scrolled ? 'text-primary' : 'text-primary/70'}`
                  }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="btn-secondary flex items-center gap-2 py-2.5 px-6 text-sm"
          >
            <Heart size={15} fill="currentColor" /> Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-xl transition-all"
          style={{ color: scrolled ? '#0f2050' : '#ffffff' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 shadow-2xl absolute w-full left-0 z-50">
          <div className="container flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-3 px-4 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary/5 text-secondary'
                      : 'text-text hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 px-4">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="btn-secondary w-full text-center flex justify-center items-center gap-2 py-3"
              >
                <Heart size={18} fill="currentColor" /> Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
