import Code from "@/components/svg/Code.astro";
import Smartphone from "@/components/svg/Smartphone.astro";
import Sparkles from "@/components/svg/Sparkles.astro";
import Chart from "@/components/svg/Chart.astro";

export const contactFeatures = [
  {
    Icon: Code,
    title: "Desarrollo Web",
    description:
      "Sitios modernos.",
  },
  {
    Icon: Smartphone,
    title: "Apps Móviles",
    description:
      "IOS & Android ",
  },
  {
    Icon: Sparkles,
    title: "Automatización",
    description:
      "Innovación",
  },
  {
    Icon: Chart,
    title: "Integraciones",
    description: "APIs & Sistemas",
  }
];

export const contactContent = {
  badge: "Desarrollo de Software",

  title: "Haz de tu negocio una ",

  highlight: "Potencia Digital",

  description:
    "Creamos plataformas web, aplicaciones móviles y software a medida para empresas que buscan automatizar procesos, mejorar su presencia digital y escalar su negocio con tecnología.",

  form: {
    title: "¡Hablemos!",
    subtitle: "Cuéntanos sobre tu proyecto.",

    fields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Cuéntanos tu idea...",
    },

    button: "Enviar mensaje",

    responseTime: "Respondemos normalmente en menos de 24 horas.",
  },
};