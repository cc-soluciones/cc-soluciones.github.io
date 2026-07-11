import Linkedin from "@/components/svg/Linkedin.astro";
import Instagram from "@/components/svg/Instagram.astro";
import Whatsapp from "@/components/svg/Whatsapp.astro";
import GitHub from "@/components/svg/GitHub.astro";
import Mail from "@/components/svg/Mail.astro";

export const nameCompany = "CC Soluciones";
export const metaDescription = "Desarrollo de software a medida, landing pages e integraciones. MVPs, sistemas y automatización con proceso claro y entregas por hitos.";
export const phone = "56937501589";
export const whatsappLink = `https://wa.me/${phone}?text=Hola%20CC%20Soluciones%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios.`;

export const socials = {
  linkedin: {
    label: "LinkedIn",
    tooltip: "Conoce nuestra empresa",
    href: "...",
    Icon: Linkedin,
    color: "#0A66C2",
  },

  github: {
    label: "GitHub",
    tooltip: "Nuestros proyectos",
    href: "...",
    Icon: GitHub,
    color: "#24292f",
  },

  instagram: {
    label: "Instagram",
    tooltip: "Síguenos",
    href: "...",
    Icon: Instagram,
    color:
      "linear-gradient(45deg,#405de6,#833ab4,#e1306c,#fd1d1d,#fcb045)",
  },

  whatsapp: {
    label: "WhatsApp",
    tooltip: "Solicitar cotización",
    href: whatsappLink,
    Icon: Whatsapp,
    color: "#25D366",
  },

  email: {
    label: "Correo",
    tooltip: "ccsolucionesspa@gmail.com",
    href: "mailto:ccsolucionesspa@gmail.com",
    Icon: Mail,
    color: "#ef4444",
  },
};

export const services = [
    {
        label: "Landing pages",
        descriptions: `Diseñamos y desarrollamos landing pages optimizadas para convertir visitas en clientes.
Trabajamos con emprendedores, pymes y startups que buscan captar leads y mejorar su
presencia digital mediante páginas rápidas, claras y optimizadas para SEO.`,
        href: "#landings",
    },
    {
        label: "Software a Medida",
        descriptions: `Desarrollamos software a medida y MVPs enfocados en resolver problemas reales de tu negocio.
Trabajamos con empresas y emprendimientos que necesitan sistemas personalizados, escalables
y adaptados a sus procesos, con entregas por hitos y acompañamiento técnico continuo.`,
        href: "#software",
    },
    {
        label: "Integraciones",
        descriptions: `Conectamos y automatizamos sistemas, plataformas y APIs para optimizar procesos operativos.
Ayudamos a empresas a reducir trabajo manual, minimizar errores y mejorar la eficiencia
mediante integraciones estables, escalables y fáciles de mantener.`,
        href: "#integrations",
    },
];

export const projects = [
    {
        images: [
            {
                src: "projects/ccsoluciones_1_1.jpeg",
                position: "0% 60%",
            },
            {
                src: "projects/ccsoluciones_1_1.jpeg",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_1_1.jpeg",
                position: "0% 110%",
            }
        ],
        title: "blacker",
        url: "http://www.blacker.ca",
        description: "",
        type: "Web",
    },
    {
        images: [
            {
                src: "projects/ccsoluciones_2_1.jpeg",
                position: "50% 33%",
            },
            {
                src: "projects/ccsoluciones_2_2.jpeg",
                position: "50% 0%",
            },
            {
                src: "projects/ccsoluciones_2_3.jpeg",
                position: "50% 110%",
            }
        ],
        title: "Pnguino en la roca",
        url: "https://pinguinoenlaroca.com",
        description: "",
        type: "Web",
    },
    {
        images: [
            {
                src: "projects/ccsoluciones_3_1.jpeg",
                position: "0% 33%",
            },
            {
                src: "projects/ccsoluciones_3_1.jpeg",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_3_1.jpeg",
                position: "0% 110%",
            }
        ],
        title: "La pily",
        url: "https://lapily.cl",
        description: "Proyecto de desarrollo de software a medida para una empresa de alimentos saludables, incluyendo un sistema de gestión de pedidos y clientes.",
        type: "Web",
    },
    {
        images: [
            {
                src: "projects/ccsoluciones_4_1.png",
                position: "0% 33%",
            },
            {
                src: "projects/ccsoluciones_4_1.png",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_4_1.png",
                position: "0% 110%",
            }
        ],
        title: "Denaval",
        url: "https://denaval.cl",
        description: "Proyecto de desarrollo de software a medida para una empresa de alimentos saludables, incluyendo un sistema de gestión de pedidos y clientes.",
        type: "Web",
    },
    {
        images: [
            {
                src: "projects/ccsoluciones_5_1.jpeg",
                position: "0% 33%",
            },
            {
                src: "projects/ccsoluciones_5_1.jpeg",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_5_1.jpeg",
                position: "0% 110%",
            }
        ],
        title: "electronica power",
        url: "https://www.electronicapowerch.com",
        description: "",
        type: "Web",
    },
    {
        images: [
            {
                src: "projects/ccsoluciones_6_1.png",
                position: "0% 33%",
            },
            {
                src: "projects/ccsoluciones_6_1.png",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_6_1.png",
                position: "0% 110%",
            }
        ],
        title: "Maquental",
        url: "https://www.maquental.cl",
        description: "",
        type: "Web",
    },
];

export const nav = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "Servicios",
        href: "#services",
    },
    {
        label: "Proyectos",
        href: "#projects",
    },
    {
        label: "Contacto",
        href: "#contact",
    },
];

export const descriptionFooter = `Ayudamos a emprendedores y PYMES a digitalizar su visión con software de alta calidad y tiempos de entrega garantizados.`;