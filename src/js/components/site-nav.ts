export class SiteNav extends HTMLElement {
  // Runs when element is added to DOM
  connectedCallback() {
    // Query elements using data-* attributes
    const header = this.querySelector("[data-header]");
    const toggle = this.querySelector("[data-menu-toggle]");

    // Guard clause - exit early if elements don't exist
    if (!header || !toggle) return;

    // Toggle menu on click
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      // Lock/unlock scroll based on state
      document.documentElement.classList.toggle("overflow-hidden", isOpen);
    });

    // Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("menu-open")) {
        header.classList.remove("menu-open");
        document.documentElement.classList.remove("overflow-hidden");
      }
    });
  }
}