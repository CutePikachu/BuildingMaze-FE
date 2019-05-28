<template>
  <div id="newGame">
  	<Board code="wwwwwwwwwwwwwwwssssw5swswswwswssswwsssswwwwwsssss0wwwsssswwsswwwws3sswsswwwsssswwswswsssssdswwwwwwse" level="1" />
  </div>

</template>

<script>
  import Board from '@/components/board.vue'
  export default {
  	name: 'NewGame',
  	components: {
  		Board
  	}
  }
</script>

<style scoped>
  #newGame {
    background-color: #e0dad5;
    width: 100vw;
    height: 100vh;
  }

</style>