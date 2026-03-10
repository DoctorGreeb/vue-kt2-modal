import { createRouter, createWebHistory } from 'vue-router';
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
    path: '/invalid',
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
    name: 'ProfilePage',
    component: ProfilePage
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
