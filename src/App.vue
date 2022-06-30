<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Enter your Name</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primary" :disabled="name.length === 0">Send</button>
    </form>
  </div>

  
</template>

<script>
// https://vue-ui-i-default-rtdb.europe-west1.firebasedatabase.app/
import AppPeopleListVue from './AppPeopleList.vue';

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async createPerson() {
      const response = await fetch(
        "https://vue-ui-i-default-rtdb.europe-west1.firebasedatabase.app/people.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        }
      );

      const firebaseData = await response.json();

      console.log(firebaseData);

      this.name = "";
    },
  },
};
</script>

<style>
</style>
