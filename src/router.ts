import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'
import LoginPage from './Pages/LoginPage.vue'
import RegisterPage from './Pages/RegisterPage.vue'
import SessionPage from './Pages/sessionPage.vue'

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
    },
    {
        path: '/session/:id',
        component: SessionPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router