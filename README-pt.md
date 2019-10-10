# vue-feather

[![Build Status](https://img.shields.io/travis/fengyuanchen/vue-feather.svg)](https://travis-ci.org/fengyuanchen/vue-feather) [![Downloads](https://img.shields.io/npm/dm/vue-feather.svg)](https://www.npmjs.com/package/vue-feather) [![Version](https://img.shields.io/npm/v/vue-feather.svg)](https://www.npmjs.com/package/vue-feather)

> [Feather Icon](https://feathericons.com/) em componentes para [Vue.js](https://vuejs.org).

- [Documentação](src/README.md)
- [Demonstração](https://fengyuanchen.github.io/vue-feather)

## Estrutura de arquivos

```text
dist/
├── vue-feather.js        (UMD)
├── vue-feather.min.js    (UMD, compressed)
├── vue-feather.common.js (CommonJS, default)
└── vue-feather.esm.js    (ES Module)
```

## Começando

### Instalação

```shell
npm install vue feather-icons vue-feather
```

No navegador:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js é Obrigatório -->
<script src="/path/to/feather.js"></script><!-- Feather icon é obrigatório -->
<script src="/path/to/vue-feather.js"></script><!-- Registra o a bliblioteca quando carrega a página -->
```

### Como usar:

```js
import Vue from 'vue';
import VueFeather from 'vue-feather';

Vue.use(VueFeather);
        // ou
Vue.component(VueFeather.name, VueFeather);
                // ou
Vue.component('vue-feather', VueFeather);
```

Usando no HTML

```html
<feather type="feather"></feather>
```

## Navegadores suportados

- Chrome (Ultima versão)
- Firefox (Ultima versão)
- Safari (Ultima versão)
- Opera (Ultima versão)
- Edge (Ultima versão)
- Internet Explorer 9+

## Licença

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com)
