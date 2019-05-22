<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" height="100" width="100">
    <HelloWorld msg="Welcome to Building Maze! Enjoy!"/>
  </div>
</template>

<script>
// @ is an alias to /src 
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

