<script>
import feather from 'feather-icons';

export default {
  name: 'Feather',
  functional: true,
  props: {
    animation: {
      type: String,
      default: undefined,
    },

    animationSpeed: {
      type: String,
      default: undefined,
    },

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

  render(createElement, { data, props }) {
    const {
      animation,
      animationSpeed,
      size,
      type,
    } = props;

    const icon = feather.icons[type];

    return createElement(
      props.tag,

      {
        ...data,

        attrs: {
          ...data.attrs,
          'data-name': type,
          'data-tags': icon ? icon.tags : '',
          'data-type': type,
        },

        class: {
          ...data.class,
          feather: true,
          [`feather--${type}`]: type,
          [`feather--${animation}`]: animation,
          [`feather--${animationSpeed}`]: animationSpeed,
        },
      },

      [
        icon ? createElement(
          'svg',

          {
            attrs: {
              ...icon.attrs,
              fill: props.fill,
              height: size,
              stroke: props.stroke,
              'stroke-linecap': props.strokeLinecap,
              'stroke-linejoin': props.strokeLinejoin,
              'stroke-width': props.strokeWidth,
              width: size,
            },

            class: [icon.attrs.class, 'feather__content'],

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

<style lang="scss" scoped>
  @keyframes feather--spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .feather {
    display: inline-block;
    overflow: hidden;

    &--spin {
      animation: feather--spin 2s linear infinite;
    }

    &--pulse {
      animation: feather--spin 2s infinite steps(8);
    }

    &--slow {
      animation-duration: 3s;
    }

    &--fast {
      animation-duration: 1s;
    }

    &__content {
      display: block;
      height: inherit;
      width: inherit;
    }
  }
</style>
