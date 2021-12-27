<template>
  <!--根據components自動轉換格式-->
  <songs-page/> 
</template>


<script>
  import SongsPage from '@/components/SongsPage/index'

  export default {
    name: 'Songs',

    components: {
      SongsPage
    
    },
  }
</script>

