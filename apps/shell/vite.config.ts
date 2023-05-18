import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const cartHost =
  process.env.NODE_ENV === "prod"
    ? "https://bitrock-mfe-cart.firebaseapp.com"
    : "http://localhost:8081";

const shopHost =
  process.env.NODE_ENV === "prod"
    ? "https://bitrock-mfe-shop.firebaseapp.com"
    : "http://localhost:8082";

export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        cart: `${cartHost}/assets/remoteEntry.js`,
        shop: `${shopHost}/assets/remoteEntry.js`,
      },
      shared: [],
    }),
  ],
  server: {
    port: 8080,
  },
});
