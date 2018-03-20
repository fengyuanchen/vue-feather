/*!
 * vue-feather v0.1.0
 * https://github.com/fengyuanchen/vue-feather
 *
 * Copyright (c) 2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-03-20T15:12:41.559Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('feather-icons')) :
  typeof define === 'function' && define.amd ? define(['feather-icons'], factory) :
  (global.VueFeather = factory(global.feather));
}(this, (function (feather) { 'use strict';

  feather = feather && feather.hasOwnProperty('default') ? feather['default'] : feather;

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

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "@-webkit-keyframes vue-feather--spin { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes vue-feather--spin { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } .vue-feather[data-v-1a4d8e3c] { display: inline-block; overflow: hidden; } .vue-feather--spin[data-v-1a4d8e3c] { -webkit-animation: vue-feather--spin 2s linear infinite; animation: vue-feather--spin 2s linear infinite; } .vue-feather--pulse[data-v-1a4d8e3c] { -webkit-animation: vue-feather--spin 2s infinite steps(8); animation: vue-feather--spin 2s infinite steps(8); } .vue-feather--slow[data-v-1a4d8e3c] { -webkit-animation-duration: 3s; animation-duration: 3s; } .vue-feather--fast[data-v-1a4d8e3c] { -webkit-animation-duration: 1s; animation-duration: 1s; } .vue-feather__content[data-v-1a4d8e3c] { display: block; height: inherit; width: inherit; } ";style.type = 'text/css';if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }head.appendChild(style);
    }
  })();

  var index = { _scopeId: 'data-v-1a4d8e3c',
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
          'vue-feather': true
        }, defineProperty(_class, 'vue-feather--' + type, type), defineProperty(_class, 'vue-feather--' + animation, animation), defineProperty(_class, 'vue-feather--' + animationSpeed, animationSpeed), _class),

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

        class: [icon.attrs.class, 'vue-feather__content'],

        domProps: {
          innerHTML: icon.contents
        }
      }) : '']);
    }
  };

  return index;

})));
