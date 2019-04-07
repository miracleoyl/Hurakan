<template>
  <div class='el-header'>
    <img class="logoimg" alt="logo failed to load" src="@/assets/images/Brand.jpg" title="飓风人工智能"/>
    <h1 class='compmsg'>{{msg}}</h1>
    <div class ='loginbtn'>
      <router-link to="/login" tag='button' title='click to login' v-show= 'isShow' >
        <button @click="showButton">Login </button>
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
    background-color:#15184c;
    display: inline-block;
    padding-top: 0px;
    padding-right: 5%;
    padding-bottom: 0px;
    padding-left: 0%;
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.logoimg{
    float:left;
    height:120px;
    padding-left: 2px;
}

.loginbtn{
    float: right;
    margin-right: 20px;
}
.compmsg {
    text-align: center;
    top: 50%;
}
</style>
