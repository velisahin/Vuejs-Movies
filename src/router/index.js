import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Likes from '../views/Likes.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: Likes,
      props: true
    },
    {
      path:'/:pathMatch(.*)*',
      name: 'all',
      component: HomeView,
      props: true
    },
    {
      path:'/movieDetail',
      name: 'movieDetail',
      component: Detail,
      props: true
    }
  ]
})

export default router
