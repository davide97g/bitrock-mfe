import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  plugins: [
    vue(),
    federation({
      name: "profile",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/main.ts",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 8081,
  },
  preview: {
    host: "localhost",
    port: 8081,
  },
});
