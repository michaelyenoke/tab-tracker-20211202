import Api from '@/services/Api'

export default {
  get () {
    return Api().get('songs')
  },

  post (song) {
    return Api().post('songs',song)
  }

}

