import React from 'react';
import { BarChart3, Users, Cpu, Clock, TrendingUp } from 'lucide-react';
import { METRIC_PILLARS } from '../data/brandData';

/**
 * Componente MetricsBar para Acceso Digital Premium.
 * Cinta horizontal que exhibe los 5 pilares estratégicos de la marca
 * con iconos en cian neón, círculos en midnight y bordes darkSlate.
 */
export const MetricsBar = () => {
  // Mapeo directo de los 5 pilares con los iconos solicitados de Lucide
  const pillarsConfig = [
    {
      id: 'visibilidad',
      title: 'Más visibilidad',
      icon: BarChart3,
      metric: '+300%',
      subtitle: 'Presencia de marca',
    },
    {
      id: 'clientes',
      title: 'Más clientes',
      icon: Users,
      metric: '2.5x',
      subtitle: 'Ventas directas',
    },
    {
      id: 'procesos',
      title: 'Procesos más simples',
      icon: Cpu,
      metric: '100%',
      subtitle: 'Sin fricción',
    },
    {
      id: 'tiempo',
      title: 'Ahorro de tiempo',
      icon: Clock,
      metric: '-60%',
      subtitle: 'Carga manual',
    },
    {
      id: 'crecimiento',
      title: 'Negocio en crecimiento',
      icon: TrendingUp,
      metric: 'Continuo',
      subtitle: 'Escalabilidad',
    },
  ];

  return (
    <section
      id="beneficios"
      className="bg-surface/60 border-y border-darkSlate py-6 backdrop-blur-sm relative overflow-hidden"
      aria-label="Pilares estratégicos y métricas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {pillarsConfig.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.id}
                className="flex items-center gap-3.5 group transition-transform duration-200 hover:-translate-y-0.5 justify-start sm:justify-center lg:justify-start"
              >
                {/* Círculo midnight con borde darkSlate e icono cian neón */}
                <div className="w-12 h-12 rounded-full bg-midnight border border-darkSlate flex items-center justify-center flex-shrink-0 text-cyanNeon group-hover:border-cyanNeon/50 group-hover:shadow-neon-glow transition-all duration-300">
                  <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Textos descriptivos del pilar */}
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-bold text-sm text-pureWhite tracking-tight truncate group-hover:text-cyanNeon transition-colors">
                    {pillar.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-cyanNeon font-mono font-semibold">{pillar.metric}</span>
                    <span className="text-mutedText">· {pillar.subtitle}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
