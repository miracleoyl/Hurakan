<template>
  <div id="app">
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

#app {
  height: 100%;
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
