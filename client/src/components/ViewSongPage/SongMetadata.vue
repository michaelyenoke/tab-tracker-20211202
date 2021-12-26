<template>
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
                    name: 'songs-edit',
                    params: {
                      songId: song.id,
                    },
                  })
                "
        >
        Edit
      </v-btn>
    </v-flex>

    <v-flex xs6>
      <img class="album-image" v-bind:src="song.albumImageUrl" />
      <br />
      {{ song.album }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["song"],
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  }
};
</script>
