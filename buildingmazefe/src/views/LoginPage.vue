<template>
  <div id="LoginPage" @click="login">
    <div class = "input">
      <h1 class = "title">Welcome</h1>
      <input placeholder="Username"
             @click.stop=""
             v-model="username"
             class="inputForm"
             clearable/>
      <br><br>
      <input placeholder="Password"
             class="inputForm"
             type="password"
             @click.stop=""
             @keyup.enter="login"
             v-model="password"
             clearable/>
      <br><br>
      <input placeholder="Tap anywhere to login"
             disabled="disable" 
             v-model="tip"
             :style="styleColor"
             class="tap change"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.withCredentials = true;

  export default {
    name: 'LoginPage',
    data () {
      return {
        username: "",
        password: "",
        styleColor: "",
        tip: "Tap anywhere to login",
        blocked: false,
      }
    },
    created: function() {
      var that = this;
      var storage = window.localStorage;
      if (storage["token"]) {
        axios.put('/v1/identity/' + storage["token"])
          .then(function(resp) {
            if (resp.data.Success) {
              that.message("Login Automatically. Loading...", "#2E571F");
              storage["token"] = resp.data.Message; 
            } else {
              storage.removeItem("token");
            } 
          })
          .catch(that.catchFunc);
      }
    },
    methods: {
      login: function() {
        var that = this;
        var storage = window.localStorage;
        if (that.blocked) return;
        if (that.username === "") {
          that.message("Please complete username", "#57261F")
          return;
        }
        if (that.password === "") {
          that.message("Please complete password", "#57261F")
          return;
        }
        //http request challenge
        that.blocked = true;
        axios.get('/v1/indenty/' + that.username)
          .then(function(resp) {
            let pwd = that.password;
            axios.post('/v1/indentity/', Qs.stringify({'password': pwd}))//needs refactoring
              .then(function(resp) {
                if (resp.data.Success) {
                  that.message("Login successfully. Loading...", "#2E571F");
                  storage["token"] = resp.data.Message;
                } else {
                  that.message(resp.data.Message, "#57261F");
                  storage.removeItem("token");
                }
              })
              .catch(that.catchFunc);
          }) 
          .catch(that.catchFunc);
        },
        message: function(msg, color) {
          this.tip = msg;
          this.styleColor = "background-color: " + color + ";";
          this.blocked = true;
          this.recover();
        },
        recover: function() {
          var that = this;
          setTimeout(function() {
            that.tip = "Tap anywhere to login";
            that.styleColor = "";
            that.blocked = false;
          }, 2000)
        },
        catchFunc: function(error) {
          this.message(error, "#57261F");
        }
      
    }
}
</script>

<style scoped>
  .input {
    font-family: sans-serif;
    width: 320px;
    margin: 0 auto;
    padding: 5px;
    margin-top: 100px;
    color: #4527a0;
  }

  .inputForm {
    color: #000000;
    padding: 28px;
    border-radius: 25px;
    border: none;
    background-color: #ede7f6;
    height: 50px;
    width: 320px;
  } 

  .tap {
    color: #ffffff;
    padding: 28px;
    border-radius: 25px;
    border: none;
    background-color: #1e2d49;
    height: 50px;
    width: 320px;
    text-align: center;
  }

  .change::-webkit-input-placeholder {
    color: #ffffff;
  }
</style>