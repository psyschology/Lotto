import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';
import '@/styles/main.scss';


const app = createApp(App);
app.use(createMetaManager());
app.mount('#app');
