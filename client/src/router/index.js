import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue' 
import Login from '../views/Login.vue' 
import Songs from '../views/Songs.vue' 
import CreateSong from '../views/CreateSong.vue' 
import ViewSong from '../views/ViewSong.vue' 
import EditSong from '../views/EditSong.vue' 


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home  // views
  },
  {
    path: '/register',
    name: 'register',
    component: Register //views -> register
  },
  {
    path: '/login',
    name: 'login',
    component: Login // views
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs // views
  },
  {
    path: '/songs/create',
    name: 'songs-create',
    component: CreateSong  // views
  },
  {
    path: '/songs/edit',
    name: 'songs-edit',
    component: EditSong  // views
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong // views
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
