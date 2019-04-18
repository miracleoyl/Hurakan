<template>
  <div class='el-footer'>
       <P style="text-align:center">Copyright@飓风人工智能有限公司</P>
  </div>
</template>

<script>
export default {
  name: 'pagefooter',
  props: {
  },
  data: function () {
    return {
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-footer {
    color: white;
    background:linear-gradient(-15deg, #000000 0%, #388c96 51%, #0f3e50 75%);
    box-sizing: inherit;
    padding-top: 0px;
    padding-right: 5%;
    padding-bottom: 0px;
    padding-left: 0%;
    width: 100%;
    display: inline-block;
    margin-left: -8px;
    position: fixed;
    bottom: 0px;
}
</style>
