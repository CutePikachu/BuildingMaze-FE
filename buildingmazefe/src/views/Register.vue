<template>
  <div id="Register">
    <div id="home">
      
      <router-link to="/"><img src="../assets/home.png" height="25" width="25" align="left"></img></router-link>
    </div>

    <h1 class="title">ACCOUNT REGISTRATION</h1>
    <div class="input">
      <h3>Username:</h3>
      <input placeholder="Username"
               @click.stop=""
               v-model="username"
               class="inputForm"
               clearable/>
        <br>
        <h3>Password:</h3>
        <input placeholder="Password"
               class="inputForm"
               type="password"
               @click.stop=""
               @keyup.enter="login"
               v-model="password"
               clearable/>
        <br>
        <h3>Confirm Password:</h3>
        <input placeholder="Confirm Password"
               class="inputForm"
               type="password"
               @click.stop=""
               @keyup.enter="login"
               v-model="password"
               clearable/>
        <br><br><br><br>
        <input placeholder="Tap Anywhere to Create"
               disabled="disable" 
               v-model="tip"
               :style="styleColor"
               class="tap change"/>
      </div>
  </div>

</template>

<script>
  export default {
  	name: 'Register',
    data () {
      return {
        username: "",
        password: "",
        styleColor: "",
        tip: "Tap Anywhere to Create",
        blocked: false,
      }
    },
    methods: {
      register: function() {
        var that = this;

      }
    }
  }
</script>

<style scoped>
  #Register {
    width: 100%;
    height: 100%;
    background-color: #C7F6EC;
    margin-top: 0px;
  }
  .input {
    font-family: sans-serif;
    text-align: left;
    width: 320px;
    margin: 0 auto;
    padding: 5px;
    margin-top: 20px;
    color: #4527a0;
  }

  .inputForm {
    color: #000000;
    padding: 28px;
    border-radius: 15px;
    border: none;
    background-color: #1ecfd6;
    height: 50px;
    width: 320px;
  } 

  .tap {
    color: #ffffff;
    padding: 28px;
    border-radius: 15px;
    border: none;
    background-color: #1e2d49;
    height: 50px;
    width: 320px;
    text-align: center;
  }

  .change::-webkit-input-placeholder {
    color: #ffffff;
  }

  .title {
    padding-top: 90px;
    margin-top: 0px;
  }

  .home {
    padding: 15px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #204177;
  }
</style>