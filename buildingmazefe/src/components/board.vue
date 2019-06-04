<template>
  <div id="Board">
    <div class="succ" :style="win">You win!</div>
    <div class="row" v-for="row in array" :key="row">
      <div v-for="item in array" :key="item">
        <div
          class="item"
          :class="type[row][item]"
          elevation="20"
          @click="move(row, item)"
          v-if="
            type[row][item] === 'w' ||
              type[row][item] === 's' ||
              type[row][item] === 'p'
          "
        >
          <mu-ripple />
        </div>

        <div
          class="item num"
          @click="changeLevel(type[row][item], row, item)"
          v-else-if="type[row][item] <= '9' && type[row][item] >= '0'"
        >
          <mu-ripple>
            {{ type[row][item] }}
          </mu-ripple>
        </div>

        <div
          class="item d"
          elevation="20"
          @click="succ(row, item)"
          v-if="type[row][item] === 'd'"
        >
          <img src="../assets/dest.png" />
          <mu-ripple />
        </div>

        <div class="item p" elevation="20" v-if="type[row][item] === 'e'">
          <mu-ripple />
        </div>
      </div>
      <h3 v-if="row === 1" class="lev">
        You are on level {{ level }} <br />
        <router-link to="/">Back </router-link>
      </h3>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import findPath from "../utils/bfs.js";

export default {
  name: "Board",
  props: ["code"],
  data() {
    return {
      level: -1,
      player: {
        x: -1,
        y: -1
      },
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      map: [
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], []]
      ],
      type: [[], [], [], [], [], [], [], [], [], []],
      win: "display: none"
    };
  },
  created: function() {
    for (let lev = 0; lev < 10; lev++) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let index = -1;

          if (i == 0) index = j;
          else index = 10 * i + j;

          if (lev != 0) index += 100 * lev;
          this.map[lev][i].push(this.code[index]);
        }
      }
    }
    this.level = 0;
    this.type = this.map[0];
    this.player.x = 0;
    this.player.y = 0;
  },
  methods: {
    changeLevel: function(lev, x, y) {
      var reach = findPath(this.type, this.player.x, this.player.y, x, y);
      if (reach == false) return;
      if (
        this.type[this.player.x][this.player.y] == "p" ||
        this.type[this.player.x][this.player.y] == "e"
      )
        Vue.set(this.type[this.player.x], this.player.y, "s");
      this.level = lev;
      this.type = this.map[lev];
      this.player.x = x;
      this.player.y = y;
    },
    move: function(x, y) {
      if (this.type[x][y] == "w") return;
      var reach = findPath(this.type, this.player.x, this.player.y, x, y);
      if (reach == false) return;
      if (
        this.type[this.player.x][this.player.y] == "p" ||
        this.type[this.player.x][this.player.y] == "e"
      )
        Vue.set(this.type[this.player.x], this.player.y, "s");
      Vue.set(this.type[x], y, "p");
      this.player.x = x;
      this.player.y = y;
    },
    succ: function(x, y) {
      var reach = findPath(this.type, this.player.x, this.player.y, x, y);
      if (reach) this.win = "";
    }
  }
};
</script>

<style scoped>
#Board {
  background-color: #e0dad5;
  align-items: center;
  padding-top: 26px;
  width: 720px;
  height: 100%;
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

.e {
  background-color: #c05640;
}

.d {
  background-color: #edd170;
}

.p {
  background-color: #e0dad5;
  border-radius: 50% 50% 50% 50%;
  border: #a79c93 1px solid;
}
.item {
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

.succ {
  z-index: 1;
  align-items: center;
  text-align: center;
  font-size: 40px;
}
</style>
