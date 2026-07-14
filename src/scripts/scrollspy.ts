const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.dataset?.id === id);
            });
        });
    },
    {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
    },
);

sections.forEach((section) => observer.observe(section));
