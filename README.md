# Version

## Overview

A version management system.

## Usage

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
