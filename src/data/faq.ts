export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = Array.from({ length: 7 }, (_, i) => ({
    question: `faq.${i}.q`,
    answer: `faq.${i}.a`,
}));
