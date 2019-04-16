<template>
  <!-- <FileDownloader :key="downloadKey" ref='downloader'></FileDownloader> -->
  <tr><td><a v-bind:href="'/file/download/' + file.encodedName" v-on:click="downloadFile">{{ file.name }}</a></td>
  <td class="actionAlign"><button class="deleteButton" @click="deleteFile(file)">Delete</button></td></tr>
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
  .deleteButton{
    cursor: pointer;
    background: transparent;
    color: black;
    border-radius: 5px;
    width: 4rem;
    margin-left: 10px;
  }

  button.deleteButton:hover {
      background: #fcfcfc;
  }

  .actionAlign{
    text-align: center;
  }
</style>
