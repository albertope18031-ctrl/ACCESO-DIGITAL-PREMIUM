import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/brandData';

/**
 * Componente Navbar para Acceso Digital Premium.
 * Barra de navegación fija con efecto glassmorphism, logotipo corporativo,
 * saltos suaves de sección, botón de cotización directa y menú responsivo.
 */
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto de sombra y blur incrementado al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Demos', href: '#demos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const whatsappCtaUrl = getWhatsAppUrl(
    '¡Hola! Vengo del sitio web de Acceso Digital Premium y me gustaría cotizar un proyecto.'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/95 shadow-lg shadow-midnight/80 border-b border-darkSlate backdrop-blur-md py-3.5'
          : 'bg-midnight/85 backdrop-blur-md border-b border-darkSlate py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo a la izquierda */}
          <a
            href="#"
            className="flex flex-col group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Acceso Digital Premium - Inicio"
          >
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-pureWhite flex items-center gap-1.5">
              ACCESO DIGITAL
            </span>
            <span className="text-[10px] sm:text-xs font-heading font-bold text-goldMeta tracking-[0.35em] uppercase pl-0.5 -mt-1 group-hover:text-goldMeta/90 transition-colors">
              PREMIUM
            </span>
          </a>

          {/* Enlaces Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-coolGray hover:text-cyanNeon transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyanNeon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold text-xs uppercase tracking-wider bg-cyanNeon text-midnight px-5 py-2.5 rounded-full hover:bg-white hover:shadow-neon-glow transition-all duration-300 flex items-center gap-2 group"
            >
              <span>COTIZAR AHORA</span>
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Botón Menú Hamburguesa Móvil */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-coolGray hover:text-cyanNeon hover:bg-surface/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyanNeon"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-cyanNeon" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 border-b border-darkSlate bg-midnight/98 backdrop-blur-xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-coolGray hover:text-cyanNeon hover:bg-surface/60 transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-mutedText" />
            </a>
          ))}

          <div className="pt-2">
            <a
              href={whatsappCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full font-heading font-bold text-center text-xs uppercase tracking-wider bg-cyanNeon text-midnight px-5 py-3 rounded-xl hover:shadow-neon-glow transition-all duration-300 flex items-center justify-center gap-2 shadow-neon-glow"
            >
              <span>COTIZAR AHORA</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
