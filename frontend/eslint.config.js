import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"], // Define file extensions here
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier: prettierPlugin, // Use the prettier plugin here
    },
    rules: {
      "prettier/prettier": "error", // Enable the prettier rule
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettierConfig, // Apply prettier config
];
