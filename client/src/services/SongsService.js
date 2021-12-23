import Api from '@/services/Api'

export default {
  get () {
    return Api().get('songs')
  },

  show (songId) {
    return Api().get('songs/${songId}')
  },

  post (song) {
    return Api().post('songs',song)
  }

}

