<template>
   <div class="user">
        <div>
            <HEADER msg="this is from header.vue" v-bind:isShow ='false'/>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
            <FOOTER/>
        </div>
  </div>
</template>

<script>
import HEADER from '@/components/header.vue'
import FOOTER from '@/components/footer.vue'
// import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
    }
  },
  components: {
    HEADER,
    FOOTER
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
