<template>
  <div align="center">
    <h1>{{ msg }}</h1><br>
    <mu-button class="mu-ripple" @click="start"> Quick Start</mu-button><br>
    <mu-button class="mu-ripple" @click="login"> Login  </mu-button><br>
    <mu-button class="mu-ripple" @click="reg"> Register   </mu-button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    props: {
      msg: String
    },
    methods: {
      login: function() {
        this.$router.push({path:'/login'})
      },
      start: function() {
        this.$router.push({path:'/choice'})
      },
      reg: function() {
        this.$router.push({path:'/reg'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mu-ripple {
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
