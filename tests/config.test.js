const lint = require('@commitlint/lint').default;
const config = require('../src');

function validateCommit(commit) {
    return lint(commit, config.rules, { });
}

describe('Test commit message linter settings', () => {
    it('Requires type', async () => {
        expect((await validateCommit(': Abcd.')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('changed: Abcd.')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('unknown: Abcd.')).errors.length).toBeGreaterThan(0);
    });

    it('Requires message', async () => {
        expect((await validateCommit('Changed:')).errors.length).toBeGreaterThan(0);
        expect((await validateCommit('xx')).errors.length).toBeGreaterThan(0);
    });
});
