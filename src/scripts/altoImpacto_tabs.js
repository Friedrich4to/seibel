import gsap from "gsap";

function initAltoImpactoTabs() {
	const container = document.getElementById("altoImpactoTabs");
	if (!container) return;

	const tabs = container.querySelectorAll(".impacto-tab");
	const cards = container.querySelectorAll(".impacto-card");

	if (!tabs.length || !cards.length) return;

	let activeIndex = 0;
	let isAnimating = false;

	function switchTo(newIndex) {
		if (newIndex === activeIndex || isAnimating) return;
		isAnimating = true;

		const outgoingCard = cards[activeIndex];
		const incomingCard = cards[newIndex];

		// Update tab button styles
		tabs[activeIndex].classList.remove("bg-bronze", "text-white");
		tabs[activeIndex].classList.add("bg-transparent", "text-dark-slate", "hover:bg-bronze/10");

		tabs[newIndex].classList.remove("bg-transparent", "text-dark-slate", "hover:bg-bronze/10");
		tabs[newIndex].classList.add("bg-bronze", "text-white");

		// GSAP crossfade animation
		const tl = gsap.timeline({
			onComplete: () => {
				outgoingCard.classList.remove("relative");
				outgoingCard.classList.add("absolute", "inset-0");

				incomingCard.classList.remove("absolute", "inset-0");
				incomingCard.classList.add("relative");

				activeIndex = newIndex;
				isAnimating = false;
			},
		});

		// Fade out current card
		tl.to(outgoingCard, {
			opacity: 0,
			y: -20,
			duration: 0.4,
			ease: "power2.in",
		});

		// Fade in new card
		tl.fromTo(
			incomingCard,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: "power2.out",
			},
			"-=0.15"
		);
	}

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const index = parseInt(tab.getAttribute("data-index"), 10);
			switchTo(index);
		});
	});
}

initAltoImpactoTabs();
