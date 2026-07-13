export interface Service {
    label: string;
    description: string;
    href: string;
}

export const services: Service[] = [
    {
        label: "Landing pages",
        description: `Diseñamos y desarrollamos landing pages optimizadas para convertir visitas en clientes.
Trabajamos con emprendedores, pymes y startups que buscan captar leads y mejorar su
presencia digital mediante páginas rápidas, claras y optimizadas para SEO.`,
        href: "#landings",
    },
    {
        label: "Software a Medida",
        description: `Desarrollamos software a medida y MVPs enfocados en resolver problemas reales de tu negocio.
Trabajamos con empresas y emprendimientos que necesitan sistemas personalizados, escalables
y adaptados a sus procesos, con entregas por hitos y acompañamiento técnico continuo.`,
        href: "#software",
    },
    {
        label: "Integraciones",
        description: `Conectamos y automatizamos sistemas, plataformas y APIs para optimizar procesos operativos.
Ayudamos a empresas a reducir trabajo manual, minimizar errores y mejorar la eficiencia
mediante integraciones estables, escalables y fáciles de mantener.`,
        href: "#integrations",
    },
];