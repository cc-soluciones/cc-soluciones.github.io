import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import reveal from "astro-reveal";

// https://astro.build/config
export default defineConfig({
    site: "https://ccsoluciones.github.io",
    base: "/",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), reveal()]
});
