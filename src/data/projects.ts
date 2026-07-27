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
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 60%" },
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_1_1.jpeg", position: "0% 110%" },
        ],
        url: "https://agrejur.com/",
        logo: "/companies/agrejurlogo.jpeg",
    },
    {
        images: [
            { src: "projects/ccsoluciones_2_1.jpeg", position: "50% 33%" },
            { src: "projects/ccsoluciones_2_2.jpeg", position: "50% 0%" },
            { src: "projects/ccsoluciones_2_3.jpeg", position: "50% 110%" },
        ],
        url: "https://pro-losnotros.vercel.app",
        logo: "/companies/losnotroslogo.jpeg",
    },
    {
        images: [
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 33%" },
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_3_1.jpeg", position: "0% 110%" },
        ],
        url: "https://lapily.cl",
        logo: "/companies/lapilylogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_4_1.png", position: "0% 33%" },
            { src: "projects/ccsoluciones_4_1.png", position: "0% 0%" },
            { src: "projects/ccsoluciones_4_1.png", position: "0% 110%" },
        ],
        url: "https://denaval.cl",
        logo: "/companies/denavallogo.png",
    },
    {
        images: [
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 33%" },
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 0%" },
            { src: "projects/ccsoluciones_5_1.jpeg", position: "0% 110%" },
        ],
        url: "https://www.electronicapowerch.com",
        logo: "/companies/electronicaplogo.webp",
    },
    {
        images: [
            { src: "projects/ccsoluciones_6_1.png", position: "0% 33%" },
            { src: "projects/ccsoluciones_6_1.png", position: "0% 0%" },
            { src: "projects/ccsoluciones_6_1.png", position: "0% 110%" },
        ],
        url: "https://www.maquental.cl",
        logo: "/companies/maquentallogo.jpg",
    },
];
