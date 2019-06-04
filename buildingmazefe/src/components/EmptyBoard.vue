<template>
  <div id="EmptyBoard">
    <div class="row" v-for="row in array" :key="row">
      <div v-for="item in array" :key="item">
        <div
          class="item num"
          @click="changeTypes(row, item)"
          v-if="board[row][item] <= 9 && board[row][item] >= 0"
        >
          <mu-ripple> {{ board[row][item] }} </mu-ripple>
        </div>
        <div
          class="item"
          @click="changeTypes(row, item)"
          :class="[{ newCol: color[row][item] }, board[row][item] ]"
          v-else
        >
          <mu-ripple />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "EmptyBoard",
  data() {
    return {
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      color: [[], [], [], [], [], [], [], [], [], []],
      type: [[], [], [], [], [], [], [], [], [], []]
    };
  },
  computed: {
    ...mapState(["currLev", "currType", "map", "board"])
  },
  created: function() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if ((i + j) % 2 == 0) Vue.set(this.color[i], j, true);
        else Vue.set(this.color[i], j, false);
      }
    }
    // console.log(this.map[0][0])
  },

  methods: {
    ...mapMutations(["CHANGETYPE"]),
    changeTypes: function(x, y) {
      this.CHANGETYPE(x, y);
      Vue.set(this.board[x], y, this.currType);
    }
  }
};
</script>

<style scoped>
#EmptyBoard {
  background-color: #3b4b63;
  align-items: center;
  padding-top: 26px;
  width: 100%;
  height: 100%;
}
.row {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 720px;
  height: 72px;
}

.item {
  border: none;
  background-color: #f9f5ea;
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.newCol {
  background-color: #dbd6cb;
}

.w {
  background-color: #3d1d03;
}

.num {
  background-color: #ccffcc;
  font-size: 30px;
  color: #4e06ad;
}

.e {
  background-color: #c05640;
}

.d {
  background-color: #edd170;
}
</style>
