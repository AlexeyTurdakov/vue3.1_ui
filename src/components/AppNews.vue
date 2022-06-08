<template>
  <div class="card">
    <h2>{{ title }} id: {{ this.id }}</h2>
    <app-fo :titleFo="this.bodyNews"></app-fo>
    <button class="btn" @click="open">open</button>
    <p v-if="isOpened">{{ bodyNews }}</p>
  </div>
</template>

<script>
import AppFo from "./AppFo.vue";

export default {
  emits: {},
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    bodyNews: { type: String, required: false, default: "no news" },
    isOpen: { type: Boolean, reauired: false, default: false },
  },
  data() {
    return {
      isOpened: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        this.$emit("open-news", 42);
      }
    },
  },
  components: {
    "app-fo": AppFo,
  },
};
</script>

<style lang="scss" scoped>
</style>