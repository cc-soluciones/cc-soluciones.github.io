document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const trigger = item.querySelector(".faq-trigger");

        trigger?.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach(other => {
                other.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
