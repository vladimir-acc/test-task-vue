import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteWind from 'vite-plugin-windicss';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],

})
