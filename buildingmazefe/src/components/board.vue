<template>
  <div id = "board">
    <div class="row"
         v-for="row in array" 
         :key=row>
      <div v-for="item in array"
           :key=item>
        <div class = "item"
             @click="changeColor(row, item)"
             :class = "{newCol : color[row][item]}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Board',
    data() {
      return {
        array : [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
        color : [[], [], [], [], [], [], [], [], [], []]
      }
      
    },
    created: function() {
      for (var i = 0; i < 10; i++) {
        Vue.set(this.color, i, [true, true, true, true, true, true, true, true, true, true]);
      }
    },
    methods: {
      changeColor : function(row, item) {
        Vue.set(this.color[row], item, !this.color[row][item]);
      }
    }
  }
  
</script>

<style scoped>
  #board {
    width: 100%;
    height: 100%;
    background-color: #7B8937;
  }

  .row {
  background-color: #d4ebf4;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  }

  .item {
  background-color: #d4ebf4;
  width: 150px;
  height: 150px;
  }

  .newCol {
  background-color: #e1d4f4;
  }

</style>