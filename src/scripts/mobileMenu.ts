import { animate } from "motion";

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle?.addEventListener("click", () => {
    if (mobileMenu?.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        animate(
            mobileMenu,
            { opacity: [0, 1], y: [-12, 0] },
            { duration: 0.3, easing: [0.4, 0, 0.2, 1] },
        );
    } else {
        animate(
            mobileMenu,
            { opacity: [1, 0], y: [0, -12] },
            { duration: 0.2, easing: [0.4, 0, 0.2, 1] },
        ).finished.then(() => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        });
    }
});
