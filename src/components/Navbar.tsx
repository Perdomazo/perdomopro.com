import { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gdlTime, setGdlTime] = useState('');

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Guadalajara Local Time clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('es-MX', {
          timeZone: 'America/Mexico_City',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setGdlTime(timeStr);
      } catch {
        setGdlTime('20:18');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E5E2] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-baseline gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-sm py-1"
          aria-label="PerdomoPro - Inicio"
        >
          <span className="font-semibold text-lg tracking-tight text-[#111111] group-hover:opacity-75 transition-opacity">
            {siteConfig.brand}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#60605E]">
            Adrián Perdomo
          </span>
        </a>

        {/* Center/Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-normal font-medium text-[#60605E]" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side technical metadata & quick contact */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Live GDL Clock indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#60605E] px-2.5 py-1 rounded-full bg-[#F2F2EF] border border-[#E5E5E2]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>GDL {gdlTime || 'CST'}</span>
          </div>

          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#FAFAF8] px-3.5 py-1.5 rounded-full border border-[#111111] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>Hablemos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="text-xs font-medium text-[#111111] px-3 py-1.5 rounded-full border border-[#111111]"
          >
            Contacto
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:bg-[#F2F2EF] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FAFAF8] border-b border-[#E5E5E2] px-6 py-8 shadow-xl">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E2]">
              <span className="font-mono text-xs uppercase text-[#60605E]">Navegación</span>
              <div className="flex items-center gap-2 font-mono text-xs text-[#60605E]">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>GDL {gdlTime} (UTC-6)</span>
              </div>
            </div>
            {siteConfig.navigation.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between text-lg font-medium text-[#111111] hover:text-[#60605E] transition-colors py-1"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#60605E]">0{idx + 1}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-[#E5E5E2] flex items-center justify-between text-xs text-[#60605E]">
              <span>Guadalajara, Jalisco, MX</span>
              <span className="font-mono">{siteConfig.coordinates}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
