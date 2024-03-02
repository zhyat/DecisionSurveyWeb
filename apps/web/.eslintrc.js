/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@decision-survey/shared/eslint/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
