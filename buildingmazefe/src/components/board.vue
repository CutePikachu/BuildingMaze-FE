<template>
  <div id = "Board">
    <div class="row"
         v-for="row in array" 
         :key=row>
      <div v-for="item in array"
           :key=item>

        <div class = "item w"
             @click="changeColor(row, item)"
             elevation="20"
             v-if="type[row][item] === 'w'">
          <mu-ripple />
        </div>

        <div class = "item s"
             @click="changeColor(row, item)"
             v-else-if="type[row][item] === 's'">
          <mu-ripple />  
        </div>

        <div class = "item num"
             @click="changeColor(row, item)"
             v-else-if="type[row][item] <= '9' && type[row][item] >= '0'">
           <mu-ripple >
             {{ type[row][item] }}
           </mu-ripple>
        </div>

        <div class = "item newCol"
             @click="changeColor(row, item)"
             v-else>
          <mu-ripple />   
        </div>
      </div>
      <h3 v-if="row===1" class="lev">You are on level  {{ level }}</h3>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Board',
    props: ["code", "level"],
    data() {
      return {
        array : [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
        color : [[], [], [], [], [], [], [], [], [], []],
        type:   [[], [], [], [], [], [], [], [], [], []],
      }
      
    },
    created: function() {
      for (let i = 0; i < 10; i++) {
        Vue.set(this.color, i, [true, true, true, false, true, true, true, true, true, true]);
        for (let j = 0; j < 10; j++) {
          let index = -1;
          if (i == 0) index = j;
          else index = 10 * i + j;
          this.type[i].push(this.code[index]);
        }
      }
    },
    methods: {
      changeColor : function(row, item) {
        Vue.set(this.color[row], item, !this.color[row][item]);
      }
    },
    computed: {

    }
  }
  
</script>

<style scoped>
  #Board {
    background-color: #e0dad5;
    align-items: center;
    padding-top: 26px; 
    width: 720px;
    height: 720px;
  }
  .row {
    display: flex;
    flex-direction: column;
    margin-left: 120px;
    width: 720px;
    height: 72px;
  }

  .w {
    background-color: #3d1d03;
  }

  .s {
    border: none;
    background-color: #e0dad5;
  }

  .num {
    background-color: #ddcdf2;
    font-size: 30px;
    color: #4e06ad;
  }

  .item{
    position: relative;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lev {
    padding: 40px;
  }
</style>