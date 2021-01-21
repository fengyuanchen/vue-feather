<script lang="ts">
import { h, FunctionalComponent } from 'vue';
import feather from 'feather-icons';

interface VueFeatherProps {
  animation?: string;
  animationSpeed?: string;
  fill?: string;
  size?: number | string;
  stroke?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeWidth?: number | string;
  tag?: string;
  type: string;
}

const VueFeather: FunctionalComponent<VueFeatherProps> = (props, context) => {
  const {
    animation,
    animationSpeed,
    size,
    type,
  } = props;

  const icon = feather.icons[type];

  return h(
    props.tag as string,

    {
      ...context.attrs,
      'data-name': type,
      'data-tags': icon ? icon.tags : '',
      'data-type': type,
      class: {
        'vue-feather': true,
        [`vue-feather--${type}`]: type,
        [`vue-feather--${animation}`]: animation,
        [`vue-feather--${animationSpeed}`]: animationSpeed,
      },
    },

    [
      icon ? h(
        'svg',

        {
          ...icon.attrs,
          fill: props.fill,
          height: size,
          stroke: props.stroke,
          'stroke-linecap': props.strokeLinecap,
          'stroke-linejoin': props.strokeLinejoin,
          'stroke-width': props.strokeWidth,
          width: size,
          class: [icon.attrs.class, 'vue-feather__content'],
        },

        [
          h({
            template: icon.contents,
          }),
        ],
      ) : '',
    ],
  );
};

VueFeather.props = {
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
    validator(type: string) {
      if (!feather) {
        throw new Error('The Feather icons is required.');
      }

      if (!feather.icons[type]) {
        throw new Error(`"${type}" is not an available icon type.`);
      }

      return true;
    },
  },
};

export default VueFeather;
</script>

<style lang="scss">
  @keyframes vue-feather--spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .vue-feather {
    display: inline-block;
    overflow: hidden;

    &--spin {
      animation: vue-feather--spin 2s linear infinite;
    }

    &--pulse {
      animation: vue-feather--spin 2s infinite steps(8);
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
