/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // prefer named export instead of default exports
    'import/prefer-default-export': 'off',

    // vue
    // clashes with naming conventions of nuxt for file based routing
    'vue/multi-word-component-names': 'off',
  },
};
