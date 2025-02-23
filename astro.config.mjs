// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
      },
      experimental: {
        svg: true,
      },
    site: 'https://carlosande99.github.io',
    base: 'Portfolio',
    output: "static",
});
