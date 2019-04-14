<template>
  <div>
    <div>
      <FileDownloader :key="downloadKey" ref='downloader'></FileDownloader>
      <a v-bind:href="'/file/download/' + file.encodedName" v-on:click="downloadFile">{{ file.name }}</a>
      <button @click="deleteFile(file)">Delete</button>
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
    downloadFile (event) {
      event.preventDefault()
      let url = event.target.href
      this.downloadKey += 1
      this.$nextTick().then(() => {
        this.$refs.downloader.downloadFile(url)
      })
    },
    deleteFile (file) {
      this.$emit('delete-file', file)
    }
  }
}
</script>

<style scoped>
</style>
