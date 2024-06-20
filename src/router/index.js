
import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';
import Dashboard from '../views/DashBoard.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
