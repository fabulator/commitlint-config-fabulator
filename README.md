# Commitlint Config

Shareable config for [commitling](https://github.com/marionebl/commitlint).

## How to use

Create ```commitlint.config.js``` file and enter following config:

```javascript
module.exports = {
    extends: ['commitlint-config-fabulator'],
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
