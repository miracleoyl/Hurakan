<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated"/>  <!--  load content from router.js  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
      mockAccount: {
      username: "mouyang",
      password: "pwd"
      }
    }
  },
  //When the application mounts, we can do some checks:
  // mounted() {
  //   if(!this.authenticated) {
  //       this.$router.replace({ name: "login" });
  //     }
  //   },
  methods: {
    setAuthenticated(status) {
    this.authenticated = status;
    },
    logout() {
    this.authenticated = false;
    }
  }
}
</script>

<style lang="scss">
body {
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
