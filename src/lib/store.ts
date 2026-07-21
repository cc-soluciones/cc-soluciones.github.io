import type { Lang } from "@/data/i18n";

type Theme = "dark" | "light";
type Listener = () => void;

class Store {
    private theme: Theme = "dark";
    private lang: Lang = "es";
    private listeners: Set<Listener> = new Set();

    constructor() {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as Theme | null;
            const savedLang = localStorage.getItem("lang") as Lang | null;
            this.theme = savedTheme || "dark";
            this.lang = savedLang || "es";
            this.applyTheme();
        }
    }

    getTheme(): Theme {
        return this.theme;
    }

    getLang(): Lang {
        return this.lang;
    }

    toggleTheme() {
        this.theme = this.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", this.theme);
        this.applyTheme();
        this.notify();
    }

    setLang(lang: Lang) {
        this.lang = lang;
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
        this.notify();
    }

    private applyTheme() {
        document.documentElement.classList.toggle("dark", this.theme === "dark");
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notify() {
        this.listeners.forEach((l) => l());
    }
}

export const store = new Store();
