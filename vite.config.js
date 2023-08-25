// vite.config.js
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    base: "https://cdn.jsdelivr.net/gh/stanleylcy/single-js-react/dist/",
    rollupOptions: {
      input: {
        app: "./src/main.jsx",
      },
    },
  },
});
