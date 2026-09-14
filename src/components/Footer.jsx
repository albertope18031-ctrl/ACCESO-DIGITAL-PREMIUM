import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { BRAND_NAME, PHONE_DISPLAY, COMMERCIAL_INFO, getWhatsAppUrl } from '../data/brandData';

/**
 * Componente Footer para Acceso Digital Premium.
 * Pie de página corporativo con fondo #030712, borde superior darkSlate,
 * datos comerciales de Hermosillo, enlaces rápidos y copyright oficial.
 */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-darkSlate text-coolGray font-sans pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-darkSlate/80">
          {/* Columna 1: Marca y Propuesta de Valor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-pureWhite">
                ACCESO DIGITAL
              </span>
              <span className="text-xs font-heading font-bold text-goldMeta tracking-[0.35em] uppercase -mt-1">
                PREMIUM
              </span>
            </div>

            <p className="text-sm text-coolGray max-w-sm leading-relaxed">
              Desarrollamos soluciones digitales, páginas web de alto impacto y menús interactivos QR diseñados para modernizar y multiplicar las ventas de tu negocio.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl('¡Hola! Me gustaría platicar sobre un proyecto con Acceso Digital Premium.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-darkSlate hover:border-cyanNeon/50 text-cyanNeon text-xs font-heading font-semibold transition-all hover:bg-midnight"
              >
                <MessageCircle className="w-4 h-4 text-cyanNeon" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-pureWhite uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#servicios" className="hover:text-cyanNeon transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyanNeon/60" />
                  <span>Servicios</span>
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-cyanNeon transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyanNeon/60" />
                  <span>Beneficios</span>
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyanNeon transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyanNeon/60" />
                  <span>Demos Interactivas</span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyanNeon transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyanNeon/60" />
                  <span>Contacto Directo</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Datos Comerciales Oficiales */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-pureWhite uppercase tracking-wider">
              Contacto Comercial
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyanNeon flex-shrink-0 mt-1" />
                <span>Hermosillo, Sonora, México.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-goldMeta flex-shrink-0 mt-1" />
                <div>
                  <span className="text-mutedText text-xs block">WhatsApp directo:</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pureWhite hover:text-cyanNeon font-mono font-medium transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-techBlue flex-shrink-0 mt-1" />
                <span className="text-coolGray">{COMMERCIAL_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila Inferior: Copyright y Botón de Volver Arriba */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mutedText">
          <p>© 2026 Acceso Digital Premium. Todos los derechos reservados.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-coolGray hover:text-cyanNeon transition-colors group p-1"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <div className="w-7 h-7 rounded-full bg-surface border border-darkSlate flex items-center justify-center group-hover:border-cyanNeon transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-cyanNeon transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
