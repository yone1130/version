# Version

## Overview

**Version** is a TypeScript / JavaScript library that version management system.

## Usage

### 1. Install or Import

Install as a package (TypeScript):
```bash
npm i yone1130/version
```

or direct importing from CDN (JavaScript):
```js
import { Version, VersionLevels } from "https://cdn.yoneyo.com/scripts/version@1.2.0/dist/version.js";
```

### 2. Use

Example code:
```js
const version = new Version(1, 2, 0, VersionLevels.beta);
console.log(version.string);  // => "1.2.0 (beta)"
```

## Development

### 1. Install Packages

```bash
npm i
```

### 2. Build

Compile to JavaScript.

```bash
npm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE)

Copyright © 2025 よね/Yone
