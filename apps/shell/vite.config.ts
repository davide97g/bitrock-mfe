import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        cart: "http://localhost:8081/assets/remoteEntry.js",
        shop: "http://localhost:8082/assets/remoteEntry.js",
      },
      shared: [],
    }),
  ],
  server: {
    port: 8080,
  },
});
