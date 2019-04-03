<template>
  <div id="app">
    <div class="login">
        <div id='pageheader'>
            <HEADER msg="this is from header.vue" v-bind:isShow ='false'/>
        </div>
        <div>
            <LOGIN/>
        </div>
        <div id='pagefooter'>
            <FOOTER/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LOGIN from '@/components/login/login.vue'
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
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

.login{
    background-image: url('../assets/images/login_bg.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: -webkit-fill-available;
}
</style>
