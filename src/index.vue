<script>
  import feather from 'feather-icons';

  export default {
    name: 'feather',

    props: {
      animation: String,
      animationSpeed: String,

      fill: {
        type: String,
        default: 'none',
      },

      size: {
        type: [Number, String],
        default: 24,
      },

      stroke: {
        type: String,
        default: 'currentColor',
      },

      strokeLinecap: {
        type: String,
        default: 'round',
      },

      strokeLinejoin: {
        type: String,
        default: 'round',
      },

      strokeWidth: {
        type: [Number, String],
        default: 2,
      },

      tag: {
        type: String,
        default: 'i',
      },

      type: {
        type: String,
        required: true,
        validator(type) {
          if (!feather.icons[type]) {
            throw new Error(`"${type}" is not an available icon type.`);
          }

          return true;
        },
      },
    },

    render(createElement) {
      const {
        animation,
        animationSpeed,
        size,
        type,
      } = this;
      const icon = feather.icons[type];

      return createElement(
        this.tag,

        {
          attrs: {
            'data-name': type,
            'data-tags': icon ? icon.tags : '',
            'data-type': type,
          },

          class: {
            'vue-feather': true,
            [`vue-feather--${type}`]: type,
            [`vue-feather--${animation}`]: animation,
            [`vue-feather--${animationSpeed}`]: animationSpeed,
          },

          on: this.$listeners,
        },

        [
          icon ? createElement(
            'svg',

            {
              attrs: {
                ...icon.attrs,
                fill: this.fill,
                height: size,
                stroke: this.stroke,
                'stroke-linecap': this.strokeLinecap,
                'stroke-linejoin': this.strokeLinejoin,
                'stroke-width': this.strokeWidth,
                width: size,
              },

              class: [icon.attrs.class, 'vue-feather__content'],

              domProps: {
                innerHTML: icon.contents,
              },
            },
          ) : '',
        ],
      );
    },
  };
</script>

<style scoped>
  @keyframes vue-feather--spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @block vue-feather {
    display: inline-block;
    overflow: hidden;

    @modifier spin {
      animation: vue-feather--spin 2s linear infinite;
    }

    @modifier pulse {
      animation: vue-feather--spin 2s infinite steps(8);
    }

    @modifier slow {
      animation-duration: 3s;
    }

    @modifier fast {
      animation-duration: 1s;
    }

    @element content {
      display: block;
      height: inherit;
      width: inherit;
    }
  }
</style>
