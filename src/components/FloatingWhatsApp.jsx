import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/brandData';

/**
 * Componente FloatingWhatsApp para Acceso Digital Premium.
 * Botón flotante fijado en bottom-6 right-6 con color oficial de WhatsApp (#25D366),
 * icono blanco, pulso animado sutil y tooltip "¿Cotizamos tu proyecto?".
 */
export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    '¡Hola! Vengo desde el sitio web y me gustaría cotizar mi proyecto con Acceso Digital Premium.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip con texto persuasivo */}
      <div
        className={`hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-xl bg-surface/95 text-pureWhite text-xs font-heading font-semibold border border-darkSlate shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0 shadow-neon-glow/20'
            : 'opacity-90 -translate-x-1'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
        </span>
        <span>¿Cotizamos tu proyecto?</span>
      </div>

      {/* Botón Circular Flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Abrir conversación en WhatsApp para cotizar proyecto"
      >
        {/* Anillo de pulso animado sutil */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Icono vectorial oficial de WhatsApp en blanco */}
        <svg
          className="w-7 h-7 fill-white transition-transform group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.93.549 3.733 1.503 5.267L2 22l4.839-1.464A9.972 9.972 0 0 0 12.031 22C17.567 22 22 17.506 22 12.029 22 6.494 17.567 2 12.031 2zm5.789 14.28c-.244.686-1.42 1.309-1.956 1.393-.497.078-1.127.111-3.265-.774-2.569-1.064-4.225-3.692-4.354-3.864-.127-.171-1.042-1.388-1.042-2.647 0-1.259.66-1.879.894-2.137.234-.258.511-.322.682-.322.171 0 .341.002.49.009.157.008.368-.06.575.437.213.513.725 1.768.789 1.897.064.128.107.278.021.449-.085.171-.128.278-.256.427-.128.15-.269.335-.384.45-.128.128-.261.267-.112.523.149.256.662 1.092 1.421 1.768.977.87 1.801 1.139 2.057 1.267.256.128.405.107.554-.064.149-.171.639-.748.81-1.004.17-.256.341-.213.575-.128.235.085 1.492.704 1.748.832.256.128.426.192.49.3.064.107.064.62-.18 1.306z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
