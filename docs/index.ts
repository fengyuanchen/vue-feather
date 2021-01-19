import { createApp } from 'vue';
import App from './app.vue';
import DemoBlock from './components/demo-block.vue';
import VueFeather from '../src';

const app = createApp(App);

app.component(DemoBlock.name, DemoBlock);
app.component(VueFeather.name, VueFeather);
app.mount('#app');
