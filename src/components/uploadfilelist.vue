<template>
  <div>
    <h3>File List</h3>
    <table border="1" cellspacing="0">
      <tr style="background:#F5F7F9;border-top-color: yellow;">
        <th>Name</th><th>Action</th>
      </tr>
      <UploadedFile v-for="file in files" v-bind:file.sync="file" v-bind:key="file._id" v-on:delete-file="deleteFile">
      </UploadedFile>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import UploadedFile from './uploadfile'

export default {
  name: 'UploadedFilesList',
  data () {
    return {
      files: []
    }
  },
  components: {
    UploadedFile
  },
  methods: {
    fetchFiles () {
      axios.get('/api/files').then(response => {
        this.$set(this, 'files', response.data)
      })
    },
    filesUploaded (files) {
      files.forEach(file => {
        this.files.push(file)
      })
    },
    deleteFile (file) {
      if (confirm('Are you seriously sure to delete selceted file?')) {
        axios.delete('/api/files/' + file._id).then(() => {
          let fileIndex = this.files.indexOf(file)
          this.files.splice(fileIndex, 1)
        }).catch(() => {
          console.log('Error deleting file')
        })
      }
    }
  },
  mounted () {
    this.fetchFiles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    border: solid 2px #F5F7F9;
    width: 100%;
  }
  tr{
    height: 45px;
  }
</style>
