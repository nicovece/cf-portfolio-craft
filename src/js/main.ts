import "../css/main.css";
import { SiteNav } from "./components/site-nav";
import { initGalleryModal } from "./components/gallery-modal";

// Register custom elements
if (!customElements.get("site-nav")) {
  customElements.define("site-nav", SiteNav);
}

// Initialize gallery modal
document.addEventListener("DOMContentLoaded", () => {
  initGalleryModal();
});

// HMR support for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
