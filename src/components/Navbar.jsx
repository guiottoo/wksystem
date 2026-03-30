import { useState, useEffect } from 'react';
import AllocateLogo from './AllocateLogo';

const navLinks = [
  { label: 'Sistema', href: '#sistema' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Stack', href: '#stack' },
  { label: 'Custos', href: '#custos' },
  { label: 'Investimento', href: '#investimento' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container flex items-center justify-between h-[72px]">
        <a href="#sistema" className="flex-shrink-0">
          <AllocateLogo className="h-7" />
        </a>

        {/* Desktop links — centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-10 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Spacer to balance the logo on desktop */}
        <div className="hidden lg:block w-[140px]" />

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-white/5 px-8 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-base text-gray-400 hover:text-white transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
