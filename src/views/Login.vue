<template>
  <div class="login">
      <div id='pageheader'>
          <HEADER msg="Welcome to Hurakan AI world" v-bind:isShow ='false'/>
      </div>
      <div>
        <LOGIN @authStatus='setAutorizationStatus' @loginuserlistner='setLoginuser'/>
      </div>
      <div id='pagefooter'>
          <FOOTER/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LOGIN from '@/components/login.vue'
import HEADER from '@/components/header.vue'
import FOOTER from '@/components/footer.vue'
export default {
  components: {
    HEADER,
    LOGIN,
    FOOTER
  },
  data: function () {
    return {
    }
  },
  methods: {
    setAutorizationStatus (isAuth) {
      this.$emit('authenticatedlistner', isAuth)
    },
    setLoginuser (user) {
      this.$emit('loginuser', user)
    }
  }
}
</script>

<style lang="scss">
.login{
    background-image: url('../assets/images/login_bg.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: -webkit-fill-available;
}
</style>
