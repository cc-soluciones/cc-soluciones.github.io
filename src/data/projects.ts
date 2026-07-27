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
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 110%" },
        ],
        url: "http://www.blacker.ca",
    },
    {
        images: [
            { src: "projects/ccsoluciones_2_1.jpeg", position: "50% 33%" },
            { src: "projects/ccsoluciones_2_2.jpeg", position: "50% 0%" },
            { src: "projects/ccsoluciones_2_3.jpeg", position: "50% 110%" },
        ],
        url: "https://pinguinoenlaroca.com",
    },
    {
        images: [
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 33%" },
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 110%" },
        ],
        url: "https://lapily.cl",
    },
    {
        images: [
            { src: "projects/ccsoluciones_4_1.png", position: "0% 33%" },
            { src: "projects/ccsoluciones_4_1.png", position: "0% 0%" },
            { src: "projects/ccsoluciones_4_1.png", position: "0% 110%" },
        ],
        url: "https://denaval.cl",
    },
    {
        images: [
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 33%" },
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 110%" },
        ],
        url: "https://www.electronicapowerch.com",
    },
    {
        images: [
            { src: "projects/ccsoluciones_6_1.png", position: "0% 33%" },
            { src: "projects/ccsoluciones_6_1.png", position: "0% 0%" },
            { src: "projects/ccsoluciones_6_1.png", position: "0% 110%" },
        ],
        url: "https://www.maquental.cl",
    },
];
