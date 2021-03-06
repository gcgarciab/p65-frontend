import axios from 'axios'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
  .use(VueAxios, axios)
  .mount('#app')
