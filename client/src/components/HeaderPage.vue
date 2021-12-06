<template>

    <div>
    <v-app-bar app color="cyan" dark>
      <div class="d-flex align-center mr-4"></div>
      <v-toolbar-title class="mr-4" >
        <span
          class="home"
          @click="navigateTo({name:'root'})"> 
          tabtracker
        </span>
      </v-toolbar-title>
      <!--TODO: Implement Me-->
      <!-- <v-toolbar-items>
         <v-btn flat dark>
          Browse
        </v-btn>
      </v-toolbar-items>   -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!--
        <router-link to="register"> 
        -->
        <!--須先確認有寫進 index.js 的路由(name)中-->
        <v-btn text dark
          @click="navigateTo({name:'login'})">  
          Log In
        </v-btn>

        <v-btn text dark
          @click="navigateTo({name:'register'})">  
          Sign Up
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