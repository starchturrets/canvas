module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  plugins: ['@typescript-eslint'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'prefer-const': 'off',
    'max-len': 'off',
  },
};
