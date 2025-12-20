import "../css/main.css"
import { initGalleryModal } from "./components/gallery-modal"

// Note: FOUC may occur in dev mode (Vite CSS injection)
// Production with Blitz caching eliminates this
document.documentElement.classList.add("js-loaded")

// Initialize gallery modal
document.addEventListener("DOMContentLoaded", () => {
	initGalleryModal()

	// Dynamically import GSAP scroll animations (only when elements exist)
	if (document.querySelector("[data-reveal-group]")) {
		import("./components/scroll-reveal")
	}
})

// HMR support for development
if (import.meta.hot) {
	import.meta.hot.accept()
}
