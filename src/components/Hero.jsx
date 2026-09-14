import React from 'react';
import { MessageSquare, Sparkles, Eye, ArrowDownRight, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { getWhatsAppUrl } from '../data/brandData';

/**
 * Componente Hero para Acceso Digital Premium.
 * Sección principal de impacto visual con resplandor en azul eléctrico,
 * insignia distintiva, encabezado en gradiente, subtítulo persuasivo y botones de conversión.
 */
export const Hero = () => {
  const whatsappHeroUrl = getWhatsAppUrl(
    '¡Hola! Vengo de la página principal y me gustaría cotizar soluciones digitales para llevar mi negocio al siguiente nivel.'
  );

  return (
    <section className="relative min-h-[90vh] bg-midnight flex items-center justify-center pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* Resplandor radial suave en azul eléctrico */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] md:w-[720px] h-[340px] sm:h-[560px] md:h-[720px] bg-techBlue/15 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Resplandor secundario en cian sutil para dar profundidad */}
      <div
        className="absolute top-1/4 right-5 sm:right-20 w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] bg-cyanNeon/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Malla sutil de cuadrícula de fondo */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Insignia Flotante */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyanNeon/40 bg-cyanNeon/10 text-cyanNeon text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-cyanNeon/20 animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyanNeon animate-pulse" />
          <span>TRANSFORMA TU IDEA EN RESULTADOS</span>
        </div>

        {/* Encabezado Principal H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-pureWhite tracking-tight leading-[1.12] max-w-5xl mx-auto">
          Llevamos tu negocio al{' '}
          <span className="bg-gradient-to-r from-cyanNeon to-techBlue bg-clip-text text-transparent">
            siguiente nivel
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-base sm:text-xl text-coolGray max-w-3xl mx-auto leading-relaxed font-sans font-normal">
          Soluciones digitales para hacer tu negocio más visible, moderno y rentable.
        </p>

        {/* Botones de Acción */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md sm:max-w-none mx-auto">
          {/* Botón Primario: Cotizar por WhatsApp */}
          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-techBlue to-cyanNeon text-midnight font-heading font-bold text-sm sm:text-base tracking-wide shadow-blue-glow hover:shadow-neon-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <MessageSquare className="w-5 h-5 transition-transform group-hover:rotate-6 text-midnight" />
            <span>Cotizar por WhatsApp</span>
          </a>

          {/* Botón Secundario: Ver Demos Interactivas */}
          <a
            href="#demos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-goldMeta text-goldMeta hover:bg-goldMeta/10 hover:shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] font-heading font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Eye className="w-5 h-5 text-goldMeta transition-transform group-hover:scale-110" />
            <span>Ver Demos Interactivas</span>
          </a>
        </div>

        {/* Micro-puntos de confianza */}
        <div className="mt-14 pt-8 border-t border-darkSlate/60 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center text-xs text-mutedText">
          <div className="flex items-center sm:justify-center gap-2">
            <Zap className="w-4 h-4 text-cyanNeon flex-shrink-0" />
            <span>Implementación rápida y ágil</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <Smartphone className="w-4 h-4 text-techBlue flex-shrink-0" />
            <span>Diseño 100% responsivo</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-goldMeta flex-shrink-0" />
            <span>Asesoría y soporte continuo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
