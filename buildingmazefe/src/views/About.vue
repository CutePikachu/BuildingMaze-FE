<template>
  <div class="about">
  	<Topbar />
    <div class="context">
      <h1>Description</h1>
      <p >This an 3D maze game. It contains two parts, searching the maze and building the maze.</p>
      
      <h1>Game Rules </h1>
      <h3>Searching The Maze</h3>
      <p>The 3D map has 10 levels in total, players can only see one each time. On each level of the map, there are serveral protals distributed, players can jump into different levels through them. The number labelled on the gate is the level which the door leading to.</p>
      <p>Players can go anywhere on the map if it is reachable. Players can't walk on walls. To moving, simply click the place you want to go to, if the place is not reachable or it is a wall, there will be no movement.</p>
      <p>Both the entrance and the destination are located on the first level and marked clearly.</p>
      <h3>Building A Maze</h3>
      <p>The entrance and destination are fixed.</p>
      <p>You can build any maze you like with given components, you don't have to test your maze. The system will automatically check whether the maze is vaild. If not, an error message will pop up.</p>
      <h1>Developers </h1>
      <p >Front end: Tina</p>
      <p >Back end: lsh</p>
    </div>
    
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
    text-align: left;
  }

  .context {
    margin-left: 80px;
    margin-right: 80px;
  }
</style>