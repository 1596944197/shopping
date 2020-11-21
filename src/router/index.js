import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const home = () =>
  import('views/home/home.vue')
const cart = () =>
  import('views/cart/cart.vue')
const profile = () =>
  import('views/profile/profile.vue')
const category = () =>
  import('views/category/category.vue')

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
