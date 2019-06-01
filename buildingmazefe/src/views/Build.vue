<template>
  <div id="Build">
    <div class="columnL">
      <EmptyBoard />
    </div>

    <div class="columnR">
      <Tools />
      <input class="btn" placeholder="Clear" readonly="true" />
      <input class="btn" placeholder="Submit" readonly="true" />
    </div>
  </div>
</template>

<script>
import EmptyBoard from "@/components/EmptyBoard.vue";
import Tools from "@/components/Tools.vue";

export default {
  name: "Build",
  components: {
    EmptyBoard,
    Tools
  }
};
</script>

<style scoped>
#Build {
  background-color: #e0dad5;
  width: 100vw;
  height: 100vh;
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
  text-align: middle;
  width: 120px;
  margin-right: 20px;
  height: 50px;
  padding: 5px;
  border: none;
  margin-top: 20px;

  background-color: #edb66a;
}
</style>
