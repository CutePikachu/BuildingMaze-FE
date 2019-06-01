<template>
  <div id="choice">
    <div class="title">Mode Choice</div>
    <div class="btn exp"><router-link to="/bm">Explore</router-link></div>
    <div class="btn bud"><router-link to="/build">Build </router-link></div>
    <div class="btn rul"><router-link to="/bm">Rules </router-link></div>
    <div class="btn mor"><router-link to="/bm">More </router-link></div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "ModeChoice"
};
</script>

<style scoped>
#choice {
  background-color: #02231c;
  height: 100vh;
  color: #02231c;
}

.title {
  color: #ffffff;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  animation-name: titleAni;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes titleAni {
  0% {
    top: 0px;
    font-size: 20px;
  }
  100% {
    top: 200px;
    font-size: 40px;
  }
}

.btn {
  color: #02231c;
  padding: 1rem 2rem;
  display: inline-block;
  border-radius: 50% 50% 50% 50%;
  border: #a79c93 1px solid;
  margin-top: 400px;
  margin-right: 20px;
}

.exp {
  background-color: #c7f6ec;
}

.bud {
  background-color: #55d9c0;
}

.rul {
  background-color: #4dd8ad;
}

.mor {
  background-color: #107050;
}
#choice a {
  font-weight: bold;
  color: #02231c;
}
</style>
