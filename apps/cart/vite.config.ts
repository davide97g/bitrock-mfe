import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 8082,
  },
  preview: {
    host: "localhost",
    port: 8082,
  },
});