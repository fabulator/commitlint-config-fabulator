import fabulator from 'eslint-config-fabulator';

export default [
  { ignores: ['node_modules/', 'package-lock.json', 'CHANGELOG.md'] },
  ...fabulator,
  {
    // commitlint loads shareable configs through their default export
    files: ['src/index.js'],
    rules: { 'import-x/no-default-export': 'off' },
  },
];
