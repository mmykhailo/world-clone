import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParserTypescript from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules/", "dist/", "build/", ".next/"],
    languageOptions: {
      parser: eslintParserTypescript,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/prop-types": "off",
    },
  },
];