import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router';
import store from './store'; // Import the store

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');