<template>

</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data () {
        return {
            song: null
        }
    },
    async mounted() {
        const songId = this.$state.route.params.songId
        //console.log(songId)
        this.song = await SongsService.show(songId)
    }
}

</script>

<style>
</style>
