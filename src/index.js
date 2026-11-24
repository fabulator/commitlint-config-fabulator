import { types } from './types.js';

const config = {
  rules: {
    'type-enum': [2, 'always', Object.values(types)],
    'type-case': [2, 'always', 'pascal-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'always'],
    'subject-empty': [2, 'never'],
  },
};

export default config;
// `require('commitlint-config-fabulator')` returns the config itself, not the module namespace
export { config as 'module.exports' };
