import styles from "@/styles/typewriter.css?inline";

class AstroTypewriter extends HTMLElement {
	#messages: string[][] = [];
	#writeSpeed = 100;
	#deleteSpeed = 33;
	#waitWritten = 1500;
	#waitDeleted = 500;
	#timeoutId: ReturnType<typeof setTimeout> | null = null;
	#container!: HTMLSpanElement;

	constructor() {
		super();

		this.#writeSpeed = parseInt(this.dataset.writeSpeed!);
		this.#deleteSpeed = parseInt(this.dataset.deleteSpeed!);
		this.#waitWritten = parseInt(this.dataset.waitWritten!);
		this.#waitDeleted = parseInt(this.dataset.waitDeleted!);
		const messages: string[] = JSON.parse(this.dataset.messages!);
		this.#messages = messages.map(this.#localeSafeSplit);

		const stylesheet = new CSSStyleSheet();
		stylesheet.replaceSync(styles);

		const screenreader = document.createElement("span");
		screenreader.classList.add("screenreader-or-print");
		screenreader.innerText = messages.join(", ");

		const container = document.createElement("span");
		container.setAttribute("part", "typewriter");
		container.setAttribute("aria-hidden", "true");

		const shadow = this.attachShadow({ mode: "open" });
		shadow.adoptedStyleSheets = [stylesheet];
		shadow.appendChild(screenreader);
		shadow.appendChild(container);

		this.#container = container;
	}

	#localeSafeSplit(str: string) {
		if (!Intl.Segmenter) {
			return Array.from(str);
		}
		return [...new Intl.Segmenter().segment(str)].map((x) => x.segment);
	}

	#wait(millis: number) {
		return new Promise(
			(res) => (this.#timeoutId = setTimeout(res, millis)),
		);
	}

	#pauseCursor() {
		this.#container.classList.add("paused");
	}

	#resumeCursor() {
		this.#container.classList.remove("paused");
	}

	async #printAnimated({
		chars,
		charIdx,
		direction = "write",
	}: {
		chars: string[];
		charIdx: number;
		direction?: "write" | "delete";
	}): Promise<void> {
		if (charIdx === chars.length) {
			this.#resumeCursor();
			await this.#wait(this.#waitWritten);
			this.#pauseCursor();
			return this.#printAnimated({
				chars,
				charIdx: charIdx - 1,
				direction: "delete",
			});
		}

		if (charIdx === -1) {
			this.#resumeCursor();
			await this.#wait(this.#waitDeleted);
			this.#pauseCursor();
			return;
		}

		const nextCharIdx =
			direction === "write" ? charIdx + 1 : charIdx - 1;
		const newMessage =
			nextCharIdx > 0 ? chars.slice(0, nextCharIdx).join("") : "";

		this.#container.innerText = newMessage;

		const delay =
			direction === "write" ? this.#writeSpeed : this.#deleteSpeed;
		await this.#wait(delay);

		return this.#printAnimated({
			chars,
			charIdx: nextCharIdx,
			direction,
		});
	}

	async #printReducedMotion({ text }: { text: string }) {
		this.#container.innerText = text;
		await this.#wait(
			text.length * this.#writeSpeed +
				this.#waitWritten +
				this.#waitDeleted,
		);
	}

	async #runAnimation() {
		while (this.isConnected) {
			for (const message of this.#messages) {
				const reducedMotion = window.matchMedia(
					"(prefers-reduced-motion: reduce)",
				).matches;

				if (reducedMotion) {
					await this.#printReducedMotion({
						text: message.join(""),
					});
				} else {
					await this.#printAnimated({
						chars: message,
						charIdx: 0,
					});
				}
			}
		}
	}

	connectedCallback() {
		this.#runAnimation();
	}

	disconnectedCallback() {
		if (this.#timeoutId) {
			clearTimeout(this.#timeoutId);
		}
	}
}

customElements.define("astro-typewriter", AstroTypewriter);
