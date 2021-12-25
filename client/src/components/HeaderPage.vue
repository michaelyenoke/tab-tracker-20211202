<!--直接送到App.vue-->
<template>
    <div>
    <v-app-bar app color="#FFC1CB" dark>
      <div class="d-flex align-center mr-4"></div>
      <v-toolbar-title class="mr-4" >
        <span
          class="home"
          @click="navigateTo({name:'root'})"> 
          tabtracker
        </span>
      </v-toolbar-title>
      
      <!--TODO: Implement Me-->
      <v-toolbar-items>
         <v-btn 
         text 
         dark
         @click="navigateTo({name:'songs'})"
         >
          Browse
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!--
        <router-link to="register"> 
        -->
        <!--須先確認有寫進 index.js 的路由(name)中-->

        

        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          text 
          dark
          @click="navigateTo({name:'login'})">  
          Log In
        </v-btn>

        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          text 
          dark
          @click="navigateTo({name:'register'})">  
          Sign Up
        </v-btn>

        <v-btn 
        v-if="$store.state.isUserLoggedIn"
        text 
        dark
        @click="logout">
        Log Out
        </v-btn>
        <!--
        </router-link>
        -->
      </v-toolbar-items>
    </v-app-bar>
    <v-container fluid></v-container><!--Removes viewport maximum-width size breakpoints-->
    </div>

</template>

<script>
  export default {
    name: 'HeaderPage',
    methods:{
      navigateTo(router){
        this.$router.push(router)
      },
      logout () {
         this.$store.dispatch("setToken", null)
         this.$store.dispatch("setUser", null)
         // todo : redirect to homepage
         this.$router.push({
              name:'root'
        })
      }
    },
    data: () => ({
    })
  }
</script>

<style scoped>
.home {
  cursor:pointer;
}

.home:hover {
  color: #E9E;
}
</style>