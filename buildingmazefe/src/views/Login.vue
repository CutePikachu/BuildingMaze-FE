<template>
  <div >
    <div class = "input">
      <h1 class = "title">Welcome</h1>
      <input placeholder="Username"
             class="inputForm"
             clearable>
      <br><br>
      <input placeholder="Password"
             class="inputForm"
             type="password"
             clearable>
      <br><br>
      <input placeholder="Tap anywhere to login"
             class="tap change">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
    
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