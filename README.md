# vue-feather

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-feather.svg)](https://codecov.io/gh/fengyuanchen/vue-feather) [![Downloads](https://img.shields.io/npm/dm/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Version](https://img.shields.io/npm/v/vue-feather/next.svg)](https://www.npmjs.com/package/vue-feather) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/vue-feather.svg)](https://unpkg.com/vue-feather/dist/vue-feather.js)

> [Feather](https://feathericons.com/) icons component for Vue 3.

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-feather)

## Main files

```text
dist/
├── vue-feather.js         (UMD, default)
├── vue-feather.min.js     (UMD, compressed)
├── vue-feather.esm.js     (ECMAScript Module)
└── vue-feather.esm.min.js (ECMAScript Module, compressed)
```

## Getting started

### Installation

```shell
npm install vue@next feather-icons vue-feather@next
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/feather.js"></script><!-- Feather is required -->
<script src="/path/to/vue-feather.js"></script>
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
