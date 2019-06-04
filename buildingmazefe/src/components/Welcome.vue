<template>
  <div align="center">
    <h1>{{ msg }}</h1><br>
    <mu-button class="mu-ripple" @click="explore"> Explore</mu-button><br>
    <mu-button class="mu-ripple" @click="build"> Build</mu-button><br>
    <mu-button class="mu-ripple" @click="rules"> Rules</mu-button><br>
    <mu-button class="mu-ripple" @click="more"> More</mu-button><br>
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
      explore: function() {
        this.$router.push({path:'/bm'})
      },
      build: function() {
        this.$router.push({path:'/build'})
      },
      rules: function() {
        this.$router.push({path:'/about'})
      },
      more: function() {
        this.$router.push({path:'/bm'})
      },
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
    margin-top: 120x;
    background-color: #fff;
    border-radius: 6px;
    color: #303f9f;
    border: 1px solid #2196f3;
    font-size: 20px;
  }
</style>
