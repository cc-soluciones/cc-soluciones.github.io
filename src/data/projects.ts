export interface ProjectImage {
    src: string;
    position: string;
}

export interface Project {
    images: ProjectImage[];
    title: string;
    url: string;
    description: string;
    type: string;
}

export const projects: Project[] = [
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