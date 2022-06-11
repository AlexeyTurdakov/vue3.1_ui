<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: { action: null },
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["danger", "primary", ""].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>