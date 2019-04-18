<template>
  <div class='el-header'>
    <div>
      <img class="logoimg" alt="logo failed to load" src="@/assets/images/Brand.jpg" title="飓风人工智能"/>
      <span class='compmsg'>{{msg}}</span>
    </div>
    <div class ='loginAction'>
      <router-link to="/login" tag='button' title='click to login' class="loginbtn" v-show= 'isShow' >
        <button @click="showButton">Login </button>
      </router-link>
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" class="loginbtn" replace>Log Out
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheader',
  props: {
    msg: {
      type: String,
      default: 'default value for msg!'
    },
    isShow: {
      type: Boolean,
      default: true
    },
    authenticated: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
    }
  },
  computed: {

  },
  methods: {
    showButton: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-header {
    color: white;
    background:linear-gradient(-15deg, #000000 0%, #388c96 51%, #0f3e50 75%);
    display: inline-block;
    padding: 0;
    width: 100%;
    height: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-left: -8px;
}

.logoimg{
    float: left;
    padding: 5px;
    height: 50px;
    width: 80px;
    margin-left: 15px;
}

.loginbtn{
    float: right;
    background: transparent;
    color: white;
    border: none;
    font-size: small;
    cursor: pointer;
    margin-right: 10px;
}

.loginAction{
    display: flex;
    justify-content: center;
    align-items: Center;
    float: right;
    height: 50px;
}

.compmsg {
    position: absolute;
    padding-top: 20px;
}
</style>
