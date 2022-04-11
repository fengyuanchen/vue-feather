<script lang="ts">
import { defineComponent, h } from 'vue';
import * as feather from 'feather-icons';

export default defineComponent({
  name: 'VueFeather',

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
      default: 'i', // if someone define foo in frontend while calling <vue-feather tag="foo" type="feather"><vue-feather> then it'll create only svg tag. 
    },

    type: {
      type: String,
      default: 'feather',
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
  },

  computed: {
    isRemSize(): boolean {
      return typeof this.size === 'string' && this.size.endsWith('rem');
    },
  },

  render() {
    const {
      animation,
      animationSpeed,
      isRemSize,
      size,
      type,
    } = this;

    const icon = feather.icons[type];

    //foo for  if (somebody define food in tag then it will be check in here then it will only create svg tag not parent tag (i) )
     if(this.tag == "foo"){
        return h("svg", {
            ...icon.attrs,
            fill: this.fill,
            height: isRemSize ? undefined : size,
            stroke: this.stroke,
            'stroke-linecap': this.strokeLinecap,
            'stroke-linejoin': this.strokeLinejoin,
            'stroke-width': this.strokeWidth,
            width: isRemSize ? undefined : size,
            class: [icon.attrs.class, 'vue-feather__content'],
            innerHTML: icon.contents,
            id: this.$attrs['id'], // if foo then get id attr into svg tag (just for some who don't want any tag to be parent of svg tag).
        });
      }else{// else it will be creating as before like : i tag as default or any tag someone define  as parent and then child tag will svg.
        return h(
          this.tag as string,
          {
            ...this.$attrs,
            'data-name': type,
            // 'data-tags': isTag != undefined ? icon.tags : this.id,
            'data-tags': icon.tags,
            'data-type': type,
            class: {
                'vue-feather': true,
                [`vue-feather--${type}`]: type,
                [`vue-feather--${animation}`]: animation,
                [`vue-feather--${animationSpeed}`]: animationSpeed,
            },
            style: isRemSize ? {
                height: size,
                width: size,
            } : undefined,
          },
          [
            h('svg', 
              // XXX: The `width` and `height` attributes do not support the `rem` unit in Safari (#13).
              {
                  ...icon.attrs,
                  fill: this.fill,
                  height: isRemSize ? undefined : size,
                  stroke: this.stroke,
                  'stroke-linecap': this.strokeLinecap,
                  'stroke-linejoin': this.strokeLinejoin,
                  'stroke-width': this.strokeWidth,
                  width: isRemSize ? undefined : size,
                  class: [icon.attrs.class, 'vue-feather__content'],
                  innerHTML: icon.contents,
              }
            ),
          ]
        );
      }
  },
});
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
