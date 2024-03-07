/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: ["@decision-survey/shared/eslint/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};

