<template>
  <div class="login">
    <br>    
    <div class="justify-center text-align-center">
      <!-- Log In -->
      <div class="bclass">
        <div class="is-size-4 has-text-weight-semibold">
          LOG IN WITH YOUR REGISTERED ACCOUNT
        </div>
        <br/>
        <div class="field">
          <p class="control has-icons-left">
            <!-- Where user enters Email Address  -->
            <input class="input" id="authEmail" type="email" placeholder="Email address" v-model="email">
            <span class="icon is-small is-left">

            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <!-- Where user enters Password -->
            <input id="pass1" v-show="!showPass" class="input" type="password" placeholder="Password" v-model="password">
            <input id="pass2" v-show="showPass" class="input" type="text" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
    
            </span>
          </p>
        </div>
        <div class="passcheck">
          <!-- Shows Password if checkbox is checked -->
          <input v-on:click="showPass = !showPass" type="checkbox" id="checkbox">
          <label for="checkbox">Show Password</label>
        </div>
        <br/>
        <a id="logIn" class="button has-text-weight-semibold is-fullwidth login" v-bind:class="{ 'is-loading': busy }" v-on:click="login">LOG IN</a>
        <br/>
        <span class="register" v-on:click="menuAction" action="register">Register An Account</span>
        <br/><br/>
        <a v-on:click="menuAction" action="reset">Forgot Your Password?</a>
        <br/>
        <br/>
      </div>
    </div>      
  </div> 
</template>
<script>

export default {

  name: 'Login',
  mounted() {

  },
  data () {
    return {
      email: '',
      password: '',
      error: null,
      busy: false,
      showPass: false
    }
  },
  methods: {
    login() {
      let self = this
      self.busy = true

      Auth.signIn(self.email, self.password)
        .then(user => {
          self.loadData()
        })
        .catch(err => {
          self.busy = false
          if (err.code === 'UserNotConfirmedException') {
            self.$router.push('/verify')
          } else {
            self.error = err.message ? err.message : err
          }
        })
    },
    menuAction (e) {
      var action = e.target.getAttribute('action')

      if (!action) return;

      if (action === 'register') {
        this.$router.push('/register')
        return
      }
      if (action === 'reset') {
      this.$router.push('/reset')
      return
      }
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1 1 auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.padding {
  pointer-events: none;
}

.bclass {  
  margin-top: 2.5em;
  border: 1px solid #fff;
  padding: 1em;
  height: 30em;
  width: 100%;
  border-radius: 2%;
  background-color: white;
}

.field .fa-lg {
  position: absolute;
  left: 0;
  top: .05em;
  width: 1.5em;
  padding: 9px 3px;
  color: #fff;
  transition: .3s;
  background-color: black;
  border-radius: 4px 0 0 4px;
}

.passcheck input {
  float: left;
  margin: .8em;
}

.passcheck label {
  float: left;
  padding: .5em 1.3em 2.4em .5em;
}

.smedia a {
  padding: 0.4em 0px;
}

.register {
  color: rgb(75, 101, 247);
  cursor: pointer;
}

.register:hover {
  color: black;
}

.mem {
  display: flex;
  position: absolute;
  bottom: 2%;
  left: 47%;
}

.vie {
  display: flex;
  position: absolute;
  bottom: 2%;
  left: 90%;
}

.btxt {
  padding-top: 1.1em;
}

.button {
  background-color: black;
  color: white;
  top: 0em;
}

.button:hover {
  opacity: 0.8;
}

.greylbl{
  background-color: #e0e0e0;
}

.intro {
  width: 7em;
  height: 2em;
  background-color: #9e9e9e;
  position: relative;
  top: 1em;
  left: 0.5em;
}

.slide-vertical-leave-active,
.slide-vertical-enter-active {
  transition: all 0.5s;
}
.slide-vertical-enter, .slide-vertical-leave-to {
  transform: translateY(60vh);
  opacity: 0;
}
.slide-vertical-enter-to, .slide-vertical-leave {
  transform: translateY(0);
}
</style>