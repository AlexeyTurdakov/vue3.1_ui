<template>
  <div class="card alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">
      Close
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    text: {
      type: String,
    },
    title: {
      type: String,
    },
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "danger", "warning"].includes(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>