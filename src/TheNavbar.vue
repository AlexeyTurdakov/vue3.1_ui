<template>
  <header class="navbar">
    <h3>{{ $store.getters.counter }}</h3>
    <button class="btn" @click="add">add</button>
  </header>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit({
        type: "add",
        value: { a: 1, b: 1 },
      });
    },
  },
};
</script>
