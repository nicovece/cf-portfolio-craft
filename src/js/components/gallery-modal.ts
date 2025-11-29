/**
 * Gallery Modal Component
 * Handles opening/closing modal for gallery images
 */

export function initGalleryModal(): void {
	const modal = document.getElementById('gallery-modal') as HTMLDialogElement | null;
	if (!modal) return;

	const modalImage = document.getElementById('gallery-modal-image') as HTMLImageElement | null;
	const modalCaption = document.getElementById('gallery-modal-caption') as HTMLParagraphElement | null;
	const triggers = document.querySelectorAll('.gallery__trigger');
	const closeButton = modal.querySelector('.gallery__close');

	if (!modalImage || !modalCaption) return;

	// Open modal when trigger is clicked
	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			const imageUrl = trigger.getAttribute('data-modal-image');
			const altText = trigger.getAttribute('data-modal-alt');
			const caption = trigger.getAttribute('data-modal-caption');

			if (imageUrl && altText) {
				// Set image and alt text
				modalImage.src = imageUrl;
				modalImage.alt = altText;

				// Set caption if provided
				if (caption) {
					modalCaption.textContent = caption;
					modalCaption.classList.remove('hidden');
				} else {
					modalCaption.textContent = '';
					modalCaption.classList.add('hidden');
				}

				// Open modal
				modal.showModal();

				// Trap focus within modal
				modalImage.focus();
			}
		});
	});

	// Close modal when close button is clicked
	closeButton?.addEventListener('click', () => {
		modal.close();
	});

	// Close modal when clicking on backdrop (outside content)
	modal.addEventListener('click', (e) => {
		const rect = modal.getBoundingClientRect();
		const isInDialog =
			rect.top <= e.clientY &&
			e.clientY <= rect.top + rect.height &&
			rect.left <= e.clientX &&
			e.clientX <= rect.left + rect.width;

		if (!isInDialog) {
			modal.close();
		}
	});

	// Close modal on ESC key (native <dialog> behavior handles this automatically)
	// But we can add additional cleanup if needed
	modal.addEventListener('close', () => {
		// Optional: Clear image to prevent flash of old content
		// modalImage.src = '';
		// modalCaption.textContent = '';
	});
}
