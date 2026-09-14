/**
 * brandData.js
 * Configuración comercial, catálogo de servicios y pilares estratégicos
 * para Acceso Digital Premium.
 */

// =============================================================================
// Constantes Comerciales
// =============================================================================
export const BRAND_NAME = 'Acceso Digital Premium';
export const WHATSAPP_NUMBER = '526624175122';
export const PHONE_DISPLAY = '662 417 5122';

export const COMMERCIAL_INFO = {
  name: BRAND_NAME,
  whatsappNumber: WHATSAPP_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  email: 'contacto@accesodigitalpremium.com',
  city: 'Hermosillo, Sonora',
  country: 'México',
  tagline: 'Soluciones Digitales y Menús QR que impulsan tu negocio al siguiente nivel.',
  schedule: 'Lunes a Sábado de 9:00 AM a 7:00 PM',
};

// =============================================================================
// Generador de Enlaces a WhatsApp Parametrizados
// =============================================================================
/**
 * Genera una URL directa a WhatsApp con el número oficial y un mensaje predefinido codificado.
 * @param {string} [customMessage] - Mensaje personalizado a enviar. Si no se provee, usa uno por defecto.
 * @returns {string} Enlace completo listo para usar en etiquetas <a> o window.open.
 */
export const getWhatsAppUrl = (customMessage) => {
  const defaultMessage = `¡Hola! Me comunico desde el sitio web de ${BRAND_NAME} y me gustaría recibir asesoría sobre sus soluciones digitales.`;
  const messageToSend = customMessage && typeof customMessage === 'string' && customMessage.trim().length > 0
    ? customMessage.trim()
    : defaultMessage;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageToSend)}`;
};

// =============================================================================
// Catálogo de Servicios (Flyer Oficial)
// =============================================================================
export const SERVICES = [
  {
    id: 'paginas-web',
    title: 'Páginas Web Profesionales',
    badge: 'Alta Conversión & Marca',
    tagline: 'Diseño web moderno, veloz y enfocado en captar clientes 24/7',
    description:
      'Creamos sitios web a medida con arquitectura optimizada para buscadores (SEO), velocidad ultrarrápida y diseño responsivo para que tu marca destaque frente a la competencia y genere oportunidades comerciales constantes.',
    iconName: 'Globe',
    features: [
      'Diseño responsivo exclusivo optimizado para celulares, tablets y computadoras',
      'Velocidad de carga ultrarrápida y buenas prácticas técnicas para Google (SEO Local)',
      'Botones de llamado a la acción directa a WhatsApp y llamadas con un solo clic',
      'Integración con Google Maps, redes sociales y formularios de cotización inmediata',
      'Certificado de seguridad SSL (https) y configuración de dominio personalizado',
      'Arquitectura orientada a la experiencia de usuario (UX) para maximizar ventas',
    ],
    quoteMessage:
      '¡Hola! Me interesa cotizar el desarrollo de una Página Web profesional con Acceso Digital Premium para mi negocio.',
    getQuoteUrl() {
      return getWhatsAppUrl(this.quoteMessage);
    },
  },
  {
    id: 'menus-digitales',
    title: 'Menús Digitales Interactivos QR',
    badge: 'Restaurantes & Comercios',
    tagline: 'Tu carta digital accesible al instante, elegante y sin costos de reimpresión',
    description:
      'Revoluciona el servicio en tu restaurante, cafetería o bar con una carta interactiva vía código QR. Actualiza platillos, bebidas, precios y promociones en tiempo real sin volver a gastar en papel.',
    iconName: 'QrCode',
    features: [
      'Acceso instantáneo mediante escaneo QR sin necesidad de descargar aplicaciones',
      'Actualización inmediata de precios, fotos, descripciones y platillos agotados',
      'Diseño visual atractivo de alto impacto con soporte para fotos en alta definición',
      'Organización intuitiva por categorías (entradas, platos fuertes, bebidas, postres)',
      'Opción de pedidos y órdenes directas a WhatsApp desde la mesa o para llevar',
      'Generación de códigos QR vectoriales en alta resolución listos para imprimir',
    ],
    quoteMessage:
      '¡Hola! Quisiera información y cotización para implementar Menús Digitales QR en mi restaurante/negocio con Acceso Digital Premium.',
    getQuoteUrl() {
      return getWhatsAppUrl(this.quoteMessage);
    },
  },
  {
    id: 'digitalizacion-negocios',
    title: 'Digitalización de Negocios',
    badge: 'Transformación Integral',
    tagline: 'Automatiza procesos comerciales, ahorra horas de trabajo y expande tus ventas',
    description:
      'Llevamos negocios tradicionales al ecosistema digital moderno mediante herramientas de automatización, catálogos de servicios, presencia en Google Maps y canales directos de atención al cliente.',
    iconName: 'Sparkles',
    features: [
      'Automatización de respuestas y canales de atención mediante WhatsApp Business',
      'Optimización completa de ficha de negocio en Google Business Profile (Google Maps)',
      'Catálogos digitales interactivos para venta de productos y contratación de servicios',
      'Sistemas de citas, reservas y enlaces de pago integrados para clientes',
      'Reducción drástica de tareas repetitivas y atención al cliente sin fricciones',
      'Asesoría técnica y estratégica personalizada para asegurar el retorno de inversión',
    ],
    quoteMessage:
      '¡Hola! Deseo cotizar la Digitalización de mi negocio con Acceso Digital Premium para optimizar mis procesos y captar más clientes.',
    getQuoteUrl() {
      return getWhatsAppUrl(this.quoteMessage);
    },
  },
];

// =============================================================================
// Pilares Métricos Estratégicos
// =============================================================================
export const METRIC_PILLARS = [
  {
    id: 'visibilidad',
    metric: '+300%',
    metricLabel: 'Mayor Presencia',
    title: 'Más visibilidad',
    description:
      'Posicionamos tu empresa en el mapa digital para que las personas que buscan activamente tus productos o servicios te encuentren antes que a nadie.',
    highlight: 'Tu marca disponible para tus clientes las 24 horas del día.',
    icon: 'Eye',
  },
  {
    id: 'clientes',
    metric: '2.5x',
    metricLabel: 'Tasa de Conversión',
    title: 'Más clientes',
    description:
      'Convertimos el interés de los visitantes en conversaciones de venta directa con interfaces optimizadas y botones de contacto inmediato.',
    highlight: 'Flujo constante de prospectos directo a tu WhatsApp.',
    icon: 'Users',
  },
  {
    id: 'procesos',
    metric: '100%',
    metricLabel: 'Flujo sin Fricción',
    title: 'Procesos más simples',
    description:
      'Modernizamos la experiencia de compra y consulta con menús QR, catálogos claros e información accesible sin demoras ni intermediarios.',
    highlight: 'Menos confusión para tus comensales y compradores.',
    icon: 'Cpu',
  },
  {
    id: 'tiempo',
    metric: '-60%',
    metricLabel: 'Menos Carga Manual',
    title: 'Ahorro de tiempo',
    description:
      'Automatiza el envío de catálogos, menús, ubicaciones y respuestas frecuentes para que tu equipo se concentre en brindar el mejor servicio.',
    highlight: 'Recupera horas valiosas en tu día a día operativo.',
    icon: 'Clock',
  },
  {
    id: 'crecimiento',
    metric: 'Continuo',
    metricLabel: 'Escalabilidad',
    title: 'Negocio en crecimiento',
    description:
      'Construimos una base tecnológica sólida y escalable que evoluciona contigo a medida que agregas nuevos productos, sucursales o servicios.',
    highlight: 'Infraestructura tecnológica lista para acompañar tu éxito.',
    icon: 'TrendingUp',
  },
];

export default {
  BRAND_NAME,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  COMMERCIAL_INFO,
  getWhatsAppUrl,
  SERVICES,
  METRIC_PILLARS,
};
