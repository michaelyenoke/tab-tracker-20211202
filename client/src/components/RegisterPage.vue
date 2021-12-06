<template>
  <v-card max-width="450" class="mx-auto">
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Register</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--  List 的部分 -->
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>
            <v-flex sm-12>
              <div title="Register">
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
              </div>
            </v-flex>
          </v-layout>
        </div>

        
      </template>
    </v-list>
  </v-card>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";


export default {
  name:'RegisterPage',
  data:() => ({
    email: "",
    password: "",
    error: null,
  }),
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

.danger-alert {
  color: red;
}
</style>
