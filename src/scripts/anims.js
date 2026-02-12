import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const heroTitle = document.getElementById("hero-title");
const heroLine = document.getElementById("hero-line");

if (heroTitle) {
	const split = new SplitText(heroTitle, { type: "words" });

	gsap.from(split.words, {
		opacity: 0,
		y: 40,
		duration: 0.6,
		stagger: 0.15,
		ease: "power2.out",
	});
}

if (heroLine) {
	gsap.to(heroLine, {
		width: "60%",
		duration: 1,
		ease: "power2.out",
		delay: 0.6,
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

