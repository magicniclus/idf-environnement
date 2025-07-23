import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Désactive la règle qui exige d'échapper les apostrophes dans le JSX
      "react/no-unescaped-entities": "off",
      // Désactive la règle qui signale les variables importées mais non utilisées
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];

export default eslintConfig;
