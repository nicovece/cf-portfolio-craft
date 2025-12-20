import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function initScrollReveal() {
	const groups = document.querySelectorAll("[data-reveal-group]")

	groups.forEach((group) => {
		const items = group.querySelectorAll("[data-reveal-item]")

		if (items.length === 0) return
		const groupDelay = parseFloat((group as HTMLElement).dataset.revealGroup || "0")

		gsap.fromTo(
			items,
			{
				opacity: 0,
				y: (index, target) => parseFloat((target as HTMLElement).dataset.revealItemY || "30")
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: groupDelay,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: group,
					start: "top 75%"
				}
			}
		)
	})
}

initScrollReveal()
