// 'use strict';

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },

  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],

  plugins: ['prettier', 'node', 'mocha'],

  globals: {
    __DEV__: true
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {
    'import/no-unresolved': [2, { ignore: ['halacious'] }],
    'node/no-missing-require': [2, { allowModules: ['halacious'] }],

    // TODO: Update code and re-enable rules.
    'consistent-return': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'import/order': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'one-var': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',

    'import/extensions': [
      'error',
      'never',
      { packages: 'always', json: 'always' }
    ],

    'no-cond-assign': ['error', 'except-parens'],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Allow HAL properties
    'no-underscore-dangle': ['error', { allow: ['_embedded', '_links'] }],

    'node/no-unpublished-require': 'off',

    'node/no-unsupported-features': [
      'error',
      {
        version: 8,
        ignores: []
      }
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },

  overrides: [
    {
      files: ['lib/representation.js'],
      rules: {
        'no-underscore-dangle': 'off'
      }
    }
  ]
};
