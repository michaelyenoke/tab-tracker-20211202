<template>
  <!--根據components自動轉換格式-->
  <view-song-page /> 
</template>


<script>
  import ViewSongPage from '../components/ViewSongPage/ViewSongPage.vue'

  export default {
    name: 'song',

    components: {
      ViewSongPage
    
    },
  }
</script>
