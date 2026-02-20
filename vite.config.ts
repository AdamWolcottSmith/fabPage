import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://wolcott.works",
      routes: [
        "/",
        "/about",
        "/contact",
        "/project/kpmg",
        "/project/ubs-federer",
        "/project/narcissisister-automata",
        "/project/narcissisister-voyage",
        "/project/dating-private-lives",
        "/project/kingdom",
      ],
    }),
  ],
});
