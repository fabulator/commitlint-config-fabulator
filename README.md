# Commitlint Config

Shareable config for [commitlint](https://github.com/conventional-changelog/commitlint). Requires Node.js 22.12 or newer.

## How to use

Create `commitlint.config.js` file and enter following config:

```javascript
export default {
    extends: ['fabulator'],
};
```

CommonJS (`commitlint.config.cjs`) works as well:

```javascript
module.exports = {
    extends: ['fabulator'],
};
```

## Format of Commit message

```Changed: Some change in code.```

### Type

Following types are allowed:

- **Changed**
- **Fixed**
- **Removed**
- **Added**
- **Depreciated**
- **Docs**
- **Refactored**
- **Test** - should not be in master branch
- **InProgress, WIP** - should not be in master branch

### Commit message

MUST exist.
