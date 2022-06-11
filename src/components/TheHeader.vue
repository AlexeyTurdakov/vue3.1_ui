<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <h2>
      OpenNewsCount: {{ openRateCount }}, data: {{ dataEmit }}, readRate:
      {{ readRate }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "The-header from data",
    };
  },
  props: {
    openRateCount: {
      type: Number,
      required: false,
      default: 0,
    },
    dataEmit: {
      type: Number,
      required: false,
      default: 100,
    },
    readRate: {
      type: Number,
      required: false,
      default: 100,
    },
  },
};
</script>

<style>
</style>