# vue-feather

[![Build Status](https://img.shields.io/travis/fengyuanchen/vue-feather.svg)](https://travis-ci.org/fengyuanchen/vue-feather) [![Downloads](https://img.shields.io/npm/dm/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Version](https://img.shields.io/npm/v/vue-feather.svg)](https://www.npmjs.com/package/vue-feather)

> [Feather](https://feathericons.com/) component for [Vue.js](https://vuejs.org/).

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-feather)
- [Leia esta página em português](https://github.com/fengyuanchen/vue-feather/blob/master/README-pt.md)

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
npm install vue feather-icons vue-feather
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/feather.js"></script><!-- Feather is required -->
<script src="/path/to/vue-feather.js"></script><!-- Register automatically once loaded -->
```

### Usage

```js
import Vue from 'vue';
import VueFeather from 'vue-feather';

Vue.use(VueFeather);
// Or
Vue.component(VueFeather.name, VueFeather);
// Or
Vue.component('vue-feather', VueFeather);
```

```html
<feather type="feather"></feather>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
