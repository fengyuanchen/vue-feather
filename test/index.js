import Vue from 'vue';
import { icons } from 'feather-icons';
import VueFeather from '../src/index.vue';

Vue.component(VueFeather.name, VueFeather);

describe('<feather>', () => {
  describe('props', () => {
    describe('animation', () => {
      it('default', () => {
        const vm = new Vue({
          template: '<feather type="feather"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--spin')).to.be.false;
        expect(vm.$el.classList.contains('vue-feather--pulse')).to.be.false;
      });

      it('spin', () => {
        const vm = new Vue({
          template: '<feather type="feather" animation="spin"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--spin')).to.be.true;
      });

      it('pulse', () => {
        const vm = new Vue({
          template: '<feather type="feather" animation="pulse"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--pulse')).to.be.true;
      });
    });

    describe('animation-speed', () => {
      it('default', () => {
        const vm = new Vue({
          template: '<feather type="feather"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--slow')).to.be.false;
        expect(vm.$el.classList.contains('vue-feather--fast')).to.be.false;
      });

      it('slow', () => {
        const vm = new Vue({
          template: '<feather type="feather" animation-speed="slow"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--slow')).to.be.true;
      });

      it('fast', () => {
        const vm = new Vue({
          template: '<feather type="feather" animation-speed="fast"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--fast')).to.be.true;
      });
    });

    it('fill', () => {
      const vm = new Vue({
        template: '<feather type="feather" fill="red"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('fill')).to.equal('red');
    });

    it('size', () => {
      const vm = new Vue({
        template: '<feather type="feather" size="2rem"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('width')).to.equal('2rem');
      expect(vm.$el.querySelector('svg').getAttribute('height')).to.equal('2rem');
    });

    it('stroke', () => {
      const vm = new Vue({
        template: '<feather type="feather" stroke="red"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke')).to.equal('red');
    });

    it('stroke-linecap', () => {
      const vm = new Vue({
        template: '<feather type="feather" stroke-linecap="butt"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-linecap')).to.equal('butt');
    });

    it('stroke-linejoin', () => {
      const vm = new Vue({
        template: '<feather type="feather" stroke-linejoin="miter"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-linejoin')).to.equal('miter');
    });

    it('stroke-width', () => {
      const vm = new Vue({
        template: '<feather type="feather" stroke-width="3"></feather>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-width')).to.equal('3');
    });

    describe('tag', () => {
      it('default', () => {
        const vm = new Vue({
          template: '<feather type="feather"></feather>',
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('i');
      });

      it('span', () => {
        const vm = new Vue({
          template: '<feather type="feather" tag="span"></feather>',
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('span');
      });
    });

    describe('type', () => {
      it('required', () => {
        try {
          new Vue({
            template: '<feather></feather>',
          }).$mount();
        } catch (err) {
          expect(err).to.be.an.instanceOf(Error);
        }
      });

      it('invalid', () => {
        try {
          new Vue({
            template: '<feather type="foo"></feather>',
          }).$mount();
        } catch (err) {
          expect(err).to.be.an.instanceOf(Error);
        }
      });

      it('feather', () => {
        const vm = new Vue({
          template: '<feather type="feather"></feather>',
        }).$mount();

        expect(vm.$el.classList.contains('vue-feather--feather')).to.be.true;
        expect(vm.$el.querySelector('svg').innerHTML).to.equal(icons.feather.contents);
      });
    });
  });
});
