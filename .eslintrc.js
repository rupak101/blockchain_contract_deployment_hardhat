module.exports = {
  env: {
    webextensions: true,
    es6: true,
    jest: true,
    mocha: true
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always']
  },
  globals: {
    $: true,
    $$: true
  }
};
