<template>
  <div id="Build">
    <div class="columnL">
      <EmptyBoard />
    </div>

    <div class="columnR">
      <Tools />
      <input class="btn" value="Clear" readonly="true" @click="init" />
      <input class="btn s" value="Submit" readonly="true" />
      <router-link to="/">Back </router-link>
    </div>
  </div>
</template>

<script>
import EmptyBoard from "@/components/EmptyBoard.vue";
import Tools from "@/components/Tools.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Build",
  components: {
    EmptyBoard,
    Tools
  },
  computed: {
    ...mapState(["currType, map"])
  },
  methods: {
    ...mapMutations(["INIT"]),
    init: function() {
      this.INIT();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
#Build {
  background-color: #3b4b63;
  width: 100vw;
  height: 105vh;
  color: #d5d9e0;
}

.columnL {
  float: left;
  width: 62%;
}

.columnR {
  float: right;
  width: 38%;
}

.btn {
  float: left;
  font-family: sans-serif;
  text-align: center;
  width: 120px;
  height: 50px;
  border: none;
  margin-top: 20px;
  background-color: #edb66a;
}

.s {
  float: right;
  margin-right: 180px;
}
</style>
