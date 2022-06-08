<template>
  <p>{{ this.titleFo }}</p>
</template>

<script>
export default {
  props: {
    titleFo: {
      type: String,
      required: true,
      default: "no NEws",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>