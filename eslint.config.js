import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'import/order': ['error', { alphabetize: { order: 'asc' } }],
    },
  },
  js.configs.recommended,
];
