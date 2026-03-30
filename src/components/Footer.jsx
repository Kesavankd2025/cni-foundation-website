import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const programs = [
    { label: 'Skill Training', path: '/programs' },
    { label: 'Civil Engineering Internship', path: '/programs' },
    { label: 'Education Sponsorship', path: '/programs' },
    { label: 'Industry Mentorship', path: '/programs' },
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Impact', path: '/impact' },
    { label: 'News & Media', path: '/news' },
    { label: 'Get Involved', path: '/get-involved' },
    { label: 'Donate Now', path: '/donate' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer style={{ background: 'linear-gradient(180deg, #07133a 0%, #050d28 100%)', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
      {/* Gold top bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #d4a017, #f0b429, #d4a017)' }} />

      {/* Main footer content */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 block">
              <img src="/logo2.png" alt="CNI Foundation" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              A value-based, competent practical skill and training centre essential for the construction and its allied industries. Empowering rural and tribal communities since 2009.
            </p>
            {/* Social buttons */}
            <div className="flex gap-3">
              {['f', 'in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d4a017'; e.currentTarget.style.borderColor = '#d4a017'; e.currentTarget.style.color = '#0f2050'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-base text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#d4a017' }} />
              Programs
            </h4>
            <ul className="flex flex-col gap-3">
              {programs.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-white/50 text-sm transition-all duration-200 flex items-center gap-1.5 group hover:text-white"
                  >
                    <ArrowRight size={13} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#d4a017' }} />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-white/50 text-sm transition-all duration-200 flex items-center gap-1.5 group hover:text-white"
                  >
                    <ArrowRight size={13} className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full inline-block" style={{ background: '#d4a017' }} />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: '#d4a017' }} />
                <span className="text-white/55 text-sm leading-relaxed">
                  CNI Foundation Campus,<br />Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" style={{ color: '#d4a017' }} />
                <a href="tel:+919876543210" className="text-white/55 text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" style={{ color: '#d4a017' }} />
                <a href="mailto:info@cnifoundation.org" className="text-white/55 text-sm hover:text-white transition-colors">
                  info@cnifoundation.org
                </a>
              </li>
            </ul>

            {/* Donate CTA */}
            <Link
              to="/donate"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300"
              style={{ background: 'linear-gradient(90deg,#d4a017,#f0b429)', color: '#0f2050' }}
            >
              Donate Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              &copy; {year} CNI Foundation. All rights reserved. Registered Charity.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
                <a key={t} href="#" className="text-white/30 hover:text-white/70 transition-colors text-xs">{t}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
