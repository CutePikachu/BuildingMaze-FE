<template>
  <div id="bar">
    <div id="nav">
      <router-link to="/">Home       </router-link>  |
      <router-link to="/about">Guide </router-link>  |
      <router-link to="/login">Login </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }

</script>

<style scoped>
#bar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #204177;
}
#nav {
  padding: 15px;
  background-color: #d1c4e9;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #204177;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>