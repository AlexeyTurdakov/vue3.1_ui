<template>
  <div v-if="people.length !== 0">
    <div class="card line" v-for="person in people" :key="person.id">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">
        Delete
      </button>
    </div>
  </div>
  <div v-else class="card center">
    <button class="btn" @click="$emit('load')">Download people list</button>
  </div>
</template>

<script>
export default {
  emits: ["load", "remove"],
  props: ["people"],
};
</script>

<style scoped>
.line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>