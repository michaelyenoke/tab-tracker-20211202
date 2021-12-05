<template>
  <v-card max-width="450" class="mx-auto">
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <!--三條線圖示
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      -->

      <v-toolbar-title>Register</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--放大鏡圖示
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      -->
    </v-toolbar>

    <!--  List 的部分 -->
    <v-list three-line>
      <template>
      <!--
      <template v-for="(item, index) in items">
        <-次標題:請輸入->
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>
        -->

        <!--分隔線
        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>
        -->

        <!--list-->
        <!--
        <v-list-item
          v-else
          :key="item.title"
        >
        -->

        <!--list頭像-->
        <!--
         <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
         -->
        <!--list內容-->
        <!--
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
          -->
        <!--  
        </v-list-item>
        -->

        <div class="container">
          <v-layout>
            <v-flex sm-12>
              <panel title="Register">
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field label="Email" v-model="email"></v-text-field>
                  <br />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                  ></v-text-field>
                </form>
                <br />
                <div class="danger-alert" v-html="error" />
                <br />
                <v-btn dark class="cyan" @click="register"> Register </v-btn>
              </panel>
            </v-flex>
          </v-layout>
        </div>

        
      </template>
    </v-list>
  </v-card>
</template>
<!--
<script>
export default {
  data: () => ({
    items: [
      { header: "請輸入" },
      
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        
    ],
  }),
};
</script>
-->
<!--
<template>
  <div class="container">
    <v-layout >

      <v-flex sm-12>
        <panel title="Register">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br />
          <div class="danger-alert" v-html="error" />
          <br />
          <v-btn dark class="cyan" @click="register"> Register </v-btn>
        </panel>
      </v-flex>
    
    </v-layout>
  </div>
</template>
-->

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        var response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
  border: red;
  border-block-color: ;
  background-color: chartreuse;
}
.error {
  color: red;
}
</style>
