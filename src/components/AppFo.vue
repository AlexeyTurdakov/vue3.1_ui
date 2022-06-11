<template>
  <h2>{{ title }}</h2>
  <ul v-for="item in news" :key="item.id">
    <li>
      <a href="#">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {},
  inject: ["title", "news"],
};
</script>

<style>
</style>