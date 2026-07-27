export interface ProjectImage {
    src: string;
    position: string;
}

export interface Project {
    images: ProjectImage[];
    url: string;
}

export const projects: Project[] = [
    {
        images: [
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 60%" },
        ],
        url: "http://www.blacker.ca",
    },
    {
        images: [
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 33%" },
        ],
        url: "https://lapily.cl",
    },
    {
        images: [
            { src: "projects/ccsoluciones_4_1.png", position: "0% 33%" },
        ],
        url: "https://denaval.cl",
    },
    {
        images: [
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 33%" },
        ],
        url: "https://www.electronicapowerch.com",
    },
    {
        images: [
            { src: "projects/ccsoluciones_6_1.png", position: "0% 33%" },
        ],
        url: "https://www.maquental.cl",
    },
];
