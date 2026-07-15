export interface SiteConfig {
    company: string;
    description: string;
    logo: string;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface FooterConfig {
    description: string;
}

export interface SocialLink {
    label: string;
    tooltip: string;
    href: string;
    icon: string;
    color: string;
}

export type SocialId = "linkedin" | "github" | "instagram" | "whatsapp" | "email";

export type SocialsConfig = Record<SocialId, SocialLink>;

export const siteConfig: SiteConfig = {
    company: "CC Soluciones",
    description: "Desarrollo de software a medida, landing pages e integraciones. MVPs, sistemas y automatización con proceso claro y entregas por hitos.",
    logo: "/logo.png",
};

export const navConfig: NavItem[] = [
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
        label: "FAQ's",
        href: "#faq",
    },
    {
        label: "Contacto",
        href: "#contact",
    },
];

export const footerConfig: FooterConfig = {
    description: `Ayudamos a emprendedores y PYMES a digitalizar su visión con software de alta calidad y tiempos de entrega garantizados.`,
};

export const socialsConfig: SocialsConfig = {
    linkedin: {
        label: "LinkedIn",
        tooltip: "Conoce nuestra empresa",
        href: "https://linkedin.com/company/ccsoluciones",
        icon: "mdi:linkedin",
        color: "#0A66C2",
    },
    github: {
        label: "GitHub",
        tooltip: "Nuestros proyectos",
        href: "https://github.com/cc-soluciones",
        icon: "mdi:github",
        color: "#24292f",
    },
    instagram: {
        label: "Instagram",
        tooltip: "Síguenos",
        href: "https://instagram.com/cc-soluciones",
        icon: "mdi:instagram",
        color: "linear-gradient(45deg,#405de6,#833ab4,#e1306c,#fd1d1d,#fcb045)",
    },
    whatsapp: {
        label: "WhatsApp",
        tooltip: "Solicitar cotización",
        href: "https://wa.me/56927240093?text=Hola%20CC%20Soluciones%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios.",
        icon: "mdi:whatsapp",
        color: "#25D366",
    },
    email: {
        label: "Correo",
        tooltip: "ccsolucionesspa@gmail.com",
        href: "mailto:ccsolucionesspa@gmail.com",
        icon: "mdi:email",
        color: "#ef4444",
    },
};
