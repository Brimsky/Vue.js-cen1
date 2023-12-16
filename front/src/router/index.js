import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Signup from '../views/SignupView.vue';
import Chart from '../views/ChartView.vue';
import News from '../views/NewsView.vue';
import User from '../views/ProfileViews/acPage.vue';
import navigationGuard from './routerGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: Login},
    { path: '/signup', name: 'signup', component: Signup},
    { path: '/chart', name: 'chart', component: Chart, meta: { requiresAuth: true }},
    { path: '/profile', name: 'user', component: User},
    { path: '/news', name: 'news', component: News}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

navigationGuard(router);
export default router

