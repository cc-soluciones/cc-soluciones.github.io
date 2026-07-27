export interface ContactInfo {
    phone: string;
    email: string;
    whatsappLink: string;
}

export interface ContactFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ContactForm {
    title: string;
    subtitle: string;
    fields: {
        name: string;
        email: string;
        phone: string;
        message: string;
    };
    button: string;
    responseTime: string;
}

export interface ContactContent {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    form: ContactForm;
}

export const contactInfo: ContactInfo = {
    phone: "+56927240093",
    email: "ccsolucionesspa@gmail.com",
    whatsappLink: "https://wa.me/56927240093?text=Hola%20CC%20Soluciones%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios.",
};

export const contactFeatures: ContactFeature[] = [
    {
        icon: "mdi:code-tags",
        title: "Desarrollo Web",
        description: "Sitios modernos.",
    },
    {
        icon: "mdi:cellphone",
        title: "Apps Móviles",
        description: "IOS & Android",
    },
    {
        icon: "mdi:auto-fix",
        title: "Automatización",
        description: "Innovación",
    },
    {
        icon: "mdi:chart-bar",
        title: "Integraciones",
        description: "APIs & Sistemas",
    },
];