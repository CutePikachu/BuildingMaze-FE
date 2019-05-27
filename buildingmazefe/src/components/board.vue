<template>
  <div id = "Board">
    <div class="row"
         v-for="row in array" 
         :key=row>
      <div v-for="item in array"
           :key=item>
        <mu-ripple class = "item w"
             @click="changeColor(row, item)"
             v-if="type[row][item] === 'w'">
        </mu-ripple>
        <mu-ripple class = "item s"
             @click="changeColor(row, item)"
             v-else-if="type[row][item] === 's'">
        </mu-ripple>
        <mu-ripple class = "item newCol"
             @click="changeColor(row, item)"
             v-else>
        </mu-ripple>
      </div>
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
        curLevel: this.level,
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

  .row {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 130px;
  }

  .w {
    
    background-color: #9b8b81;
  }

  .s {
    border: none;
    background-color: #cbf4dd;
  }
  .item{
    position: relative;
    width: 137px;
    height: 137px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>