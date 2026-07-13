export const siteConfig = {
    company: "CC Soluciones",
    description: "Desarrollo de software a medida, landing pages e integraciones. MVPs, sistemas y automatización con proceso claro y entregas por hitos.",
    phone: "+56927240093",
    email: "ccsolucionesspa@gmail.com",
    whatsappLink: `https://wa.me/56927240093?text=Hola%20CC%20Soluciones%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios.`,
};

export const navConfig = [
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

export const footerConfig = {
    description: `Ayudamos a emprendedores y PYMES a digitalizar su visión con software de alta calidad y tiempos de entrega garantizados.`,
}

export const socialsConfig = {
  linkedin: {
    label: "LinkedIn",
    tooltip: "Conoce nuestra empresa",
    href: "...",
    icon: "mdi:linkedin",
    color: "#0A66C2",
  },

  github: {
    label: "GitHub",
    tooltip: "Nuestros proyectos",
    href: "...",
    icon: "mdi:github",
    color: "#24292f",
  },

  instagram: {
    label: "Instagram",
    tooltip: "Síguenos",
    href: "...",
    icon: "mdi:instagram",
    color:
      "linear-gradient(45deg,#405de6,#833ab4,#e1306c,#fd1d1d,#fcb045)",
  },

  whatsapp: {
    label: "WhatsApp",
    tooltip: "Solicitar cotización",
    href: siteConfig.whatsappLink,
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
