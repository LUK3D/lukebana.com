import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import 'virtual:windi.css'

const app = createApp(App);
app.use(MotionPlugin);
app.mount('#app')
