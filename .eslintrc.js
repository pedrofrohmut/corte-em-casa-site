module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "off",
    semi: ["warn", "never"],
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "never"],
    curly: "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
}
