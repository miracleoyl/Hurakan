<template>
<div class="log-email">
     <div class="col">
      <div class="card">
         <div class="card-body">
              <h3 class="card-title text-muted">Log in</h3>
              <form v-on:submit="login">
                    <div class="form-group text-muted">
                        <!-- <label for="id_username">Username:</label> -->
                        <input type="text" name="email" placeholder="Email" class="form-control " required>
                    </div>
                    <div class="form-group text-muted">
                        <!-- <label for="id_password">Password:</label> -->
                        <input type="password" placeholder="Password" name="password" class="form-control " required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block loginButton" value="Login">Log in</button>
              </form>
         </div>
         <!-- <div class="card-footer text-muted text-center">
          New to company? <a class="signuplnk" href="/signup">Sign up</a>
         </div> -->
     </div>
    <!-- <div class="text-center py-2">
        <small>
          <a href="/reset/" class="text-muted">Forgot your password?</a>
        </small>
      </div> -->
     </div>
</div>
</template>

<script>
import router from '../router'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {

    // NOTE by Miracle: If use login: (e) => this.$emit won't work and will see not a function error:
    // Reason: When you define your method with a fat arrow, you capture the lexical scope, which means this will be pointing to the containing scope (often window, or undefined), and not Vue.
    login: function (e) {
      e.preventDefault()
      let email = e.target.elements.email.value
      let password = e.target.elements.password.value
      this.$emit('loginuserlistner', email)
      let login = () => {
        let data = {
          email: email,
          password: password
        }

        axios.post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            this.$emit('authStatus', true)
            this.$root.isLogin = 'true'
            router.push('/managefile')
          })
          .catch((errors) => {
            console.log('Cannot log in')
            alert('The username and / or password is incorrect')
          })
      }
      login()
    }
  }
}

</script>
<style scoped>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.log-email {
  top: 300px;
  left: 60%;
  position: relative;
}

.col {
  max-width: 300px;
}
.card {
  position: relative;
  word-wrap: break-word;
  background-clip: border-box;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.card-title {
    margin-bottom: .75rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-control {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-block {
    display: block;
    width: 100%;
    line-height: 1.5;
    padding-top: 0.375rem;
    padding-right: 0.75rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
}
.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.text-muted {
    color:white!important;
}
.text-center {
    text-align: center!important;
}
.card-footer {
    padding: .75rem 1.25rem;
    border-top: 1px solid rgba(0,0,0,.125);
}
.signuplnk {
    color:crimson;
    font-size: 20px
}
.loginButton {
    border-radius: 5px;
    cursor: pointer;
}
</style>
