<template>
  <div id="app">
    <router-view/>  <!--  load content from router.js  -->
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
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
