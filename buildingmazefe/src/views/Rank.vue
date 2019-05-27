<template>
  <div class="Rank">
  	<Topbar />
  	<canvas></canvas>
  </div>
</template>

<script>

import Topbar from '@/components/Topbar.vue'

export default {
	name: 'Rank',
	components: {
		Topbar
	}
}
</script>

<style>
  .about {
    background-color: #C7F6EC;
    width: 100%;
    height: 100%;
    text-align: left;
  }
</style>