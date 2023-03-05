import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './styles/global.css' // 全局初始化样式
import "./styles/index.less";// 项目样式
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

createApp(App)
    .use(router)
    .use(createPinia())
    .use(ant)
    .mount('#app')
