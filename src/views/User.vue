<template>
   <div class="user">
        <div>
            <HEADER msg="this is from header.vue" v-bind:isShow ='false'/>
        </div>
        <div>
            <!-- <table-comp/> -->
            <FILEUPLOAD/>
        </div>
        <div>
            <FOOTER/>
        </div>
  </div>
</template>

<script>
  import tableComp from '@/components/userTable.vue';
  import HEADER from '@/components/header.vue'
  import FOOTER from '@/components/footer.vue'
  import FILEUPLOAD from '@/components/fileupload.vue'
  export default {
    name: "user",
    data () {
      return {
  
        }
    },
    components: {
      tableComp,
      HEADER,
      FOOTER,
      FILEUPLOAD
    },
    methods: {
    },
  };
</script>

<style scoped>

</style>