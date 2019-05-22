<!-- <template>
  <div id = "board">
    <div class = "row"
         v-for="row in array" >
      <div v-for="item in array">
        <div class = "col"
             @click="changeColor(row, item)"
             :class = "{newCol : color[row][item]}">
             hi </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'board',
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
  .row {
  background-color: #d4ebf4;
  display: flex;
  width: 150px;
  height: 150px;
  }

  .col {
  background-color: #d4ebf4;
  display:flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  }

  .newCol {
  background-color: #e1d4f4;
  display:flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  }

</style> -->