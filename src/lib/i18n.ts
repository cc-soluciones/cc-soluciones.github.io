import { translations, type Lang } from "@/data/i18n";

export function t(lang: Lang, key: string): string {
    return translations[lang]?.[key] ?? key;
}
