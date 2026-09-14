import React from 'react';
import { ShieldCheck, Sparkles, Trophy, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/brandData';

/**
 * Componente TrustSection para Acceso Digital Premium.
 * Sección de confianza y compromiso comercial con 3 pilares clave:
 * Atención Personalizada, Soluciones a tu Medida y Resultados Reales.
 */
export const TrustSection = () => {
  const trustCards = [
    {
      id: 'atencion',
      title: 'Atención Personalizada',
      icon: ShieldCheck,
      iconColor: 'text-goldMeta',
      iconBg: 'bg-goldMeta/10 border-goldMeta/30',
      hoverBorder: 'hover:border-goldMeta/70 hover:shadow-gold-glow',
      description:
        'Trato humano y directo sin intermediarios ni tickets de soporte impersonales. Nos involucramos a fondo para entender el ADN y objetivos de tu negocio.',
      points: [
        'Comunicación directa y ágil por WhatsApp',
        'Acompañamiento en cada fase del proyecto',
        'Capacitación para que administres tu contenido',
      ],
    },
    {
      id: 'soluciones',
      title: 'Soluciones a tu Medida',
      icon: Sparkles,
      iconColor: 'text-cyanNeon',
      iconBg: 'bg-cyanNeon/10 border-cyanNeon/30',
      hoverBorder: 'hover:border-cyanNeon/70 hover:shadow-neon-glow',
      description:
        'Desarrollos diseñados estratégicamente para las necesidades específicas de tu sector comercial. Cero plantillas genéricas que no aportan valor.',
      points: [
        'Estructura orientada a conversión de ventas',
        'Diseño responsivo optimizado para móviles',
        'Herramientas escalables que crecen con tu marca',
      ],
    },
    {
      id: 'resultados',
      title: 'Resultados Reales',
      icon: Trophy,
      iconColor: 'text-goldMeta',
      iconBg: 'bg-goldMeta/10 border-goldMeta/30',
      hoverBorder: 'hover:border-goldMeta/70 hover:shadow-gold-glow',
      description:
        'Medimos el éxito en clientes que llegan a tu negocio, procesos automatizados y horas de trabajo que ahorras todos los días.',
      points: [
        'Mayor visibilidad ante clientes calificados',
        'Menús QR que agilizan el servicio y rotación',
        'Retorno de inversión claro y comprobable',
      ],
    },
  ];

  return (
    <section className="py-20 bg-midnight relative overflow-hidden" aria-label="Compromiso y Confianza">
      {/* Resplandor decorativo */}
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-techBlue/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con título en tipografía dorada con espaciado amplio */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-heading font-extrabold text-xs sm:text-sm text-goldMeta tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-3">
            TU NEGOCIO, NUESTRO COMPROMISO
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-pureWhite tracking-tight leading-tight">
            Por qué elegir a{' '}
            <span className="bg-gradient-to-r from-cyanNeon to-techBlue bg-clip-text text-transparent">
              Acceso Digital Premium
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-coolGray font-sans">
            Combinamos diseño vanguardista, velocidad técnica y enfoque comercial directo para que tu inversión genere clientes.
          </p>
        </div>

        {/* Cuadrícula de 3 Tarjetas de Confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`rounded-2xl bg-surface/80 border border-darkSlate p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${card.hoverBorder}`}
              >
                <div>
                  {/* Icono superior en círculo */}
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${card.iconBg}`}
                  >
                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>

                  {/* Título de la tarjeta */}
                  <h3 className="font-heading font-extrabold text-xl text-pureWhite mb-3 group-hover:text-cyanNeon transition-colors">
                    {card.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-coolGray text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Puntos destacados */}
                  <ul className="space-y-2.5 pt-4 border-t border-darkSlate/70">
                    {card.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-coolGray/90">
                        <CheckCircle2 className="w-4 h-4 text-cyanNeon flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro-enlace de acción */}
                <div className="mt-8 pt-4 border-t border-darkSlate/60 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(`¡Hola! Quisiera más información sobre el pilar "${card.title}" de Acceso Digital Premium.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-semibold text-coolGray hover:text-cyanNeon flex items-center gap-1 transition-colors group/link"
                  >
                    <span>Conoce más</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
