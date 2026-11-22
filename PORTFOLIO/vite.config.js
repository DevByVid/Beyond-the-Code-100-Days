import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // "/" for Render; the GitHub Pages workflow sets VITE_BASE=/Beyond-the-Code-100-Days/
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
});
