import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin) 
gsap.registerPlugin(ScrollTrigger, SplitText);

const heroTitle = document.getElementById("hero-title");
const heroLine = document.getElementById("hero-line");

if (heroTitle) {
	const split = new SplitText(heroTitle, { type: "words" });

	gsap.from(split.words, {
		opacity: 0,
		x: -40,
		duration: 0.6,
		stagger: 0.1,
		ease: "power2.out",
	});
}

if (heroLine) {
	const line = heroLine.querySelector("polyline");
	gsap.set(line, { drawSVG: "0%" });

	const tl = gsap.timeline();

	// Phase 1: draw from left to right (0% → 100%)
	tl.to(line, {
		drawSVG: "0% 100%",
		duration: 1,
		ease: "power2.out",
	});

	// Phase 2: retract from the left, staying anchored right (0% 100% → 30% 100%)
	tl.to(line, {
		drawSVG: "25% 100%",
		duration: 0.6,
		ease: "power2.inOut",
	});
}

// SVG draw animation for LA FIRMA section brackets
const firmaSvg = document.getElementById("hero_svg");
if (firmaSvg) {
	const polylines = firmaSvg.querySelectorAll("polyline");

	gsap.set(polylines, { drawSVG: "0%" });

	gsap.to(polylines, {
		drawSVG: "100%",
		duration: 1,
		stagger: 0.2,
		ease: "power2.out",
		scrollTrigger: {
			trigger: firmaSvg,
			start: "top 85%",
		},
	});
}

// Reusable text reveal: split by lines, fade up on scroll
document.querySelectorAll(".textReveal").forEach((el) => {
	const split = new SplitText(el, { type: "lines" });

	gsap.from(split.lines, {
		opacity: 0,
		y: 24,
		duration: 0.6,
		stagger: 0.12,
		ease: "power2.out",
		scrollTrigger: {
			trigger: el,
			start: "top 90%",
			end: "bottom 20%",
		},
	});
});
