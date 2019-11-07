import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import a from "../views/a.vue"
import b from "../views/b.vue"
import c from "../views/c.vue"

Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      redirect:"/home/a"
    },
    {
      path:"/home",
      component:home,
      children:[
      {
        path:"/home/a",
        component:a
      },
      {
        path:"/home/b",
        component:b
      },
      {
        path:"/home/c",
        component:c
      }  ]
    }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
