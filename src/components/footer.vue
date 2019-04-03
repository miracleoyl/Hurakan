<template>
  <div class='el-footer'>
       <P>This is footer from footer.vue</P>
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
    background-color:#15184c;
    box-sizing: inherit;
    padding-top: 0px;
    padding-right: 5%;
    padding-bottom: 0px;
    padding-left: 0%;
    width: 100%;
    display: inline-block
}
</style>