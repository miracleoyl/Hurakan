<template>
  <div id="app">
    <router-view/>
    <div>
      <router-link :to="{ name: 'Dashboard'}">Dashboard</router-link>
      <router-link :to="{ name: 'Login'}">Login</router-link>
      <a href="#" v-on:click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
.body {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
#app {
  height: 100%;
}
#nav {
  padding-top: 150px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
