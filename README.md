# Version

## Overview

A version management system.

## Usage

### 1. Install or Import

Install as a package (TypeScript):
```bash
npm install yone1130/version
```

or direct importing from CDN (JavaScript):
```js
import { Version } from "https://cdn.yoneyo.com/scripts/version/version-v1.0.0.mjs";
```

### 2. Use

A sample code:
```js
const version = new Version(1, 0, 0, Version.levels.dev);
console.log(version.string);  // => "1.0.0 (dev)"
```

## Build

### 1. Install Packages

```bash
npm install
```

### 2. Build

Compile to JavaScript.

```bash
npm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE)

Copyright (C) 2025 よね/Yone
