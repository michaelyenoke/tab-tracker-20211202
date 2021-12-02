<template>
  <div class="hello">
    <h1>Register</h1>
    <input
          type='email'
          text='email'
					v-model='email'
          placeholder='email' />
    <br>
    <input
          type='password'
          text='password'
					v-model='password'
          placeholder='password' />
    <br>
    <button
      @click='register'>
      Click Here
    </button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '123',
      password: 'abc'
    }
  },
  methods: {
    register () {
      console.log('register button was clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
</style>