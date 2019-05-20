<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Guide</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #204177;
}
#nav {
  padding: 20px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #204177;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
