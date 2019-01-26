import Vue from 'vue';
import App from './app.vue';
import Demo from './components/demo.vue';
import VueFeather from '..';

Vue.component('demo', Demo);
Vue.component(VueFeather.name, VueFeather);

export default new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
