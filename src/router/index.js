import Vue from 'vue'
import VueRouter from 'vue-router'

const Book = () => import('../views/Book')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/book'
  },
  {
    path: '/book',
    component: Book
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
