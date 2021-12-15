<template>
  <v-card max-width="450" class="mx-auto">
    
          <card-panel title="Register">  
            <v-flex sm-12>
              <div title="Register">
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field label="Email" v-model="email"></v-text-field>
                  <br />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password">
                  </v-text-field>
                </form>
                <br />
                <div class="danger-alert" v-html="error" />
                <br />
                <v-btn 
                  dark 
                  class="cyan" 
                  @click="register"> 
                  Register 
                </v-btn>
              </div>
            </v-flex>
          </card-panel>

  </v-card>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import CardPanel from '@/components/CardPanel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        await this.$store.dispatch('setToken', response.data.token)
        await this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components:{
    CardPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.danger-alert {
  color: red;
}
</style>
