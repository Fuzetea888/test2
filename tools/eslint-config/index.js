module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Make sure this is last to override other formatting rules
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true, // For frontend code
    node: true, // For backend code
    es2021: true,
  },
  rules: {
    // General ESLint rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars

    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // Use 'warn' instead of 'error' for flexibility
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // React specific rules
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+ new JSX transform
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Add any project-specific rules here
  },
  overrides: [
    {
      // For Node.js/Express files (e.g., in apps/api)
      files: ['**/server.ts', '**/app.ts', '**/routes/**/*.ts', '**/services/**/*.ts', '**/middleware/**/*.ts', '**/*.config.js', '**/*.config.ts'],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      // For test files
      files: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
      env: {
        jest: true, // or 'vitest/globals': true if using vitest specific globals
        node: true, // if tests run in node
        browser: true // if tests run in browser-like env (e.g. jsdom)
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // Often needed in tests
      }
    }
  ],
};
