/*!
 * vue-feather v0.2.0
 * https://github.com/fengyuanchen/vue-feather
 *
 * Copyright (c) 2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-03-25T07:56:13.658Z
 */

import feather from 'feather-icons';

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
        css = "@-webkit-keyframes feather--spin { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes feather--spin { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } .feather[data-v-1a4d8e3c] { display: inline-block; overflow: hidden; } .feather--spin[data-v-1a4d8e3c] { -webkit-animation: feather--spin 2s linear infinite; animation: feather--spin 2s linear infinite; } .feather--pulse[data-v-1a4d8e3c] { -webkit-animation: feather--spin 2s infinite steps(8); animation: feather--spin 2s infinite steps(8); } .feather--slow[data-v-1a4d8e3c] { -webkit-animation-duration: 3s; animation-duration: 3s; } .feather--fast[data-v-1a4d8e3c] { -webkit-animation-duration: 1s; animation-duration: 1s; } .feather__content[data-v-1a4d8e3c] { display: block; height: inherit; width: inherit; } ";style.type = 'text/css';if (style.styleSheet) {
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

export default index;
