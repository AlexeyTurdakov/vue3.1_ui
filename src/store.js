import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      counter: 11,
    };
  },
  mutations: {
    add(state, payload) {
      state.counter += payload.value.a + payload.value.b;
    },
  },

  getters: {
    counter
  }
});
