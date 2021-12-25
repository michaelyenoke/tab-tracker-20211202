<template>
<div>
   {{ song.lyrics }}
</div> 
</template>

<script>
export default {
    props: [
        'song'
    ]
}
</script>
