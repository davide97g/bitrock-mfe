import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        profile: "http://localhost:8081/assets/remoteEntry.js",
        cart: "http://localhost:8082/assets/remoteEntry.js",
        shop: "http://localhost:8083/assets/remoteEntry.js",
      },
      shared: [],
    }),
  ],
  server: {
    port: 8080,
  },
});
