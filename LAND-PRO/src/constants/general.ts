import Linkedin from "@/components/svg/Linkedin.astro";
import Twitter from "@/components/svg/Twitter.astro";
import Instagram from "@/components/svg/Instagram.astro";

export const nameCompany = "CC Soluciones";

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
        descriptions : `Nuestras landing pages están diseñadas para convertir
                        visitas en clientes. Trabajamos la estructura, el
                        contenido y el rendimiento para que tu página no solo se
                        vea bien, sino que genere resultados reales.| Incluimos optimización SEO, carga rápida, diseño
                        responsive y un proceso claro de trabajo, con entregas
                        en 10 días y acompañamiento continuo.`,
        href: "#landings",
    },
    {
        label: "Software a Medida",
        descriptions : `Desarrollamos software a medida enfocado en resolver problemas reales de tu negocio. 
                        Trabajamos con un proceso claro, priorizando un MVP funcional que te permita validar, 
                        ajustar y escalar sin sobreinvertir.|Nuestro enfoque por hitos, la visibilidad 
                        constante del avance y el acompañamiento técnico continuo te permiten tener 
                        control total del proyecto desde el inicio hasta la entrega final.`,
        href: "#software",
    },
    {
        label: "Integraciones",
        descriptions : `Conectamos y automatizamos tus sistemas para que tu negocio funcione de forma
más eficiente. Integramos plataformas, servicios y herramientas existentes
para reducir trabajo manual, minimizar errores y ahorrar tiempo operativo.|
Nuestras integraciones están pensadas para ser estables, escalables y
mantenibles, con soporte y acompañamiento técnico continuo.
`,
        href: "#integrations",
    },
    // {
    //     label: "MVP Software",
    //     descriptions : ``,
    //     href: "/landing-pages",
    // },
    // {
    //     label: "App Móviles",
    //     descriptions : ``,
    //     href: "/landing-pages",
    // },
    // {
    //     label: "E-commerce",
    //     descriptions : ``,
    //     href: "/landing-pages",
    // }
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
    // {
    //     label: "Proceso",
    //     href: "#process",
    // },
    {
        label: "Contacto",
        href: "#contact",
    },
    // {
    //     label: "Stories",
    //     href: "/stories",
    // },
    // {
    //     label: "Pricing",
    //     href: "/pricing",
    // },
    // {
    //     label: "Docs",
    //     href: "/docs",
    // }
];

export const descriptionFooter = `Ayudamos a emprendedores y PYMES a digitalizar su visión con software de alta calidad y tiempos de entrega garantizados.`;