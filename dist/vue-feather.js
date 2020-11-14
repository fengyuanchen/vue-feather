/*!
 * vue-feather v1.1.1
 * https://fengyuanchen.github.io/vue-feather
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-11-14T03:59:33.666Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('feather-icons')) :
  typeof define === 'function' && define.amd ? define(['feather-icons'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueFeather = factory(global.feather));
}(this, (function (feather) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var feather__default = /*#__PURE__*/_interopDefaultLegacy(feather);

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var script = {
    name: 'Feather',
    functional: true,
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
          if (!feather__default['default'].icons[type]) {
            throw new Error("\"".concat(type, "\" is not an available icon type."));
          }

          return true;
        }
      }
    },
    render: function render(createElement, _ref) {
      var _objectSpread2$1;

      var data = _ref.data,
          props = _ref.props;
      var animation = props.animation,
          animationSpeed = props.animationSpeed,
          size = props.size,
          type = props.type;
      var icon = feather__default['default'].icons[type];
      return createElement(props.tag, _objectSpread2(_objectSpread2({}, data), {}, {
        attrs: _objectSpread2(_objectSpread2({}, data.attrs), {}, {
          'data-name': type,
          'data-tags': icon ? icon.tags : '',
          'data-type': type
        }),
        class: _objectSpread2(_objectSpread2({}, data.class), {}, (_objectSpread2$1 = {
          feather: true
        }, _defineProperty(_objectSpread2$1, "feather--".concat(type), type), _defineProperty(_objectSpread2$1, "feather--".concat(animation), animation), _defineProperty(_objectSpread2$1, "feather--".concat(animationSpeed), animationSpeed), _objectSpread2$1))
      }), [icon ? createElement('svg', {
        attrs: _objectSpread2(_objectSpread2({}, icon.attrs), {}, {
          fill: props.fill,
          height: size,
          stroke: props.stroke,
          'stroke-linecap': props.strokeLinecap,
          'stroke-linejoin': props.strokeLinejoin,
          'stroke-width': props.strokeWidth,
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
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
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

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD;
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

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

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

  /* script */
  var __vue_script__ = script;
  /* template */

  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-4d521fc4_0", {
      source: "@keyframes feather--spin-data-v-4d521fc4{from{transform:rotate(0)}to{transform:rotate(360deg)}}.feather[data-v-4d521fc4]{display:inline-block;overflow:hidden}.feather--spin[data-v-4d521fc4]{animation:feather--spin-data-v-4d521fc4 2s linear infinite}.feather--pulse[data-v-4d521fc4]{animation:feather--spin-data-v-4d521fc4 2s infinite steps(8)}.feather--slow[data-v-4d521fc4]{animation-duration:3s}.feather--fast[data-v-4d521fc4]{animation-duration:1s}.feather__content[data-v-4d521fc4]{display:block;height:inherit;width:inherit}",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = "data-v-4d521fc4";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = undefined;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

  __vue_component__.install = function (Vue) {
    Vue.component(__vue_component__.name, __vue_component__);
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(__vue_component__);
  }

  return __vue_component__;

})));
