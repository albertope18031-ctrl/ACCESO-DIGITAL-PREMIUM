import React from 'react';
import { MessageCircle, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { getWhatsAppUrl, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../data/brandData';

/**
 * Componente CtaBanner para Acceso Digital Premium.
 * Banner de cierre de alta conversión con borde doble dorado metálico (#E5B63E),
 * fondo degradado profundo, título inspirador y botón de gran tamaño hacia WhatsApp.
 */
export const CtaBanner = () => {
  const ctaMessageUrl = getWhatsAppUrl(
    '¡Hola! Estoy listo para dar el siguiente paso con mi negocio. Quisiera una cotización personalizada con Acceso Digital Premium.'
  );

  return (
    <section id="contacto" className="py-20 bg-midnight relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyanNeon/10 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor del Banner con borde doble dorado metálico y fondo degradado profundo */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-goldMeta via-warmBronze to-goldMeta shadow-2xl">
          {/* Capa interna para el efecto de marco doble dorado */}
          <div className="rounded-[22px] border-2 border-goldMeta/80 bg-gradient-to-br from-surface via-midnight to-[#070e24] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Adornos sutiles de luz en esquinas */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-techBlue/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-goldMeta/15 rounded-full blur-3xl pointer-events-none" />

            {/* Insignia dorada */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-goldMeta/50 bg-goldMeta/15 text-goldMeta text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-goldMeta" />
              <span>TRANSFORMACIÓN DIGITAL RENTABLE</span>
            </div>

            {/* Título */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pureWhite tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Ideas de hoy,{' '}
              <span className="bg-gradient-to-r from-goldMeta to-cyanNeon bg-clip-text text-transparent">
                negocios de mañana
              </span>
            </h2>

            {/* Subtítulo */}
            <p className="mt-6 text-base sm:text-xl text-coolGray max-w-2xl mx-auto leading-relaxed">
              ¿Listo para dar el siguiente paso? Desarrollamos la herramienta exacta que tu negocio necesita para vender más.
            </p>

            {/* Botón principal de gran tamaño con icono de WhatsApp */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={ctaMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-9 sm:px-12 py-5 rounded-2xl bg-cyanNeon text-midnight font-heading font-extrabold text-base sm:text-lg tracking-wide shadow-neon-glow hover:bg-white hover:scale-105 active:scale-[0.98] transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 text-midnight transition-transform group-hover:rotate-12" />
                <span>COTIZAR POR WHATSAPP</span>
                <ArrowRight className="w-5 h-5 text-midnight transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Enlace directo y datos de llamada */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-coolGray font-mono">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-1.5 hover:text-cyanNeon transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyanNeon" />
                <span>Llamada directa: {PHONE_DISPLAY}</span>
              </a>
              <span className="text-darkSlate hidden sm:inline">|</span>
              <span className="text-mutedText">Atención inmediata en Hermosillo y todo México</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
