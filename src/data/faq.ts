export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "¿Cuánto tiempo tardan en crear una landing page?",
        answer: "Nuestro proceso estándar para landing pages toma aproximadamente 10 días hábiles desde la aprobación del diseño. Esto incluye: diseño UX/UI, desarrollo responsive, optimización de velocidad, integración de formularios y analytics, y pruebas finales. Si necesitas funcionalidades adicionales como CRM, chatbots o pasarelas de pago, el tiempo puede extenderse 3-5 días adicionales."
    },
    {
        question: "¿Qué es un MVP y por qué debería interesarme?",
        answer: "Un MVP (Producto Mínimo Viable) es la versión más simple de tu producto que permite validar tu idea de negocio con usuarios reales. En 6 semanas desarrollamos una aplicación funcional con las características esenciales para lanzar al mercado, recopilar feedback y iterar. Es ideal para startups y emprendedores que quieren probar su idea sin invertir meses de desarrollo. Trabajamos con entregas por hitos, lo que significa que ves avances cada semana."
    },
    {
        question: "¿Cómo funciona el proceso de desarrollo de software a medida?",
        answer: "Nuestro proceso se divide en 5 fases: (1) Discovery — entendemos tu negocio, usuarios y objetivos; (2) Arquitectura — diseñamos la estructura técnica y elegimos las tecnologías; (3) Diseño UX/UI — creamos prototipos interactivos; (4) Desarrollo — programamos con entregas por sprints de 2 semanas; (5) Lanzamiento y soporte — despliegue, documentación y mantenimiento. Durante todo el proceso tienes acceso directo a nuestro equipo vía WhatsApp y reuniones semanales."
    },
    {
        question: "¿Qué tipo de integraciones pueden realizar?",
        answer: "Integramos prácticamente cualquier sistema o API: pasarelas de pago (Stripe, MercadoPago, WebPay), CRMs (Salesforce, HubSpot, Zoho), ERPs, plataformas de email marketing (Mailchimp, SendGrid), sistemas de inventario, redes sociales, Google Workspace, Microsoft 365, y más. También desarrollamos APIs personalizadas para conectar sistemas legacy con aplicaciones modernas. Evaluamos la viabilidad técnica antes de comenzar y te entregamos documentación completa."
    },
    {
        question: "¿Trabajan con empresas de cualquier tamaño?",
        answer: "Sí, trabajamos con emprendedores individuales, startups en fase inicial, PYMES y empresas medianas. Nuestra metodología se adapta al tamaño y presupuesto de cada cliente. Para emprendedores ofrecemos paquetes de landing pages accesibles; para empresas más grandes, desarrollamos sistemas completos con arquitectura escalable. Lo importante es que el proyecto sea técnicamente viable y esté alineado con nuestros valores de calidad y transparencia."
    },
    {
        question: "¿Ofrecen garantía o soporte después del lanzamiento?",
        answer: "Sí, todos nuestros proyectos incluyen: (1) Garantía de corrección de bugs por 30 días después del lanzamiento; (2) Soporte prioritario por WhatsApp durante el primer mes; (3) Documentación técnica del proyecto; (4) Capacitación básica para que tu equipo pueda administrar el contenido. Además, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, monitoreo de performance y mejoras continuas."
    },
    {
        question: "¿Cuáles son las tecnologías que utilizan?",
        answer: "Trabajamos con tecnologías modernas y probadas: Frontend con React, Next.js, Astro y Vue.js; Backend con Node.js, Python/Django, y Go; Bases de datos PostgreSQL, MongoDB y Redis; Infraestructura en AWS, Vercel, Railway y DigitalOcean; Mobile con React Native y Flutter. Elegimos la stack tecnológica según las necesidades específicas de cada proyecto, siempre priorizando performance, seguridad y escalabilidad."
    }
];
