# Version.js

[Read in English >](./README.md)

## 概要

**Version.js** は TypeScript / JavaScript 用のバージョン管理ライブラリです。

## 利用方法

### 1. インストールまたはインポート

パッケージとしてインストール (TypeScript):
```bash
npm i yone1130/version-js
```

またはCDNから直接インポート (JavaScript):
```js
import { Version, VersionLevel } from "https://cdn.yoneyo.com/scripts/version-js@1.4.0/dist/version.js";
```

### 2. 使う

サンプルコード:
```js
const version = new Version({
    major: 1,
    minor: 4,
    patch: 0,
    level: VersionLevel.beta,
    revision: 1,
});

console.log(version.toString());  // => "1.4.0-beta.1"
```

## 開発

### 1. パッケージをインストールする

```bash
pnpm i
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
pnpm run build
```

コンパイルされたJavaScriptファイルが dist/ ディレクトリに出力されます。

## ライセンス

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright © 2025 よね/Yone
