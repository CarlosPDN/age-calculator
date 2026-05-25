import js from "@eslint/js";
import tseslint from "typescript-eslint";
import tailwind from "eslint-plugin-tailwindcss";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  prettierConfig,
  {
    settings: {
      tailwindcss: {
        cssFiles: ["./src/index.css"],
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
