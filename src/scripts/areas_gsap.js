import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Horizontal scroll animation (index page)
const sections = gsap.utils.toArray(".areas-container section");

if (sections.length) {
	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".trigger",
			pin: true,
			scrub: 1,
			end: "+=2000",
		},
	});
}

// Dynamic panels fade animation (la-firma page)
const panels = gsap.utils.toArray(".dynamic-panel");

if (panels.length > 1) {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".dynamic-section-trigger",
			pin: true,
			scrub: 0.1,
			end: `+=${panels.length * 500}`,
		},
	});

	panels.forEach((panel, i) => {
		if (i > 0) {
			tl.fromTo(
				panels[i - 1],
				{ opacity: 1 },
				{ opacity: 0, duration: 0.5 }
			);
			tl.fromTo(
				panel,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5 },
				"<"
			);
			if (i < panels.length - 1) {
				tl.to({}, { duration: 0.5 });
			}
		}
	});
}
