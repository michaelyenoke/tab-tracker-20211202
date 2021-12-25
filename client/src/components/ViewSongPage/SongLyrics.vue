<template>
  <v-layout>
    <v-flex xs6>
      <div>
        {{ song.lyrics }}
      </div>
    </v-flex>
  
    <v-flex xs6>
      <div>
        {{ song.lyrics }}
      </div>
    </v-flex>
  </v-layout>
  
</template>

<script>
export default {
  props: ["song"],
};
</script>
