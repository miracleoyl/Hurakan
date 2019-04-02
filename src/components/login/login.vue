<template>
    <div class="log-email">
     <div class="col">
      <div class="card">
         <div class="card-body">
              <h3 class="card-title text-muted">Log in</h3>
              <form method="post" novalidate="">
                    <input type="hidden"  name="csrfmiddlewaretoken" value="iCTXgZtfdJDBqjfLgf460SsUwY3VpK5xhE7KWnKxXkd8Yi9HUyffvp0ywnLaCaNI">
                    <input type="hidden" name="next" value="">          
                    <div class="form-group text-muted">
                        <label for="id_username">Username:</label>
                        <input type="text" name="username" placeholder="Email" autofocus="" class="form-control " required="" id="id_username">
                    </div>
                    <div class="form-group text-muted">
                        <label for="id_password">Password:</label>
                        <input type="password" placeholder="Password" name="password" class="form-control " required="" id="id_password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" @click="submitLogin">Log in</button>
              </form>
         </div>
         <div class="card-footer text-muted text-center">
          New to company? <a class="signuplnk" href="/signup">Sign up</a>
         </div>
     </div>
    <div class="text-center py-2">
        <small>
          <a href="/reset/" class="text-muted">Forgot your password?</a>
        </small>
      </div>
     </div>
    </div>
</template>

<script>
  export default {
    name:'login',
    components: {
    },
    data () {
      return {
      };
    },
    methods: {
      submitLogin () {
          this.$router.push('/user/');
      }
    }
  };
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
    left: 70%;
    position: relative;;
  }

.col {
    max-width: 15%;
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
</style>