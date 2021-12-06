<template>
  <v-app>

    <header-page />
    <!--vue-router -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
 import HeaderPage from './components/HeaderPage'

export default {
  name: "App",
  components:{
    HeaderPage
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.space {
  height: 300;
  width: 300;
  background-color: chocolate;
}
</style>
