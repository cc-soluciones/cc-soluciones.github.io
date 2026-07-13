const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle?.addEventListener("click", () => {
    if (mobileMenu?.classList.contains("hidden")) {
        mobileMenu?.classList.remove("hidden");
        mobileMenu?.classList.add("flex");
    } else {
        mobileMenu?.classList.add("hidden");
        mobileMenu?.classList.remove("flex");
    }
});
