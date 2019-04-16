<template>
  <div id="app">
    <router-view @authenticatedlistner = "setAuthorization" @userlistener = "setLoginUser"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      loginuser: ''
    }
  },
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then(() => {
          this.$router.push('/')
        })
    },
    setAuthorization (status) {
      this.authenticated = status
    },
    setLoginUser (user) {
      this.loginuser = user
    }
  },
  mounted () {
    if (this.authenticated === false) {
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>

<style>

#app {
  height: 100%;
  margin: -8px;
}

#pageheader {
  position: fixed;
  top: 0px;
  width: 100%;
}
#pagefooter {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
