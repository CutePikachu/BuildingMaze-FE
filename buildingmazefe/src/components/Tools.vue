<template>
  <div id="Tools">
    <div class="row" v-for="row in doors.row" :key="row">
      <div v-for="item in doors.col" :key="item">
        <div class="item">
          <mu-ripple>{{ col }}</mu-ripple>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div v-for="index in array" :key="index">
        <div class="item">
          {{ type[index] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      doors: {
        col: [0, 1, 2, 3, 4],
        row: [5, 6]
      },
      array: [0, 1, 2, 3],
      type: ["wall", "space", "entrance", "destination"]
    };
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
