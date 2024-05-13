import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        default: "themes/default.css",
        slate: "themes/slate.css",
        stone: "themes/stone.css",
        gray: "themes/gray.css",
        neutral: "themes/neutral.css",
        red: "themes/red.css",
        rose: "themes/rose.css",
        orange: "themes/orange.css",
        green: "themes/green.css",
        blue: "themes/blue.css",
        yellow: "themes/yellow.css",
        violet: "themes/violet.css",
      },
      output: {
        assetFileNames: ({ name }) => {
          if (name.endsWith(".css")) {
            return "[name].min.css";
          }
        },
      },
    },
  },
});
