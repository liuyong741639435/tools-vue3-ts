import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/index.less";// 项目样式

createApp(App)
    .use(router)
    .mount('#app')
