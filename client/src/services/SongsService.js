import Api from '@/services/Api'

export default {
  get (search) {
    return Api().get('songs',{
      params: {
        search: search
        //someRandomKey:search
      }
    })
  },

  post (song) {
    console.log('gg')
    console.log(song)
    console.log('kk')
    return Api().post('songs',song)
  },
  show (songId) {
    return Api().get('songs/'+songId)
  },

  // 有兩個參數 EditSongPage.vue 要帶兩個參數
  put(song,songId) {
    //console.log('yy')
    //console.log(song)
    //console.log(songId)
    //console.log('zz')
    return Api().put('songs/'+songId+'/edit',song)
  }

}

