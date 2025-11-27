import "../css/main.css";
import { SiteNav } from "./components/site-nav";

// Register custom elements
if (!customElements.get("site-nav")) {
  customElements.define("site-nav", SiteNav);
}

// HMR support for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
