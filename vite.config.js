import ViteRestart from "vite-plugin-restart";

const host = process.env.DDEV_HOSTNAME;

export default ({ command }) => ({
  base: command === "serve" ? "" : "/static/dist/",
  publicDir: false, // Disable to prevent copying web/ into web/static/dist/
  build: {
    manifest: "manifest.json",
    outDir: "web/static/dist/",
    emptyOutDir: true, // Clean output directory on build
    rollupOptions: {
      input: {
        app: "src/js/main.ts",
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: ["templates/**/*"],
    }),
  ],
  server: {
    cors: {
      origin: `https://${host}`,
      credentials: true,
    },
    hmr: {
      host: host,
    },
    allowedHosts: [host],
    fs: {
      strict: false,
    },
    host: "0.0.0.0",
    origin: "http://localhost:3000",
    port: 3000,
    strictPort: true,
  },
});
