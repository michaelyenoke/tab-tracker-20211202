<template>
  <v-card max-width="750" class="mx-auto">


    <!-- CardPanel.vue : slot  -->
    <card-panel title="Songs">
      <!--add buttion-->

      <div slot="action">
        <v-btn
          @click="navigateTo({ name: 'songs-create' })"
          class="green accent-2"
          fab
          light
          medium
          absolute
          right
          middle
        >
          <v-icon>add</v-icon>
        </v-btn>
      </div>

      <!--add buttion-->

      <v-flex xs8 offset-xs2>
        <div v-for="song in songs" class="song" :key="song.id">
          <v-layout>
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

              <v-btn
                dark
                class="cyan"
                @click="
                  navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id,
                      //songId: 'test'
                      //這裡決定params出現什麼
                    },
                  })
                "
              >
                View
              </v-btn>
            </v-flex>
            <img class="album-image" v-bind:src="song.albumImageUrl" />
            <v-flex xs6> </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </card-panel>
    <!-- CardPanel.vue : slot -->
 
 
  </v-card>
</template>

<script>
import SongsService from "@/services/SongsService";
import CardPanel from "@/components/CardPanel";

export default {
  components: {
    CardPanel,
  },
  data() {
    return {
      songs: "",
    };
  },
  async mounted() {
    // do a request to the backend for all the songs
    // get request
    this.songs = (await SongsService.get()).data;
    //console.log('songs', this.songs)
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style lang="scss" scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

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
