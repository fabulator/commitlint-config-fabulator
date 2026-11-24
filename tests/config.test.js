import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import lint from '@commitlint/lint';
import config from '../src/index.js';

const errorCount = async (commit) =>
  (await lint(commit, config.rules, {})).errors.length;

describe('Test commit message linter settings', () => {
  it('Accepts valid message', async () => {
    assert.equal(await errorCount('Changed: Abcd.'), 0);
    assert.equal(await errorCount('InProgress: Abcd.'), 0);
  });

  it('Requires type', async () => {
    assert.ok((await errorCount(': Abcd.')) > 0);
    assert.ok((await errorCount('changed: Abcd.')) > 0);
    assert.ok((await errorCount('unknown: Abcd.')) > 0);
  });

  it('Requires message', async () => {
    assert.ok((await errorCount('Changed:')) > 0);
    assert.ok((await errorCount('xx')) > 0);
  });

  it('Forbids scope', async () => {
    assert.ok((await errorCount('Changed(api): Abcd.')) > 0);
  });
});
