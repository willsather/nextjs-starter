module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "root": true,
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": [
    "testing-library",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "prettier/prettier": "warn"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "overrides": [
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      "extends": [
        "plugin:testing-library/react"
      ],
      "rules": {
        "testing-library/no-render-in-setup": [
          "warn",
          {
            "allowTestingFrameworkSetupHook": "beforeEach"
          }
        ]
      }
    }
  ]
};
