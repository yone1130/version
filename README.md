# Version.js

[日本語で読む >](./README_JP.md)

## Overview

**Version.js** is a TypeScript / JavaScript library for version management.

## Usage

### 1. Install or Import

Install as a package (TypeScript):
```bash
npm i yone1130/version-js
```

or direct importing from CDN (JavaScript):
```js
import { Version, VersionLevel } from "https://cdn.yoneyo.com/scripts/version-js@1.3.0/dist/version.js";
```

### 2. Use

Example code:
```js
const version = new Version({
    major: 1,
    minor: 3,
    patch: 0,
    VersionLevel.beta,
    revision: 1,
});
console.log(version.toString());  // => "1.3.0-beta.1"
```

## Development

### 1. Install Packages

```bash
pnpm i
```

### 2. Build

Compile to JavaScript.

```bash
pnpm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE)

Copyright © 2025 よね/Yone
