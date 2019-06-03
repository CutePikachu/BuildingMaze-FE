import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currType: "",
    currLev: -1,
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
    board:[[], [], [], [], [], [], [], [], [], []]
  },
  mutations: {
    INIT: (state) => {
      for (let lev = 0; lev < 10; lev++) {
        for (let i = 0; i < 10; i++) {
          Vue.set(state.map[lev], i,["s","s", "s", "s", "s","s","s", "s", "s", "w"]);
        }
        Vue.set(state.board, lev, ["s","s", "s", "s", "s","s","s", "s", "s", "w"]);
      }
      state.currLev = 0;
      state.currType = "s" ;
    },
    CHANGETYPE: (state, x, y) => {
      Vue.set(state.map[state.currLev][x], y, state.currType);
      Vue.set(state.board[x], y, state.currType);
      // console.log(state.map[state.currLev][x][y])
      // console.log(state.currType)
    },
    CLEAR: state => {},
    UPDATETYPE: (state, type) => {
      state.currType = type;
    },
    UPDATELEV: (state, lev) => {
      state.currLev = lev;
      state.board = state.map[lev];
      console.log(lev)
      console.log(state.board[0][0])
    }
  },
  actions: {}
});

export default store;
