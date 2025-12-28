import ts from "@eslint/ts-eslint"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"


const config = [
  ts.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.ts", "tests/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
        console: "readonly",
        process: "readonly",
        URLSearchParams: "readonly",
        setTimeout: "readonly",
        global: "readonly"
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    }
  }
]

export default config
