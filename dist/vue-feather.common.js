/*!
 * vue-feather v1.0.0
 * https://fengyuanchen.github.io/vue-feather
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-01-26T05:54:31.324Z
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var feather = _interopDefault(require('feather-icons'));

function _defineProperty(obj, key, value) {
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
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var script = {
  name: 'Feather',
  props: {
    animation: {
      type: String,
      default: undefined
    },
    animationSpeed: {
      type: String,
      default: undefined
    },
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
          throw new Error("\"".concat(type, "\" is not an available icon type."));
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
      }, _defineProperty(_class, "feather--".concat(type), type), _defineProperty(_class, "feather--".concat(animation), animation), _defineProperty(_class, "feather--".concat(animationSpeed), animationSpeed), _class),
      on: this.$listeners
    }, [icon ? createElement('svg', {
      attrs: _objectSpread({}, icon.attrs, {
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script; // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258

script.__file = "feather.vue";
/* template */

/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-07452373_0", {
    source: "@keyframes feather--spin-data-v-07452373{from{transform:rotate(0)}to{transform:rotate(360deg)}}.feather[data-v-07452373]{display:inline-block;overflow:hidden}.feather--spin[data-v-07452373]{animation:feather--spin-data-v-07452373 2s linear infinite}.feather--pulse[data-v-07452373]{animation:feather--spin-data-v-07452373 2s infinite steps(8)}.feather--slow[data-v-07452373]{animation-duration:3s}.feather--fast[data-v-07452373]{animation-duration:1s}.feather__content[data-v-07452373]{display:block;height:inherit;width:inherit}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-07452373";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = undefined;
/* style inject SSR */

var Feather = normalizeComponent_1({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

Feather.install = function (Vue) {
  Vue.component(Feather.name, Feather);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Feather);
}

module.exports = Feather;
