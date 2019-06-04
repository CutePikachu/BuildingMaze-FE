<template>
  <div id="Tools">
    <h3 align="left">Change level</h3>
    <div class="row" v-for="(row, index) of doors.row" :key="row">
      <div v-for="item in doors.col" :key="item">
        <div
          class="item"
          @click="updateLev(index * 5 + item)"
          :class="{ chosen: choseLev[index * 5 + item] }"
        >
          {{ index * 5 + item }}
        </div>
      </div>
    </div>
    <h3 align="left">Choose Portal</h3>
    <div class="row">
      <div v-for="(item, index) in levell" :key="item">
        <div
          class="item"
          @click="updateType(item, index)"
          :class="{ chosen: chosePort[index] }"
        >
          {{ index }}
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in levelh" :key="item">
        <div
          class="item"
          @click="updateType(item, index + 5)"
          :class="{ chosen: chosePort[index + 5] }"
        >
          {{ index + 5 }}
        </div>
      </div>
    </div>
    <h3 align="left">Choose Type</h3>
    <div class="row">
      <div v-for="(it, index) in type" :key="it" @click="updateType(it, index)">
        <div class="item" :class="{ chosen: choseType[index] }">
          {{ it }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Vue from "vue";

export default {
  name: "Tools",
  data() {
    return {
      doors: {
        col: [0, 1, 2, 3, 4],
        row: [5, 6]
      },
      type: ["wall", "space", "entrance", "destination"],
      levell: ["0", "1", "2", "3", "4"],
      levelh: ["5", "6", "7", "8", "9"],
      choseType: [false, false, false, false],
      choseLev: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      chosePort: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  computed: {
    ...mapState(["currLev", "currType", "map"])
  },
  methods: {
    ...mapMutations(["UPDATELEV", "UPDATETYPE"]),
    updateType: function(type, index) {
      var typ = type.charAt(0);
      this.UPDATETYPE(typ);
      for (let i = 0; i < 4; i++) Vue.set(this.choseType, i, false);
      for (let i = 0; i < 10; i++) Vue.set(this.chosePort, i, false);
      if (typ >= "0" && typ <= "9") Vue.set(this.chosePort, index, true);
      else Vue.set(this.choseType, index, true);
    },
    updateLev: function(lev) {
      this.UPDATELEV(lev);
      for (let i = 0; i < 10; i++) Vue.set(this.choseLev, i, false);
      Vue.set(this.choseLev, lev, true);
    }
  }
};
</script>

<style>
#Tools {
  background-color: #3b4b63;
  align-items: center;
  padding-top: 26px;
  width: 100%;
  height: 100%;
}

.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
  width: 360px;
  height: 72px;
}

.item {
  border: none;
  background-color: #b9e5f3;
  position: relative;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3b4b63;
}

.chosen {
  background-color: #4da6ff;
}
</style>
