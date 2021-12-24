import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {sync} from 'vuex-router-sync' // 用來同步sync網址與資料(頁面)

//console.log(router)

Vue.config.productionTip = false

// 這裡會影響 ViewSongPage.vue 裡面 const songId = this.$store.state.route.params.songId
// 在這裡 store 變動會同步  router 的變動(當然也包含以下的子檔案)
// 相當於 router 和底下的參數(ex.params)都放在 state 中

sync(store, router)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
