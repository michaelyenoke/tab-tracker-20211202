import Api from '@/services/Api'

export default {
  get () {
    return Api().get('songs')
  },

  post (song) {
    return Api().post('songs',song)
  },
  show (songId) {
    return Api().get('songs/'+songId)
  },

  put(songId,song) {
    return Api().put('songs/'+songId+'/edit',song)
  }

}

