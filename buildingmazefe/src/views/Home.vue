<template>
  <div class="home">
    <Topbar />
    <div class="title">
      <img alt="Vue logo" src="../assets/logo.png" height="100" width="100" />
    <Welcome msg="Welcome to Building Maze! Enjoy!" />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Topbar from "@/components/Topbar.vue";
export default {
  name: "home",
  components: {
    Welcome,
    Topbar
  }
};
</script>

<style>
.home {
  width: 100%;
  height: 100vh;
  background-color: #c7f6ec;
}

.title {
  margin-top: 10px;
}
</style>
