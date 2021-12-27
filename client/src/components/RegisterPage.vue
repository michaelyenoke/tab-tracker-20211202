<template>
  <v-card max-width="450" class="mx-auto">
    
          <panel title="Register">  
            <v-flex sm-12>
              <!-- text-field-->
              <div title="Register">
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field 
                    label="Email" 
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <br />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                    :rules="passwordRules"
                    error-count="5"
                    required
                  ></v-text-field>
                </form>
                <br />
                <!--button-->
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
          </panel>

  </v-card>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'


export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      passwordRules:[
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Password must have 5+ characters',
        v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        v => /(?=.*\d)/.test(v) || 'Must have one number',
        v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
      ]

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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.danger-alert {
  color: red;
}
</style>
