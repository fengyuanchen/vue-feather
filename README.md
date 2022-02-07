# vue-feather

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-feather.svg)](https://codecov.io/gh/fengyuanchen/vue-feather) [![Downloads](https://img.shields.io/npm/dm/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Version](https://img.shields.io/npm/v/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/vue-feather.svg)](https://unpkg.com/vue-feather/dist/vue-feather.js)

> [Feather](https://feathericons.com/) icons component for Vue 3. For Vue 2, check out the [`v1`](https://github.com/fengyuanchen/vue-feather/tree/v1) branch.

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-feather)

## Main files

```text
dist/
├── vue-feather.js         (UMD, default)
├── vue-feather.min.js     (UMD, compressed)
├── vue-feather.esm.js     (ECMAScript Module)
├── vue-feather.esm.min.js (ECMAScript Module, compressed)
└── vue-feather.d.ts       (TypeScript Declaration File)
```

## Getting started

### Installation

Using npm:

```shell
npm install vue@3 feather-icons@4 vue-feather@2
```

Using pnpm:

```shell
pnpm add vue@3 feather-icons@4 vue-feather@2
```

Using Yarn:

```shell
yarn add vue@3 feather-icons@4 vue-feather@2
```

Using CDN:

```html
<script src="https://unpkg.com/vue@3"></script><!-- Vue.js is required -->
<script src="https://unpkg.com/feather-icons@4"></script><!-- Feather is required -->
<script src="https://unpkg.com/vue-feather@2"></script>
```

### Usage

```js
import { createApp } from 'vue';
import VueFeather from 'vue-feather';

const app = createApp({});

app.component(VueFeather.name, VueFeather);
```

```html
<vue-feather type="feather"></vue-feather>
```

## Browser support

Same as Vue 3.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
