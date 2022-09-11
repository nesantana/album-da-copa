module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: 2,
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unstable-nested-components': 'off',
    'import/no-unresolved': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'import/extensions': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-underscore-dangle': 'off',
    'no-async-promise-executor': 'off',
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-children-prop': 'off',
    'no-console': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/iframe-has-title': 'off'
  }
}