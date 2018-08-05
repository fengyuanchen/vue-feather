/*!
 * vue-feather v0.2.1
 * https://fengyuanchen.github.io/vue-feather
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-08-05T07:18:34.915Z
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var feather = _interopDefault(require('feather-icons'));

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var script = {
  name: 'feather',

  props: {
    animation: String,
    animationSpeed: String,

    fill: {
      type: String,
      default: 'none'
    },

    size: {
      type: [Number, String],
      default: 24
    },

    stroke: {
      type: String,
      default: 'currentColor'
    },

    strokeLinecap: {
      type: String,
      default: 'round'
    },

    strokeLinejoin: {
      type: String,
      default: 'round'
    },

    strokeWidth: {
      type: [Number, String],
      default: 2
    },

    tag: {
      type: String,
      default: 'i'
    },

    type: {
      type: String,
      required: true,
      validator: function validator(type) {
        if (!feather.icons[type]) {
          throw new Error('"' + type + '" is not an available icon type.');
        }

        return true;
      }
    }
  },

  render: function render(createElement) {
    var _class;

    var animation = this.animation,
        animationSpeed = this.animationSpeed,
        size = this.size,
        type = this.type;

    var icon = feather.icons[type];

    return createElement(this.tag, {
      attrs: {
        'data-name': type,
        'data-tags': icon ? icon.tags : '',
        'data-type': type
      },

      class: (_class = {
        feather: true
      }, defineProperty(_class, 'feather--' + type, type), defineProperty(_class, 'feather--' + animation, animation), defineProperty(_class, 'feather--' + animationSpeed, animationSpeed), _class),

      on: this.$listeners
    }, [icon ? createElement('svg', {
      attrs: _extends({}, icon.attrs, {
        fill: this.fill,
        height: size,
        stroke: this.stroke,
        'stroke-linecap': this.strokeLinecap,
        'stroke-linejoin': this.strokeLinejoin,
        'stroke-width': this.strokeWidth,
        width: size
      }),

      class: [icon.attrs.class, 'feather__content'],

      domProps: {
        innerHTML: icon.contents
      }
    }) : '']);
  }
};

/* script */
var __vue_script__ = script;

/* template */

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-a22d07d8_0", { source: "\n@keyframes feather--spin-data-v-a22d07d8{\nfrom{transform:rotate(0)\n}\nto{transform:rotate(360deg)\n}\n}\n.feather[data-v-a22d07d8]{display:inline-block;overflow:hidden\n}\n.feather--spin[data-v-a22d07d8]{animation:feather--spin-data-v-a22d07d8 2s linear infinite\n}\n.feather--pulse[data-v-a22d07d8]{animation:feather--spin-data-v-a22d07d8 2s infinite steps(8)\n}\n.feather--slow[data-v-a22d07d8]{animation-duration:3s\n}\n.feather--fast[data-v-a22d07d8]{animation-duration:1s\n}\n.feather__content[data-v-a22d07d8]{display:block;height:inherit;width:inherit\n}", map: undefined, media: undefined });
};
/* scoped */
var __vue_scope_id__ = "data-v-a22d07d8";
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = undefined;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "index.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var index = __vue_normalize__({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

module.exports = index;
