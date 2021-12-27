import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Announcements from "../views/Announcements";
import Goods from "../views/Goods";
import EditAnnouncement from "../views/EditAnnouncement";
import App from "@/App"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/announcement',
    component:App,
    children:[
      { path: "", name: "Announcements", component: Announcements },
      { path: "edit/:id", name: "edit", component: EditAnnouncement }
    ]
  },
  {
    path: '/goods',
    name: 'Goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
