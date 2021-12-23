<template>
  <!--根據components自動轉換格式-->
  <view-song /> 
</template>


<script>
  import ViewSongPage from '../components/ViewSongPage'

  export default {
    name: 'song',

    components: {
      ViewSongPage
    
    },
  }
</script>
