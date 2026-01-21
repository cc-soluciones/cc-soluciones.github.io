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
        href: "/landing-pages",
    },
    {
        label: "MVP Software",
        href: "/landing-pages",
    },
    {
        label: "App Móviles",
        href: "/landing-pages",
    },
    {
        label: "E-commerce",
        href: "/landing-pages",
    }
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
        label: "Proceso",
        href: "#process",
    },
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