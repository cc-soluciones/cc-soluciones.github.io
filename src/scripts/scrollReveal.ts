document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-12");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                } else {
                    entry.target.classList.remove("opacity-100", "translate-y-0");
                    entry.target.classList.add("opacity-0", "translate-y-12");
                }
            });
        },
        {
            threshold: 0,
            rootMargin: "-20% 0px -20% 0px"
        }
    );

    reveals.forEach(el => observer.observe(el));
});
