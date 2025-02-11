import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Page/HomePage.vue'
import LoginPage from './Page/LoginPage.vue'
import RegisterPage from './Page/RegisterPage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
