/**
 * Gallery Modal Component
 * Handles opening/closing modal for gallery images
 */

let isInitialized = false

export function initGalleryModal(): void {
	const modal = document.getElementById("gallery-modal") as HTMLDialogElement | null
	if (!modal) return

	// Prevent duplicate initialization
	if (isInitialized) {
		return
	}
	isInitialized = true

	const modalImage = document.getElementById("gallery-modal-image") as HTMLImageElement | null
	const modalCaption = document.getElementById("gallery-modal-caption") as HTMLParagraphElement | null
	const modalEntryTitle = document.getElementById("gallery-modal-entry-title") as HTMLParagraphElement | null
	const triggers = document.querySelectorAll(".gallery__trigger")
	const closeButton = modal.querySelector(".gallery__modal__close")

	if (!modalImage || !modalCaption) return

	// Open modal when trigger is clicked
	triggers.forEach((trigger) => {
		trigger.addEventListener("click", () => {
			const imageUrl = trigger.getAttribute("data-modal-image")
			const altText = trigger.getAttribute("data-modal-alt")
			const caption = trigger.getAttribute("data-modal-caption")
			const entryTitle = trigger.getAttribute("data-modal-entry-title")
			if (imageUrl && altText) {
				// Set image and alt text
				modalImage.src = imageUrl
				modalImage.alt = altText

				// Handle image loading errors
				const handleImageError = () => {
					modalCaption.textContent = `Failed to load image: ${altText || "Unknown"}`
					modalCaption.classList.remove("hidden")
					console.error("Failed to load gallery image:", imageUrl)
				}

				// Handle successful image load
				const handleImageLoad = () => {
					// Set caption if provided
					if (caption) {
						// Clear caption and build it safely with DOM elements
						modalCaption.textContent = ""
						const strong = document.createElement("strong")
						strong.textContent = entryTitle
						modalCaption.appendChild(strong)
						modalCaption.appendChild(document.createTextNode(" " + caption))
						modalCaption.classList.remove("hidden")
					} else {
						modalCaption.textContent = ""
						modalCaption.classList.add("hidden")
					}
				}

				// Remove previous listeners to avoid duplicates
				modalImage.removeEventListener("error", handleImageError)
				modalImage.removeEventListener("load", handleImageLoad)

				// Add new listeners
				modalImage.addEventListener("error", handleImageError)
				modalImage.addEventListener("load", handleImageLoad)

				// Open modal
				modal.showModal()
				document.body.style.overflow = "hidden"

				// Focus the close button for better accessibility
				// If close button doesn't exist or isn't focusable, focus the modal itself
				if (closeButton instanceof HTMLElement) {
					closeButton.focus()
				} else {
					modal.focus()
				}
			}
		})
	})

	// Close modal when close button is clicked
	closeButton?.addEventListener("click", () => {
		modal.close()
	})

	// Close modal when clicking on backdrop (outside content)
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.close()
		}
	})

	// Close modal on ESC key (native <dialog> behavior handles this automatically)
	// Cleanup on close to prevent flash of old content
	modal.addEventListener("close", () => {
		document.body.style.removeProperty("overflow")
		modalImage.removeAttribute("src")
		modalCaption.textContent = ""
	})
}
