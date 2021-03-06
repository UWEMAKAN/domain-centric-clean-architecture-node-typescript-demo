module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
    typescript: true
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    'airbnb-typescript/base',
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  },
};
