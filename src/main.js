import { createApp } from 'vue';
import App from './App.vue'
import waterUi from './components/water-ui/index'
const app = createApp(App)
app.use(waterUi)
app.mount('#app')