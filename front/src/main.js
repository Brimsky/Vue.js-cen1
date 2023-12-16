import './assets/main.css'
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import navigationGuard from './router/routerGuard';

const app = createApp(App);
navigationGuard(router);
app.use(VueAxios, axios);
app.use(router);
app.use(store);

app.mount('#app');

