import Linkedin from "@/components/svg/Linkedin.astro";
import Twitter from "@/components/svg/Twitter.astro";
import Instagram from "@/components/svg/Instagram.astro";

export const nameCompany = "CC Soluciones";
export const metaDescription = "Desarrollo de software a medida, landing pages e integraciones. MVPs, sistemas y automatización con proceso claro y entregas por hitos.";

export const socials = {
    linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/ccsoluciones/",
        Icon: Linkedin,
    },
    twitter: {
        label: "Twitter",
        href: "https://twitter.com/ccsoluciones",
        Icon: Twitter,
    },
    instagram: {
        label: "Instagram",
        href: "https://www.instagram.com/ccsoluciones/",
        Icon: Instagram,
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
                src: "projects/ccsoluciones_4_1.jpeg",
                position: "0% 33%",
            },
            {
                src: "projects/ccsoluciones_4_1.jpeg",
                position: "0% 0%",
            },
            {
                src: "projects/ccsoluciones_4_1.jpeg",
                position: "0% 110%",
            }
        ],
        title: "Denaval",
        url: "https://denaval.com",
        description: "Proyecto de desarrollo de software a medida para una empresa de alimentos saludables, incluyendo un sistema de gestión de pedidos y clientes.",
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