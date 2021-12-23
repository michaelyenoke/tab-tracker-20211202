<template>
  <!--根據components自動轉換格式-->
  <create-song-page />
</template>


<script>
import CreateSongPage from '../components/CreateSongPage'

  export default {
    name: 'CreateSong',
    components: {
      CreateSongPage
    },
  }
</script>

