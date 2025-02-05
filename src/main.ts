import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Page/HomePage.vue'
import LoginPage from './Page/LoginPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
