<template>
  <v-card max-width="750" class="mx-auto">

    <panel title="Song Metadata">
        <song-metadata :song="song" />
    </panel>

  

    <panel title="Lyrics">
        <song-lyrics :song="song" />
    </panel>


    <panel title="Youtube">
        <you-tube-part :youtubeId="youtubeId"/>
    </panel>

  </v-card>
</template>

<script>
import SongsService from "@/services/SongsService"
import SongMetadata from './SongMetadata'
import SongLyrics from './SongLyrics'
import YouTubePart from './YouTubePart'

export default {
  data() {
    return {
      song: "",
      youtubeId:""
    };
  },
  async mounted() {
    //這部分和取網址songId的值無關

    // 這裡的 route -> main.js ->sync(store, router)
    // 這裡的 songId 來自於 SongsPage.vue 中的 VIEW -> click 透過 navigateTo 送到路由內做為參數
    const songId = await this.$store.state.route.params.songId;
    //console.log('ok1')
    //console.log(songId)
    //console.log('ok2')
    this.song = (await SongsService.show(songId)).data;
    //console.log(songId)
    //console.log('song',this.song)
    //console.log('ok3')
    this.youtubeId = await this.song.youtubeId
    //console.log(this.youtubeId)
  },
  components: {
    SongMetadata,
    SongLyrics,
    YouTubePart

  },
};
</script>

<style>
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
