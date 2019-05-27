<template>
  <div id="newGame">
  	<Board code="wwwwwwwwwwwwwwwsssswwswswswwswssswwsssswwwwwwsssswwwwsssswwsswwwwsssswsswwwsssswwswswsssss0swwwwwws0" level="1" />
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
