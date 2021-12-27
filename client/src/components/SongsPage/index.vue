<template>
 <v-flex>
  <v-card max-width="750" class="mx-auto">
        <song-search />
</v-card>

<v-card max-width="750" class="mx-auto">
    
        <song-panel  />
    
 </v-card>
 </v-flex>
</template>

<script>
import SongPanel from "@/components/SongsPage/SongPanel"
import SongSearch from "@/components/SongsPage/SongSearch"


export default {
  components: {
    SongPanel,
    SongSearch

  },
}
</script>
