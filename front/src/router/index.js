import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Signup from '../views/SignupView.vue';
import Chart from '../views/ChartView.vue';
import News from '../views/NewsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: Login},
    { path: '/signup', name: 'signup', component: Signup},
    { path: '/chart', name: 'chart', component: Chart},
    { path: '/news', name: 'news', component: News}
  ]
})
export default router
//requests 


// router.get('/', (req, res) => {
//   res.render('home')
// });
