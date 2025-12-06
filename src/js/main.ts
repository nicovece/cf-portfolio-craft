import "../css/main.css";
import { initGalleryModal } from "./components/gallery-modal";

// Initialize gallery modal
document.addEventListener("DOMContentLoaded", () => {
  initGalleryModal();
});

// HMR support for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
