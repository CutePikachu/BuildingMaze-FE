<template>
  <div id="Tools">
    <h3 align="left">Change level</h3>
    <div class="row" v-for="(row, index) of doors.row" :key="row">
      <div v-for="item in doors.col" :key="item">
        <div class="item" @click="updateLev(index * 5 + item)">
          <mu-ripple>{{ index * 5 + item }}</mu-ripple>
        </div>
      </div>
    </div>
    <h3 align="left">Choose Portal</h3>
    <div class="row">
      <div v-for="(item, index) in levell" :key="item">
        <div class="item" @click="updateType(item)">
          <mu-ripple>{{ index }}</mu-ripple>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, index) in levelh" :key="item">
        <div class="item" @click="updateType(item)">
          <mu-ripple>{{ index + 5 }}</mu-ripple>
        </div>
      </div>
    </div>
    <h3 align="left">Choose Type</h3>
    <div class="row">
      <div v-for="(it, index) in type" :key="it" @click="updateType(it)">
        <div class="item">
          {{ it }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
      levelh: ["5", "6", "7", "8", "9"]
    };
  },
  computed: {
    ...mapState(["currLev", "currType", "map"])
  },
  methods: {
    ...mapMutations(['UPDATELEV', 'UPDATETYPE']),
    updateType: function(type) {
      var typ = type.charAt(0);
      this.UPDATETYPE(typ);
      console.log(this.currType)
    },
    updateLev: function(lev) {
      this.UPDATELEV(lev);
    }
  }
};
</script>

<style>
#Tools {
  background-color: #e0dad5;
  align-items: center;
  padding-top: 26px;
  width: 720px;
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
}
</style>
