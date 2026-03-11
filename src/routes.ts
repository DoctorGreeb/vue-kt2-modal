import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import InvalidPage from './pages/InvalidPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import UsersPage from './pages/UsersPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'InvalidPage',
    component: InvalidPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  { 
    path: '/profile', 
    component: ProfilePage,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
      const token = localStorage.getItem('token')
      if (!token) next('/login')
      else next()
    }
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
