import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function initScrollReveal() {
	const groups = document.querySelectorAll("[data-reveal-group]")

	groups.forEach((group) => {
		const items = group.querySelectorAll("[data-reveal-item]")

		if (items.length === 0) return
		const groupDelay = parseFloat((group as HTMLElement).dataset.revealGroup || "0")
		const fromVars = {
			opacity: 0,
			y: (index, target) => parseFloat((target as HTMLElement).dataset.revealItemY || "30")
		}
		const toVars = {
			opacity: 1,
			y: 0,
			duration: 0.6,
			delay: groupDelay,
			stagger: 0.1,
			ease: "power2.out"
		}
		const inViewOnLoad = ScrollTrigger.isInViewport(group)

		if (inViewOnLoad) {
			gsap.fromTo(items, fromVars, toVars)
			return
		}

		gsap.fromTo(items, fromVars, {
			...toVars,
			scrollTrigger: {
				trigger: group,
				start: "top 75%"
			}
		})
	})
}

initScrollReveal()
