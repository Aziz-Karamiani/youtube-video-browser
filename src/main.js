import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use({axios, VueAxios}).mount('#app');
