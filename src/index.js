import Feather from './feather.vue';

Feather.install = (Vue) => {
  Vue.component(Feather.name, Feather);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Feather);
}

export default Feather;
