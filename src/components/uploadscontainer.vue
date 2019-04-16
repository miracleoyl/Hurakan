<template>
  <div class="uploadcontainer">
    <h3>Uploader</h3>
    <div style="display: inline-block;">
      <input
        v-show="!uploadStarted"
        type="file"
        multiple
        v-bind:name="uploadName"
        ref ="uploadfileref"
        @change="fileSelected"
        class="chooseButton"
      >
      <p v-show="uploadStarted" style="display: inline-block;margin: 0 20px 0 20px;">Uploading...</p>
      <button v-show="!uploadStarted" v-on:click="startUpload" class="uploadButton">Start</button>
      <button v-show="uploadStarted" v-on:click="cancelUpload" class="uploadButton">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default {
  name: 'Main',
  data () {
    return {
      uploadStarted: false,
      uploadName: 'files',
      uploadUrl: '/api/upload',
      formData: null
    }
  },

  methods: {
    fileSelected (event) {
      if (event.target.files.length === 0) {
        return
      }

      let files = event.target.files
      let name = event.target.name

      let formDatatemp = new FormData()

      for (let index = 0; index < files.length; index++) {
        formDatatemp.append(name, files[index], files[index].name)
      }
      this.$set(this, 'formData', formDatatemp)
    },
    startUpload () {
      this.$set(this, 'uploadStarted', true)
      this.uploadData(this.formData)
    },
    cancelUpload () {
      if (this.uploadStarted) {
        source.cancel()
      }
      this.$set(this, 'uploadStarted', false)
    },
    uploadData (formData) {
      if (this.formData === null) {
        return
      }
      axios.post(this.uploadUrl, formData, {
        cancelToken: source.token
      }).then(response => {
        if (response.data.length === 0) {
          alert('File not uploaded. Please check the file types')
          return
        }
        this.updateFilesList(response.data)
        this.$set(this, 'formData', null)

        // clear input
        this.$refs.uploadfileref.value = ''
        alert('file uploaded successfully')
      })
        .catch(() => {
          alert('Error occured')
        })
        .then(() => {
          this.$set(this, 'uploadStarted', false)
        })
    },
    updateFilesList (files) {
      this.$emit('filesuploaded', files)
    }
  }
}
</script>

<style scoped>
  .uploadButton{
    cursor: pointer;
    float: right;
    background: #0074C1;
    color: white;
    border-radius: 5px;
    width: 4rem;
    margin-left: 10px;
  }

  button.uploadButton:hover {
    background: green;
  }
</style>
