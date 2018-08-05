# vue-feather

[![Build Status](https://travis-ci.org/fengyuanchen/vue-feather.svg)](https://travis-ci.org/fengyuanchen/vue-feather) [![Downloads](https://img.shields.io/npm/dm/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Version](https://img.shields.io/npm/v/vue-feather.svg)](https://www.npmjs.com/package/vue-feather)

> A Vue component wrapper for [Feather](https://feathericons.com/).

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-feather)

## Main

```text
dist/
├── vue-feather.js        (UMD)
├── vue-feather.min.js    (UMD, compressed)
├── vue-feather.common.js (CommonJS, default)
└── vue-feather.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install vue-feather vue feather-icons
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/feather.js"></script><!-- Feather is required -->
<script src="/path/to/vue-feather.js"></script>
```

### Usage

```js
import Vue from 'vue';
import VueFeather from 'vue-feather';

Vue.component(VueFeather.name, VueFeather);
```

```html
<feather type="feather"></feather>
```

In browser:

```html
<script>Vue.component(VueFeather.name, VueFeather);</script>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com)
