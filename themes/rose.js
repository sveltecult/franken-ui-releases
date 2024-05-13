import presetQuick from "franken-ui/shadcn-ui/preset-quick";
import common from "./common";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    presetQuick({
      theme: "rose",
    }),
    common,
  ],
};
