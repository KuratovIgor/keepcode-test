import '@/assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-select", vSelect).mount('#app')
