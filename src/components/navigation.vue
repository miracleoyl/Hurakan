<template>
  <div class="navigation">
    <h1>{{ msg }}</h1>
    <div v-for="item in xdata">
      {{item}}
    </div>
    <div>
       {{xdata[0]}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    msg: String,
    xdata: Array
  },
  data: function () {
    return {
    xdata:[
      {a:10},
      {b:20}
    ]
    };
  },
  computed: {
    c: function () {
      return this.a + this.b;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>



<!--Three parts in .vue:
  1.template : html stuff
  2. script:  need to export default so that other .vue can import 
  3. style-->