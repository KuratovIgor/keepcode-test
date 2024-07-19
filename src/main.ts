import '@/assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'

import 'vue-select/dist/vue-select.css';
import 'vue-final-modal/style.css'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(vfm)

app.component("v-select", vSelect).mount('#app')
