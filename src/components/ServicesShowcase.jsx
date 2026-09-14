import React, { useState } from 'react';
import {
  CheckCircle,
  Globe,
  QrCode,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Lock,
  RotateCcw,
  Smartphone,
  Calendar,
  Clock,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  Star,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/brandData';

/**
 * Componente ServicesShowcase para Acceso Digital Premium.
 * Sección interactiva con selector de pestañas (Tabs), propuesta comercial detallada
 * y 3 simuladores tecnológicos interactivos en vivo (Páginas Web, Menú QR y Agenda en Línea).
 */
export const ServicesShowcase = () => {
  // Estado de la pestaña activa: 'paginas-web' | 'menus-digitales' | 'digitalizacion-negocios'
  const [activeTab, setActiveTab] = useState('paginas-web');

  // ---------------------------------------------------------------------------
  // Estados para el Simulador 1 (Páginas Web)
  // ---------------------------------------------------------------------------
  const [webPreviewDevice, setWebPreviewDevice] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeWebPage, setActiveWebPage] = useState('inicio'); // 'inicio' | 'menu' | 'contacto'

  // ---------------------------------------------------------------------------
  // Estados para el Simulador 2 (Menús Digitales QR)
  // ---------------------------------------------------------------------------
  const [activeMenuCategory, setActiveMenuCategory] = useState('entradas'); // 'entradas' | 'platillos' | 'bebidas'
  const [cartItems, setCartItems] = useState([]);
  const [showQrModal, setShowQrModal] = useState(false);

  // Menú interactivo simulado para el restaurante
  const restaurantMenu = {
    entradas: [
      { id: 'e1', name: 'Tacos Gobernador Crispy', price: 165, tag: 'Más vendido', desc: 'Camarón sazonado con queso fundido y costra dorada.' },
      { id: 'e2', name: 'Guacamole Rústico con Totopos', price: 110, tag: 'Tradicional', desc: 'Aguacate hass fresco, pico de gallo y queso cotija.' },
    ],
    platillos: [
      { id: 'p1', name: 'Rib Eye Sonora Cut (350g)', price: 395, tag: 'Corte Premium', desc: 'A las brasas con mantequilla de romero y papas trufadas.' },
      { id: 'p2', name: 'Hamburguesa Black Angus Trufada', price: 210, tag: 'Recomendado', desc: 'Carne angus, queso gouda ahumado y cebolla caramelizada.' },
    ],
    bebidas: [
      { id: 'b1', name: 'Mixología Cítrica Neón', price: 125, tag: 'Especialidad', desc: 'Ginebra artesanal, infusión de frutos rojos y toque cian.' },
      { id: 'b2', name: 'Limonada de Pepino & Menta', price: 65, tag: 'Refrescante', desc: 'Natural, endulzada con agave orgánico y hierbabuena.' },
    ],
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === itemId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // ---------------------------------------------------------------------------
  // Estados para el Simulador 3 (Digitalización / Agenda de Citas)
  // ---------------------------------------------------------------------------
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('Auditoría Digital Integral');
  const [selectedDate, setSelectedDate] = useState('Mañana');
  const [selectedTime, setSelectedTime] = useState('04:00 PM');
  const [isBooked, setIsBooked] = useState(false);

  // Buscar el servicio activo en brandData
  const currentServiceData =
    SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  // Las 4 características del folleto para la columna comercial
  const primaryFeatures = currentServiceData.features.slice(0, 4);

  // Configuración de las 3 pestañas principales
  const tabsConfig = [
    {
      id: 'paginas-web',
      label: 'Páginas Web',
      icon: Globe,
    },
    {
      id: 'menus-digitales',
      label: 'Menús Digitales QR',
      icon: QrCode,
    },
    {
      id: 'digitalizacion-negocios',
      label: 'Digitalización de Negocios',
      icon: Sparkles,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-midnight relative overflow-hidden">
      {/* Ancla para el salto suave de Demos */}
      <div id="demos" className="absolute -top-10 left-0" aria-hidden="true" />

      {/* Resplandor decorativo de fondo */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-techBlue/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyanNeon/30 bg-cyanNeon/10 text-cyanNeon text-xs font-heading font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES Y DEMOS INTERACTIVAS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-pureWhite tracking-tight">
            Tecnología diseñada para{' '}
            <span className="bg-gradient-to-r from-cyanNeon to-techBlue bg-clip-text text-transparent">
              vender más
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-coolGray font-sans">
            Prueba cómo interactúan tus futuros clientes con cada solución antes de contratarla.
          </p>
        </div>

        {/* 1. Selector de Pestañas (Tabs) Superior */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-surface/80 border border-darkSlate backdrop-blur-md gap-1 sm:gap-2 max-w-full">
            {tabsConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-cyanNeon text-midnight shadow-neon-glow scale-[1.02]'
                      : 'text-coolGray hover:text-pureWhite hover:bg-darkSlate/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-midnight' : 'text-cyanNeon'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Cuadrícula de 2 Columnas para el Servicio Seleccionado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ===================================================================
              Columna Izquierda: Propuesta Comercial
             =================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Insignia dorada de categoría */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 rounded-full bg-goldMeta/15 border border-goldMeta/40 text-goldMeta text-xs font-heading font-semibold tracking-wide mb-4 shadow-sm shadow-goldMeta/10">
              <Star className="w-3.5 h-3.5 text-goldMeta fill-goldMeta" />
              <span>{currentServiceData.badge}</span>
            </div>

            {/* Título del Servicio */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-pureWhite tracking-tight">
              {currentServiceData.title}
            </h3>

            {/* Subtítulo / Tagline */}
            <p className="mt-3 text-cyanNeon font-heading font-semibold text-sm sm:text-base leading-snug">
              {currentServiceData.tagline}
            </p>

            {/* Descripción general */}
            <p className="mt-4 text-coolGray text-sm sm:text-base leading-relaxed">
              {currentServiceData.description}
            </p>

            {/* Lista con las 4 características del folleto */}
            <ul className="mt-6 space-y-3.5" aria-label="Características destacadas">
              {primaryFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-coolGray text-sm">
                  <CheckCircle className="w-5 h-5 text-cyanNeon flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Botón directo de cotización por WhatsApp */}
            <div className="mt-8 pt-6 border-t border-darkSlate">
              <a
                href={getWhatsAppUrl(currentServiceData.quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-techBlue to-cyanNeon text-midnight font-heading font-bold text-sm sm:text-base shadow-blue-glow hover:shadow-neon-glow hover:scale-[1.02] transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110 text-midnight" />
                <span>Solicitar cotización de este servicio</span>
              </a>
              <p className="mt-2.5 text-xs text-mutedText flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyanNeon" />
                <span>Respuesta directa y personalizada en WhatsApp oficial</span>
              </p>
            </div>
          </div>

          {/* ===================================================================
              Columna Derecha: Simulador / Mockup Interactivo en Vivo
             =================================================================== */}
          <div className="lg:col-span-7">
            {/* Marco de Dispositivo Tecnológico (borde darkSlate y fondo surface) */}
            <div className="w-full rounded-2xl sm:rounded-3xl border border-darkSlate bg-surface/90 shadow-2xl p-3 sm:p-5 backdrop-blur-xl relative">
              {/* ===============================================================
                  SIMULADOR 1: PÁGINAS WEB (Navegador Web Responsivo)
                 =============================================================== */}
              {activeTab === 'paginas-web' && (
                <div className="rounded-xl overflow-hidden border border-darkSlate bg-midnight">
                  {/* Barra de Control del Navegador */}
                  <div className="bg-[#0b152d] px-4 py-3 border-b border-darkSlate flex items-center justify-between gap-3">
                    {/* Botones estilo macOS */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    {/* Barra de Dirección URL con candado SSL */}
                    <div className="flex-1 max-w-sm sm:max-w-md mx-auto bg-midnight/90 border border-darkSlate rounded-lg px-3 py-1 flex items-center gap-2 text-xs text-coolGray font-mono">
                      <Lock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate text-coolGray">https://restaurantelaterraza.com</span>
                      <RotateCcw className="w-3 h-3 text-mutedText ml-auto cursor-pointer hover:text-cyanNeon" />
                    </div>

                    {/* Toggle Desktop / Mobile View */}
                    <div className="flex items-center gap-1 bg-surface rounded-lg p-0.5 border border-darkSlate">
                      <button
                        type="button"
                        onClick={() => setWebPreviewDevice('desktop')}
                        className={`px-2 py-1 text-[11px] rounded font-medium transition-colors ${
                          webPreviewDevice === 'desktop'
                            ? 'bg-cyanNeon text-midnight font-bold'
                            : 'text-coolGray hover:text-white'
                        }`}
                      >
                        Web
                      </button>
                      <button
                        type="button"
                        onClick={() => setWebPreviewDevice('mobile')}
                        className={`px-2 py-1 text-[11px] rounded font-medium transition-colors ${
                          webPreviewDevice === 'mobile'
                            ? 'bg-cyanNeon text-midnight font-bold'
                            : 'text-coolGray hover:text-white'
                        }`}
                      >
                        Móvil
                      </button>
                    </div>
                  </div>

                  {/* Lienzo del Sitio Web Simulado */}
                  <div
                    className={`transition-all duration-300 mx-auto ${
                      webPreviewDevice === 'mobile' ? 'max-w-[340px] my-3 border-x border-darkSlate' : 'w-full'
                    }`}
                  >
                    {/* Mini Barra de Navegación del Sitio */}
                    <div className="bg-surface/90 px-4 py-2.5 border-b border-darkSlate/60 flex items-center justify-between text-xs">
                      <span className="font-heading font-extrabold text-pureWhite tracking-wide flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-goldMeta" />
                        LA TERRAZA REST
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveWebPage('inicio')}
                          className={`text-[11px] font-medium transition-colors ${
                            activeWebPage === 'inicio' ? 'text-cyanNeon underline' : 'text-coolGray hover:text-white'
                          }`}
                        >
                          Inicio
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveWebPage('menu')}
                          className={`text-[11px] font-medium transition-colors ${
                            activeWebPage === 'menu' ? 'text-cyanNeon underline' : 'text-coolGray hover:text-white'
                          }`}
                        >
                          Especialidades
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveWebPage('contacto')}
                          className={`text-[11px] font-medium transition-colors ${
                            activeWebPage === 'contacto' ? 'text-cyanNeon underline' : 'text-coolGray hover:text-white'
                          }`}
                        >
                          Contacto
                        </button>
                      </div>
                    </div>

                    {/* Contenido Dinámico según página simulada */}
                    <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0B1736] to-midnight min-h-[260px] flex flex-col justify-between">
                      {activeWebPage === 'inicio' && (
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-goldMeta/20 text-goldMeta text-[11px] font-bold mb-3 border border-goldMeta/30">
                            <Star className="w-3 h-3 fill-goldMeta text-goldMeta" />
                            <span>Calificación 4.9 · 420+ Opiniones</span>
                          </div>
                          <h4 className="font-heading font-extrabold text-lg sm:text-xl text-pureWhite leading-tight">
                            La mejor experiencia culinaria de la ciudad en tu mesa.
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm text-coolGray max-w-md">
                            Cocina a la leña, coctelería de autor y reservaciones en línea directas a WhatsApp.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2.5">
                            <button
                              type="button"
                              onClick={() => setActiveWebPage('menu')}
                              className="px-3.5 py-1.5 rounded-lg bg-cyanNeon text-midnight font-heading font-bold text-xs hover:bg-white transition-colors"
                            >
                              Ver Especialidades
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveWebPage('contacto')}
                              className="px-3.5 py-1.5 rounded-lg border border-darkSlate text-coolGray font-medium text-xs hover:text-white hover:border-coolGray transition-colors"
                            >
                              Ubicación & Horarios
                            </button>
                          </div>
                        </div>
                      )}

                      {activeWebPage === 'menu' && (
                        <div className="space-y-2.5">
                          <h4 className="font-heading font-bold text-sm text-pureWhite flex items-center justify-between">
                            <span>Especialidades del Chef</span>
                            <span className="text-[11px] text-cyanNeon font-mono">Actualizado hoy</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="p-2.5 rounded-lg bg-surface/80 border border-darkSlate/80 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-pureWhite">Tomahawk Prime Sonora</p>
                                <p className="text-[10px] text-mutedText">Guarnición rústica</p>
                              </div>
                              <span className="text-xs font-mono font-bold text-goldMeta">$480</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-surface/80 border border-darkSlate/80 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-pureWhite">Salmón Glaseado al Miso</p>
                                <p className="text-[10px] text-mutedText">Espárragos y ajonjolí</p>
                              </div>
                              <span className="text-xs font-mono font-bold text-goldMeta">$320</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeWebPage === 'contacto' && (
                        <div className="space-y-3">
                          <h4 className="font-heading font-bold text-sm text-pureWhite">Reserva o Visítanos</h4>
                          <div className="p-3 rounded-lg bg-surface/80 border border-darkSlate text-xs space-y-1.5">
                            <p className="text-coolGray flex items-center justify-between">
                              <span>📍 Ubicación:</span>
                              <span className="text-pureWhite font-medium">Blvd. Principal #104</span>
                            </p>
                            <p className="text-coolGray flex items-center justify-between">
                              <span>🕒 Horario:</span>
                              <span className="text-pureWhite font-medium">Mar a Dom: 1:00 PM - 11:00 PM</span>
                            </p>
                            <p className="text-coolGray flex items-center justify-between">
                              <span>💬 WhatsApp:</span>
                              <span className="text-cyanNeon font-bold">662 417 5122</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Botón Destacado: Ver Demo en Vivo */}
                      <div className="mt-5 pt-4 border-t border-darkSlate/60 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          <span className="text-[11px] text-coolGray font-mono">100% SEO Ready · 99/100 Speed</span>
                        </div>

                        <a
                          href={getWhatsAppUrl('¡Hola! Me encantó el demo de Página Web y deseo ver más ejemplos o cotizar.')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-darkSlate border border-cyanNeon/50 text-cyanNeon text-xs font-heading font-bold transition-all shadow-sm shadow-cyanNeon/20"
                        >
                          <span>Ver Demo en Vivo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  SIMULADOR 2: MENÚS DIGITALES QR (Simulador Smartphone & Carrito)
                 =============================================================== */}
              {activeTab === 'menus-digitales' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  {/* Smartphone Mockup Stylized */}
                  <div className="md:col-span-8 max-w-[360px] mx-auto w-full bg-midnight rounded-[32px] p-3 border-2 border-darkSlate shadow-2xl relative overflow-hidden">
                    {/* Isla Dinámica / Notch */}
                    <div className="w-28 h-4 bg-darkSlate rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-midnight inline-block" />
                    </div>

                    {/* Cabecera del Restaurante en el Menú */}
                    <div className="bg-surface rounded-2xl p-3 border border-darkSlate/60 mb-3 text-center">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-cyanNeon bg-cyanNeon/10 px-2 py-0.5 rounded-full">
                          MESA #04 · ACTIVA
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowQrModal(!showQrModal)}
                          className="text-[10px] text-goldMeta hover:underline flex items-center gap-1 font-bold"
                        >
                          <QrCode className="w-3 h-3" />
                          <span>{showQrModal ? 'Ocultar QR' : 'Ver QR Real'}</span>
                        </button>
                      </div>
                      <h5 className="font-heading font-extrabold text-sm text-pureWhite">BISTRO & GRILL GOURMET</h5>
                      <p className="text-[11px] text-coolGray">Carta digital sin fricciones</p>
                    </div>

                    {/* Modal o Vista de Código QR Generativo Real */}
                    {showQrModal ? (
                      <div className="p-4 bg-surface rounded-2xl border border-cyanNeon/40 text-center animate-fade-in my-2">
                        <p className="text-xs font-bold text-pureWhite mb-2">Escanea con la cámara de tu celular:</p>
                        <div className="bg-white p-2.5 rounded-xl inline-block shadow-md">
                          {/* Generación de QR oficial usando API generativa con URL parametrizada */}
                          <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwa.me%2F526624175122%3Ftext%3DHola%21%20Escanee%20el%20demo%20del%20Menu%20QR%20de%20Acceso%20Digital%20Premium&color=050B1E&bgcolor=FFFFFF"
                            alt="Código QR Demo Menú Digital Acceso Digital Premium"
                            className="w-36 h-36 mx-auto rounded"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 text-[10px] text-cyanNeon font-mono">
                          Abre la cámara de tu teléfono y pruébalo en tiempo real
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Selector de Categorías (Entradas, Platillos, Bebidas) */}
                        <div className="flex items-center gap-1 p-1 bg-surface rounded-xl border border-darkSlate/60 mb-3">
                          {['entradas', 'platillos', 'bebidas'].map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setActiveMenuCategory(cat)}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-heading font-bold capitalize transition-colors ${
                                activeMenuCategory === cat
                                  ? 'bg-cyanNeon text-midnight shadow-sm'
                                  : 'text-coolGray hover:text-white'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>

                        {/* Lista de Platillos Interactivos */}
                        <div className="space-y-2 mb-3 max-h-[190px] overflow-y-auto pr-1">
                          {restaurantMenu[activeMenuCategory].map((dish) => {
                            const inCart = cartItems.find((i) => i.id === dish.id);

                            return (
                              <div
                                key={dish.id}
                                className="p-2.5 rounded-xl bg-surface/70 border border-darkSlate hover:border-cyanNeon/40 transition-colors flex items-center justify-between gap-2"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-pureWhite truncate">{dish.name}</span>
                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-goldMeta/20 text-goldMeta font-semibold">
                                      {dish.tag}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-mutedText line-clamp-1">{dish.desc}</p>
                                  <span className="text-xs font-mono font-bold text-cyanNeon">${dish.price} MXN</span>
                                </div>

                                <div className="flex items-center gap-1">
                                  {inCart ? (
                                    <div className="flex items-center gap-1 bg-midnight px-1.5 py-1 rounded-lg border border-darkSlate">
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveFromCart(dish.id)}
                                        className="text-coolGray hover:text-white p-0.5"
                                        aria-label="Restar uno"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-xs font-mono font-bold text-cyanNeon px-1">
                                        {inCart.qty}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => handleAddToCart(dish)}
                                        className="text-coolGray hover:text-white p-0.5"
                                        aria-label="Sumar uno"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() => handleAddToCart(dish)}
                                      className="px-2.5 py-1 rounded-lg bg-cyanNeon/20 hover:bg-cyanNeon text-cyanNeon hover:text-midnight text-[11px] font-heading font-bold transition-colors flex items-center gap-1"
                                    >
                                      <Plus className="w-3 h-3" />
                                      <span>Agregar</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}

                    {/* Barra Inferior del Carrito Simulado */}
                    <div className="pt-2 border-t border-darkSlate">
                      <div className="flex items-center justify-between mb-2 text-xs">
                        <span className="text-coolGray flex items-center gap-1.5">
                          <ShoppingBag className="w-3.5 h-3.5 text-cyanNeon" />
                          <span>Pedido en curso:</span>
                        </span>
                        <span className="font-mono font-bold text-pureWhite">
                          {cartTotalCount} {cartTotalCount === 1 ? 'artículo' : 'artículos'} · ${cartTotal} MXN
                        </span>
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `¡Hola! Probé el simulador de Menú QR de Acceso Digital Premium con una orden de prueba ($${cartTotal} MXN) y quiero cotizar este sistema para mi restaurante.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          cartTotalCount > 0
                            ? 'bg-cyanNeon text-midnight shadow-neon-glow hover:bg-white'
                            : 'bg-surface text-coolGray hover:bg-darkSlate border border-darkSlate'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>
                          {cartTotalCount > 0 ? `Enviar Pedido ($${cartTotal})` : 'Simular Pedido a WhatsApp'}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Panel Lateral Informativo del Menú QR */}
                  <div className="md:col-span-4 flex flex-col justify-center space-y-4 text-left">
                    <div className="p-4 rounded-xl bg-midnight/80 border border-darkSlate">
                      <h6 className="font-heading font-bold text-sm text-pureWhite flex items-center gap-2 mb-1.5">
                        <Smartphone className="w-4 h-4 text-cyanNeon" />
                        <span>Experiencia Nativa</span>
                      </h6>
                      <p className="text-xs text-coolGray">
                        Tus comensales escanean con cualquier smartphone sin instalar apps ni registrarse.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-midnight/80 border border-darkSlate">
                      <h6 className="font-heading font-bold text-sm text-pureWhite flex items-center gap-2 mb-1.5">
                        <Flame className="w-4 h-4 text-goldMeta" />
                        <span>Aumento del Ticket</span>
                      </h6>
                      <p className="text-xs text-coolGray">
                        Las fotos de alta calidad y recomendaciones aumentan hasta un 28% el consumo promedio.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowQrModal(!showQrModal)}
                      className="w-full py-2 px-3 rounded-lg border border-cyanNeon/50 text-cyanNeon text-xs font-heading font-semibold hover:bg-cyanNeon/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>{showQrModal ? 'Volver al Menú Interactivo' : 'Escanear QR de Demostración'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ===============================================================
                  SIMULADOR 3: DIGITALIZACIÓN (Agenda de Citas en 3 Pasos)
                 =============================================================== */}
              {activeTab === 'digitalizacion-negocios' && (
                <div className="p-3 sm:p-5 bg-midnight rounded-xl border border-darkSlate">
                  {/* Encabezado del Simulador */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-darkSlate mb-4">
                    <div>
                      <span className="text-[11px] font-mono text-cyanNeon uppercase tracking-wider">
                        Sistema Automatizado de Reservas
                      </span>
                      <h4 className="font-heading font-bold text-base text-pureWhite">
                        Agenda Inteligente en 3 Pasos
                      </h4>
                    </div>

                    {/* Indicador visual de los 3 pasos */}
                    <div className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-xl border border-darkSlate">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => setBookingStep(step)}
                            className={`w-6 h-6 rounded-full text-xs font-heading font-bold flex items-center justify-center transition-colors ${
                              bookingStep === step
                                ? 'bg-cyanNeon text-midnight'
                                : bookingStep > step
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-darkSlate text-coolGray'
                            }`}
                          >
                            {bookingStep > step ? <Check className="w-3 h-3" /> : step}
                          </button>
                          {step < 3 && <span className="w-2.5 h-0.5 bg-darkSlate" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Paso 1: Seleccionar Servicio */}
                  {bookingStep === 1 && (
                    <div className="space-y-3 animate-fade-in">
                      <p className="text-xs text-coolGray font-medium">Paso 1: Selecciona el tipo de servicio:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          { title: 'Auditoría Digital Integral', time: '30 min', price: 'Gratis' },
                          { title: 'Implementación Menú QR', time: '45 min', price: 'Cotización' },
                          { title: 'Página Web & WhatsApp', time: '40 min', price: 'Estratégico' },
                        ].map((srv) => (
                          <div
                            key={srv.title}
                            onClick={() => setSelectedService(srv.title)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              selectedService === srv.title
                                ? 'border-cyanNeon bg-cyanNeon/10 shadow-sm shadow-cyanNeon/30'
                                : 'border-darkSlate bg-surface/60 hover:border-coolGray/40'
                            }`}
                          >
                            <p className="font-heading font-bold text-xs text-pureWhite leading-snug">{srv.title}</p>
                            <div className="mt-2 flex items-center justify-between text-[11px]">
                              <span className="text-mutedText flex items-center gap-1">
                                <Clock className="w-3 h-3 text-cyanNeon" />
                                {srv.time}
                              </span>
                              <span className="font-mono font-semibold text-goldMeta">{srv.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setBookingStep(2)}
                          className="px-5 py-2 rounded-xl bg-cyanNeon text-midnight font-heading font-bold text-xs flex items-center gap-1.5 hover:bg-white transition-colors"
                        >
                          <span>Continuar a Fecha y Hora</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Paso 2: Elegir Fecha y Hora */}
                  {bookingStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-xs text-coolGray font-medium">Paso 2: Elige tu horario de preferencia:</p>

                      <div>
                        <span className="text-[11px] text-mutedText uppercase font-mono block mb-1.5">Día:</span>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {['Hoy', 'Mañana', 'En 2 días', 'Próximo Lunes'].map((day) => (
                            <button
                              key={day}
                              type="button"
                              onClick={() => setSelectedDate(day)}
                              className={`py-2 px-2 rounded-lg text-xs font-medium border transition-colors ${
                                selectedDate === day
                                  ? 'border-cyanNeon bg-cyanNeon/15 text-cyanNeon font-bold'
                                  : 'border-darkSlate bg-surface/50 text-coolGray hover:text-white'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] text-mutedText uppercase font-mono block mb-1.5">
                          Horarios Disponibles:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['10:00 AM', '12:30 PM', '04:00 PM', '06:00 PM'].map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-2 px-2 rounded-lg text-xs font-mono font-medium border transition-colors ${
                                selectedTime === time
                                  ? 'border-cyanNeon bg-cyanNeon/15 text-cyanNeon font-bold'
                                  : 'border-darkSlate bg-surface/50 text-coolGray hover:text-white'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setBookingStep(1)}
                          className="text-xs text-coolGray hover:text-white"
                        >
                          ← Volver
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingStep(3)}
                          className="px-5 py-2 rounded-xl bg-cyanNeon text-midnight font-heading font-bold text-xs flex items-center gap-1.5 hover:bg-white transition-colors"
                        >
                          <span>Revisar Confirmación</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Paso 3: Resumen y Confirmar por WhatsApp */}
                  {bookingStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-xs text-coolGray font-medium">Paso 3: Confirma tu cita directamente:</p>

                      <div className="p-4 rounded-xl bg-surface/80 border border-darkSlate space-y-2 text-xs">
                        <div className="flex items-center justify-between py-1 border-b border-darkSlate/60">
                          <span className="text-mutedText">Servicio Agendado:</span>
                          <span className="font-heading font-bold text-pureWhite">{selectedService}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-darkSlate/60">
                          <span className="text-mutedText">Fecha:</span>
                          <span className="text-cyanNeon font-semibold">{selectedDate}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-darkSlate/60">
                          <span className="text-mutedText">Horario:</span>
                          <span className="text-cyanNeon font-semibold font-mono">{selectedTime}</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-mutedText">Canal de Confirmación:</span>
                          <span className="text-emerald-400 font-medium flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            WhatsApp Inmediato
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-between">
                        <button
                          type="button"
                          onClick={() => setBookingStep(2)}
                          className="text-xs text-coolGray hover:text-white"
                        >
                          ← Cambiar Horario
                        </button>

                        <a
                          href={getWhatsAppUrl(
                            `¡Hola! Agendé en el simulador web mi cita para "${selectedService}" (${selectedDate} a las ${selectedTime}). Quisiera confirmarla con el equipo de Acceso Digital Premium.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-techBlue to-cyanNeon text-midnight font-heading font-bold text-xs uppercase tracking-wider shadow-blue-glow hover:shadow-neon-glow transition-all flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Confirmar por WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
