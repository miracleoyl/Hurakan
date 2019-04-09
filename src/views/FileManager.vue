<template>
   <div class="filemanager">
        <div>
          <HEADER msg="this is from header.vue" v-bind:isShow ='false'/>
        </div>
        <div>
          <UploadsContainer v-on:files-uploaded="filesUploaded">
          </UploadsContainer>
        </div>
        <div>
          <Uploadsfilelist ref="filesList" v-bind:files.sync="files">
          </Uploadsfilelist>
        </div>
        <div>
            <FOOTER/>
        </div>
  </div>
</template>

<script>
import HEADER from '@/components/header.vue'
import FOOTER from '@/components/footer.vue'
import UploadsContainer from '@/components/uploadscontainer'
import Uploadsfilelist from '@/components/uploadfilelist'

// import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
      files: []
    }
  },
  components: {
    HEADER,
    FOOTER,
    UploadsContainer,
    Uploadsfilelist
  },
  methods: {
    filesUploaded (files) {
      this.$refs.filesList.filesUploaded(files)
    }
  }
}
</script>

<style scoped>
</style>
