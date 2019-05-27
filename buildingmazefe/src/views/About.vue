<template>
  <div class="about">
  	<Topbar />
    <h1 align="left">Description</h1><br>
    <h1 align="left">Game Rules </h1><br>
    <h1 align="left">Developers </h1>
  </div>
</template>

<script>

import Topbar from '@/components/Topbar.vue'

export default {
	name: 'About',
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
  }
</style>