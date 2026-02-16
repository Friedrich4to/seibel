import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initAltoImpactoScroll() {
	const section = document.querySelector(".alto-impacto-trigger");
	if (!section) return;

	const container = document.getElementById("altoImpactoTabs");
	if (!container) return;

	const tabs = container.querySelectorAll(".impacto-tab");
	const cards = container.querySelectorAll(".impacto-card");
	const totalItems = tabs.length;

	if (totalItems < 2) return;

	/**
	 * Position the card stack: active card in front, next two behind
	 * with offset to the right and decreasing opacity. Wraps around.
	 */
	function setStack(activeIdx, animate) {
		const nextIdx = (activeIdx + 1) % totalItems;
		const nextNextIdx = (activeIdx + 2) % totalItems;

		cards.forEach((card, i) => {
			let props;

			if (i === activeIdx) {
				props = { opacity: 1, x: 0, y: 0, zIndex: 3, visibility: "visible" };
			} else if (i === nextIdx) {
				props = { opacity: 0.55, x: 40, y: 20, zIndex: 2, visibility: "visible" };
			} else if (i === nextNextIdx) {
				props = { opacity: 0.3, x: 80, y: 40, zIndex: 1, visibility: "visible" };
			} else {
				props = { opacity: 0, x: 0, y: 0, zIndex: 0, visibility: "hidden" };
			}

			if (animate) {
				gsap.to(card, { ...props, duration: 0.4, ease: "power2.out", overwrite: true });
			} else {
				gsap.set(card, props);
			}
		});

		// Update tab highlighting
		tabs.forEach((tab, i) => {
			if (i === activeIdx) {
				tab.classList.add("bg-bronze", "text-white");
				tab.classList.remove("bg-transparent", "text-dark-slate", "hover:bg-bronze/10");
			} else {
				tab.classList.remove("bg-bronze", "text-white");
				tab.classList.add("bg-transparent", "text-dark-slate", "hover:bg-bronze/10");
			}
		});
	}

	// Responsive: only activate on desktop (md breakpoint = 768px)
	const mm = gsap.matchMedia();

	mm.add("(min-width: 768px)", () => {
		// Set initial stack without animation
		setStack(0, false);

		let lastActiveIndex = 0;

		// Pin section and drive transitions via scroll progress
		ScrollTrigger.create({
			trigger: section,
			pin: true,
			end: `+=${totalItems * 200}`,
			onUpdate: (self) => {
				const activeIndex = Math.min(
					Math.floor(self.progress * totalItems),
					totalItems - 1
				);
				if (activeIndex !== lastActiveIndex) {
					setStack(activeIndex, true);
					lastActiveIndex = activeIndex;
				}
			},
		});
	});
}

initAltoImpactoScroll();
