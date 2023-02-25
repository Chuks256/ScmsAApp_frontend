import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import LandingPage from '../views/LandingPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/sigin',
    name: 'Signin',
    component:SignIn
     },
     {
      path:'/signup',
      name:'Signup',
      component:SignUp
     }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
