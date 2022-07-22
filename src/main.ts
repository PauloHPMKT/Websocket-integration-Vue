import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import SocketIo from './plugins/socket.io';

const app = createApp(App)
app.use(SocketIo, {
    connection: 'http://localhost:3002',
    options: {
        autoConnect: false,
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
