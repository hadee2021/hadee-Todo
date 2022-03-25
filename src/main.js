import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"

createApp(App).use(vClickOutside).use(store).use(router).mount('#app')
