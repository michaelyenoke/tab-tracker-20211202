<template>
  <!--根據components自動轉換格式-->
  <edit-song-page />
</template>


<script>
import EditSongPage from '../components/EditSongPage'

  export default {
    name: 'songs-edit',
    components: {
      EditSongPage
    },
  }
</script>

