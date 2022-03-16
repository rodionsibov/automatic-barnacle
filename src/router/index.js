import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../pages/Blog.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../pages/Services.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../pages/Contact.vue')
    },
    {
        path: '/images',
        name: 'Images',
        component: () => import('../pages/Images.vue')
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: () => import('../pages/Details.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router