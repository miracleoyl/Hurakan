<template>
  <div>
    <div>
      <a>{{ file.name }}</a>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import FileDownloader from './filedownload'
export default {
  props: ['file'],
  components: {
    FileDownloader
  },
  data () {
    return {
      downloadKey: 1
    }
  },
  name: 'UploadedFile',
  methods: {

  }
}
</script>

<style scoped>
</style>
