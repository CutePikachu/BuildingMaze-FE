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
