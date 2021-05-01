module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "prettier/prettier": "off",
    semi: ["warn", "never"],
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "never"],
    curly: "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-function": "warn"
  }
}
