module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'import/extensions': ['.ts','.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts','.tsx']
    },
    'import/resolver': {
      'node': {
        'extensions': ['.ts','.tsx'],
        "moduleDirectory": [
          "node_modules",
          "src"
        ],
      }
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": [2, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "max-len": ["error", 150],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true,
      "allowHigherOrderFunctions": true
    }],
    "@typescript-eslint/array-type": ["error", {
      "default": "generic",
    }],
  }
}
