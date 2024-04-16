import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/main.css';
import routes from '../src/routes/routes.js';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.use(createPinia());
app.mount('#app');
