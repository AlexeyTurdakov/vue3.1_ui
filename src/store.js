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

  actions: {
    addincassync(context) {
      setTimeout(() => {
        context.commit("add", { value: { a: 100, b: 100 } });
      }, 1000);
    }
  },

  getters: {
    counter(state) {
      return state.counter;
    },

    doubleCounter(state, getters) {
      return getters.counter * 2;
    },
  },
});
