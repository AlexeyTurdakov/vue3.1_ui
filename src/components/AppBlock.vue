<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default">default</slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style lang="css" scoped>
div {
  color: red;
}
</style>