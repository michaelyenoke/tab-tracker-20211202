<template>
  <v-card max-width="750" class="mx-auto">

    <card-panel title="Song Metadata">
        <song-metadata :song="song" />
    </card-panel>

    <v-layout>
    <card-panel title="Lyrics">
        <song-lyrics :song="song" />
    </card-panel>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Amq-qlqbjYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-layout>

  </v-card>
  <!--
  <v-card max-width="750" class="mx-auto">
    <v-layout>
        <card-panel title="Song Metadata">
          <v-flex xs6>
          <div class="song-id">
            {{ song.id }}
          </div>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" v-bind:src="song.albumImageUrl" />
          <br />
          {{ song.album }}
        </v-flex>
      </card-panel>

      <card-panel title="Lyrics">
        {{ song.lyrics }}
      </card-panel>

     
    </v-layout>
  </v-card>-->
</template>

<script>
import SongsService from "@/services/SongsService";
import CardPanel from "@/components/CardPanel";
import SongMetadata from './SongMetadata.vue';
import SongLyrics from './SongLyrics.vue';

export default {
  data() {
    return {
      song: "",
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
  },
  components: {
    CardPanel,
    SongMetadata,
    SongLyrics

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
