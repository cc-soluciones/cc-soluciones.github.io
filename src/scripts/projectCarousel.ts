import type { Project } from "@/data/projects";

interface ProjectCarouselOptions {
	projects: Project[];
	interval?: number;
}

export function initProjectCarousel({
	projects,
	interval = 4000,
}: ProjectCarouselOptions): void {
	let currentProjectIndex = 0;
	const cardElements = document.querySelectorAll(".card-wrapper");
	const btnReload = document.getElementById("btnReloadProjects");

	function animateProjectChange() {
		cardElements.forEach((card) => {
			const images = card.querySelectorAll<HTMLElement>(".feature-img");
			const box = card.querySelectorAll<HTMLElement>("[data-box]");

			images.forEach((img) => img.classList.add("sliding"));
			box.forEach((b) => b.classList.add("sliding"));
		});

		setTimeout(() => {
			currentProjectIndex = (currentProjectIndex + 1) % projects.length;
			const nextProject = projects[currentProjectIndex];

			cardElements.forEach((card, idx) => {
				if (idx === 0) {
					const title = card.querySelector(".project-title");
					const titleTagA = title?.querySelector("a");
					const titleText = title?.querySelector("span");
					const images = card.querySelectorAll<HTMLImageElement>(".feature-img");
					const box = card.querySelectorAll<HTMLElement>("[data-box]");

					if (titleText) titleText.textContent = nextProject.title;
					if (titleTagA) titleTagA.href = nextProject.url;

					images.forEach((img, imgIdx) => {
						img.src = nextProject.images[imgIdx].src;
						img.style.objectPosition =
							nextProject.images[imgIdx].position || "0% 0%";
					});

					images.forEach((img) => img.classList.remove("sliding"));
					box.forEach((b) => b.classList.remove("sliding"));

					void title?.offsetWidth;

					images.forEach((img) => {
						img.classList.add("slide-up-fade");
					});

					setTimeout(() => {
						images.forEach((img) => img.classList.remove("slide-up-fade"));
						box.forEach((b) => b.classList.remove("slide-up-fade"));
					}, 600);
				}
			});
		}, 500);
	}

	btnReload?.addEventListener("click", animateProjectChange);
	setInterval(animateProjectChange, interval);
}
