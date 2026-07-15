import { inView, animate } from "motion";

inView(
	".reveal",
	(el) => {
		const animation = animate(
			el,
			{ opacity: 1, y: 0 },
			{ duration: 0.7, easing: [0.4, 0, 0.2, 1] },
		);

		return () => {
			animation?.cancel();
			animate(el, { opacity: 0, y: 48 }, { duration: 0.5 });
		};
	},
	{ margin: "-20% 0px -20% 0px" },
);
