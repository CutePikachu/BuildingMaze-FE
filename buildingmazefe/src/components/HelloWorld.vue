<template>
  <div align="center">
    <h1>{{ msg }}</h1><br>
    <mu-ripple class="murip"> Login   </mu-ripple><br>
    <mu-ripple class="murip"> Register</mu-ripple>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .murip {
    position: relative;
    width: 350px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    background-color: #fff;
    border-radius: 6px;
    color: #303f9f;
    border: 1px solid #2196f3;
    font-size: 20px;
  }
</style>
