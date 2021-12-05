<template>
  <v-app>
    
    <!--toolbar-->
    <!--API: https://vuetifyjs.com/en/api/v-app-bar/-->    
    <v-app-bar
      app
      color="primary"
      dark
    >


      <div class="d-flex align-center">
        <!--
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        -->

        
      </div>

      <v-spacer>tabtracker</v-spacer>

      <!--
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      --> 
    </v-app-bar>

    <div class="space">
      <p>jhkhkhk</p>
    </div>
    <!-- Floating With Search
    https://vuetifyjs.com/en/components/toolbars/#floating-with-search
    -->
    <!--
    <v-card
    class="pa-4"
    flat
    height="300px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
    <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  -->

    <!--vue-router -->
    <v-main>
      <router-view/>
    </v-main>


    
  </v-app>





</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.space{
    height: 300;
    width: 300;
    background-color: chocolate;
}
</style>
