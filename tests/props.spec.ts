import * as feather from 'feather-icons';
import { mount } from '@vue/test-utils';
import VueFeather from '../src';

describe('props', () => {
  describe('animation', () => {
    it('default', () => {
      const wrapper = mount(VueFeather, {
        props: {
          type: 'feather',
        },
      });

      expect(wrapper.props('animation')).toBeUndefined();
      expect(wrapper.classes()).not.toContain('vue-feather--spin');
      expect(wrapper.classes()).not.toContain('vue-feather--pulse');
    });

    it('spin', () => {
      const wrapper = mount(VueFeather, {
        props: {
          animation: 'spin',
          type: 'feather',
        },
      });

      expect(wrapper.props('animation')).toBe('spin');
      expect(wrapper.classes()).toContain('vue-feather--spin');
    });

    it('pulse', () => {
      const wrapper = mount(VueFeather, {
        props: {
          animation: 'pulse',
          type: 'feather',
        },
      });

      expect(wrapper.props('animation')).toBe('pulse');
      expect(wrapper.classes()).toContain('vue-feather--pulse');
    });
  });

  describe('animation-speed', () => {
    it('default', () => {
      const wrapper = mount(VueFeather, {
        props: {
          type: 'feather',
        },
      });

      expect(wrapper.props('animationSpeed')).toBeUndefined();
      expect(wrapper.classes()).not.toContain('vue-feather--slow');
      expect(wrapper.classes()).not.toContain('vue-feather--fast');
    });

    it('slow', () => {
      const wrapper = mount(VueFeather, {
        props: {
          animationSpeed: 'slow',
          type: 'feather',
        },
      });

      expect(wrapper.props('animationSpeed')).toBe('slow');
      expect(wrapper.classes()).toContain('vue-feather--slow');
    });

    it('fast', () => {
      const wrapper = mount(VueFeather, {
        props: {
          animationSpeed: 'fast',
          type: 'feather',
        },
      });

      expect(wrapper.props('animationSpeed')).toBe('fast');
      expect(wrapper.classes()).toContain('vue-feather--fast');
    });
  });

  it('fill', () => {
    const wrapper = mount(VueFeather, {
      props: {
        fill: 'red',
        type: 'feather',
      },
    });

    expect(wrapper.props('fill')).toBe('red');
    expect(wrapper.find('svg').attributes('fill')).toBe('red');
  });

  it('size', () => {
    const wrapper = mount(VueFeather, {
      props: {
        size: '2rem',
        type: 'feather',
      },
    });

    expect(wrapper.props('size')).toBe('2rem');
    expect(wrapper.find('svg').attributes('width')).toBe('2rem');
    expect(wrapper.find('svg').attributes('height')).toBe('2rem');
  });

  it('stroke', () => {
    const wrapper = mount(VueFeather, {
      props: {
        stroke: 'red',
        type: 'feather',
      },
    });

    expect(wrapper.props('stroke')).toBe('red');
    expect(wrapper.find('svg').attributes('stroke')).toBe('red');
  });

  it('strokeLinecap', () => {
    const wrapper = mount(VueFeather, {
      props: {
        strokeLinecap: 'butt',
        type: 'feather',
      },
    });

    expect(wrapper.props('strokeLinecap')).toBe('butt');
    expect(wrapper.find('svg').attributes('stroke-linecap')).toBe('butt');
  });

  it('strokeLinejoin', () => {
    const wrapper = mount(VueFeather, {
      props: {
        strokeLinejoin: 'miter',
        type: 'feather',
      },
    });

    expect(wrapper.props('strokeLinejoin')).toBe('miter');
    expect(wrapper.find('svg').attributes('stroke-linejoin')).toBe('miter');
  });

  it('strokeWidth', () => {
    const wrapper = mount(VueFeather, {
      props: {
        strokeWidth: 3,
        type: 'feather',
      },
    });

    expect(wrapper.props('strokeWidth')).toBe(3);
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });

  describe('tag', () => {
    it('default', () => {
      const wrapper = mount(VueFeather, {
        props: {
          type: 'feather',
        },
      });

      expect(wrapper.props('tag')).toBe('i');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('i');
    });

    it('span', () => {
      const wrapper = mount(VueFeather, {
        props: {
          tag: 'span',
          type: 'feather',
        },
      });

      expect(wrapper.props('tag')).toBe('span');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('span');
    });
  });

  describe('type', () => {
    it('invalid', () => {
      expect(() => {
        mount(VueFeather, {
          props: {
            type: 'foo',
          },
        });
      }).toThrowError();
    });

    it('feather', () => {
      const wrapper = mount(VueFeather, {
        props: {
          type: 'feather',
        },
      });

      expect(wrapper.props('type')).toBe('feather');
      expect(wrapper.classes()).toContain('vue-feather--feather');
      expect(wrapper.vm.$el.querySelector('svg').innerHTML).toContain(feather.icons.feather.contents);
    });
  });
});
