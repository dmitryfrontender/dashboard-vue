import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { useMenuActiveClass } from "./stores/menuActiveClass";

const app = createApp(App)

app.use(createPinia())
// app.use(useMenuActiveClass)
app.use(router)

app.mount('#app')
