<template>
  <div id="bar">
    <div id="nav">
      <img src="../assets/home.png" height="15" width="15" />
      <router-link to="/">Home </router-link> |
      <img src="../assets/guide.png" height="15" width="15" />
      <router-link to="/about">Guide </router-link> |
      <img src="../assets/person.png" height="15" width="15" />
      <router-link to="/Rank">Rank </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Topbar"
};
</script>

<style scoped>
#bar {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #204177;
}
#nav {
  padding: 15px;
  background-color: #55d9c0;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #107050;
}

#nav a.router-link-exact-active {
  color: #02231c;
}
</style>
