<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }} {{ doubleCounter }}</h2>
      <button class="btn" @click="add">btn++</button>
      <button class="btn" @click="add10">btnAsync10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  computed: { ...mapGetters(["counter", "doubleCounter"]) },
  methods: {
    add() {
      this.$store.commit({
        type: "add",
        value: { a: 5, b: 10 },
      });
    },
    add10() {
      this.$store.dispatch("addincassync");
    },
  },
};
</script>
