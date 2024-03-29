const types = require('./types.cjs');

module.exports = {
    rules: {
        'type-enum': [2, 'always', Object.values(types)],
        'type-case': [2, 'always', 'pascal-case'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'always'],
        'subject-empty': [2, 'never'],
    },
};
