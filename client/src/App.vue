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
import HeaderPage from "./components/HeaderPage";

export default {
  name: "App",
  components: {
    HeaderPage,
  },

  data: () => ({
    //
  }),
};
</script>

<!--globaly vue sytle-->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
