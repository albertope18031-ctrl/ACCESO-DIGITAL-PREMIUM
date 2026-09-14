import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesShowcase } from './components/ServicesShowcase';
import { TrustSection } from './components/TrustSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

/**
 * Aplicación principal para Acceso Digital Premium.
 * Ensambla la estructura del sitio corporativo de alto impacto:
 * Navegación, Hero, Métricas, Catálogo & Simuladores, Confianza, CTA, Footer y WhatsApp Flotante.
 */
function App() {
  return (
    <div className="min-h-screen bg-midnight text-coolGray font-sans selection:bg-cyanNeon selection:text-midnight">
      {/* 1. Barra de Navegación Fija */}
      <Navbar />

      {/* 2. Hero Section de Entrada Visual */}
      <main>
        <Hero />

        {/* 3. Cinta de Métricas y 5 Pilares */}
        <MetricsBar />

        {/* 4. Soluciones y Simuladores Interactivos en Vivo */}
        <ServicesShowcase />

        {/* 5. Sección de Compromiso y Confianza */}
        <TrustSection />

        {/* 6. Banner de Cierre de Alta Conversión */}
        <CtaBanner />
      </main>

      {/* 7. Pie de Página Corporativo */}
      <Footer />

      {/* 8. Botón Flotante Oficial de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
