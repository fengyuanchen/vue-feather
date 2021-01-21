import { mount } from '@vue/test-utils';
import VueFeather from '../src';

describe('others', () => {
  it('should inherit the static attributes', () => {
    const wrapper = mount({
      components: {
        VueFeather,
      },
      data() {
        return {
          value: 0,
        };
      },
      template: '<vue-feather type="feather" class="feather-icon-feather" style="color: blue;" />',
    });

    expect(wrapper.find('i').classes()).toContain('feather-icon-feather');
    expect(wrapper.find('i').attributes('style')).toBe('color: blue;');
  });

  it('should trigger the bound event handler', (done) => {
    const wrapper = mount({
      components: {
        VueFeather,
      },
      methods: {
        handleClick(event: Event) {
          expect(event.type).toBe('click');
          done();
        },
      },
      template: '<vue-feather type="feather" @click="handleClick" />',
    });

    wrapper.trigger('click');
  });
});
