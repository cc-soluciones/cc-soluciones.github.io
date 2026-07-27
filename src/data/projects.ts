export interface ProjectImage {
    src: string;
    position: string;    
}

export interface Project {
    images: ProjectImage[];
    url: string;
    logo: string;
}

export const projects: Project[] = [
    {
        images: [
            { src: "projects/ccsoluciones_8_1.webp", position: "0% 60%" },
        ],
        url: "https://agrejur.com/",
        logo: "/companies/agrejurlogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_7_1.webp", position: "50% 33%" },
        ],
        url: "https://pro-losnotros.vercel.app",
        logo: "/companies/losnotroslogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_3_1.webp", position: "0% 33%" },
        ],
        url: "https://lapily.cl",
        logo: "/companies/lapilylogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_4_1.webp", position: "0% 33%" },
        ],
        url: "https://denaval.cl",
        logo: "/companies/denavallogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_5_1.webp", position: "0% 33%" },
        ],
        url: "https://www.electronicapowerch.com",
        logo: "/companies/electronicaplogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_6_1.webp", position: "0% 33%" },
        ],
        url: "https://www.maquental.cl",
        logo: "/companies/maquentallogo.webp",
    },
];