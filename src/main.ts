import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/style/tailwind.scss'
import '@/assets/style/reset.scss'
import '@/assets/style/main.scss'
import 'virtual:svg-icons-register'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVueIcon)

app.mount('#app')
