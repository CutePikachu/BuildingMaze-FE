<template>
  <div id="new">
  	<Board />
  </div>
</template>

<script>
  import Board from '@/components/Board.vue'
  export default {
  	name: 'NewGame',
  	components: {
  		Board
  	}
  }
</script>

<style scoped>
  #new {
  	width: 100%;
  	background-color: #000000;
  }
</style>