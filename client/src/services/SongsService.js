import Api from '@/services/Api'

export default {
  get (search) { // 這裡的資料要送到後端 controllers/SongsController.js中, 但送過去的search沒有資料(api有觸發), 將SongSearch.vue中的 search_is 改成 search 就可以送到後端！
    return Api().get('songs',{
      params: {
        search: search
        //someRandomKey:search
      }
    })
  },

  post (song) {
    //console.log('gg')
    //console.log(song)
    //console.log('kk')
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

