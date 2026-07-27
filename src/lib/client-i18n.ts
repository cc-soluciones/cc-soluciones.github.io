import { translations, type Lang } from "@/data/i18n";
import { store } from "@/lib/store";

function buildMap(lang: Lang): Map<string, string> {
    const map = new Map<string, string>();
    for (const [key, value] of Object.entries(translations[lang])) {
        if (value) map.set(value, key);
    }
    return map;
}

let currentMap = buildMap("es");
let currentLang: Lang = store.getLang();

function walkTextNodes(root: Node, fn: (node: Text) => void) {
    const iter = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    let node: Text | null;
    while ((node = iter.nextNode() as Text | null)) {
        fn(node);
    }
}

export function applyTranslations(target: Lang) {
    if (target === currentLang) return;

    walkTextNodes(document.body, (textNode) => {
        if (!textNode.textContent) return;
        const text = textNode.textContent.trim();
        if (!text) return;

        const parent = textNode.parentElement;
        if (!parent || parent.closest("script, style")) return;

        const key = currentMap.get(text);
        if (key && translations[target]?.[key]) {
            textNode.textContent = textNode.textContent.replace(text, translations[target][key]);
        }
    });

    currentMap = buildMap(target);
    currentLang = target;
}

export function initI18n() {
    const stored = store.getLang();
    if (stored !== "es") {
        applyTranslations(stored);
    }

    store.subscribe(() => {
        const lang = store.getLang();
        document.documentElement.lang = lang;
        applyTranslations(lang);
    });
}