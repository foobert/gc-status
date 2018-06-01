module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: { no-console: false }
};
