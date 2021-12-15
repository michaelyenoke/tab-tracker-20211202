import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue' 
import Login from '../views/Login.vue' 
import Songs from '../views/Songs.vue' 
import CreateSongs from '../views/CreateSongs.vue' 
import ViewSongId from '../views/ViewSongId.vue' 


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
    name: 'songscreate',
    component: CreateSongs  // views
  },
  {
    path: '/songs/:songId',
    name: 'songs-song-id',
    component: ViewSongId  // views
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
