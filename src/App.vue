<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Enter your Name</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primary" :disabled="name.length === 0">Send</button>
    </form>
    <app-people-list
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
// https://vue-ui-i-default-rtdb.europe-west1.firebasedatabase.app/
import AppPeopleList from "./AppPeopleList.vue";
import AppAlert from "./AppAlert.vue";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      people: [],
      alert: null,
    };
  },
  mounted() {
    this.loadPeople();
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

      this.people.push({
        id: firebaseData.name,
        firstName: this.name,
      });

      this.name = "";
    },
    async loadPeople() {
      try {
        const { data } = await axios.get(
          "https://vue-ui-i-default-rtdb.europe-west1.firebasedatabase.app/people.json"
        );

        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
      } catch (e) {
        this.alert = {
          type: "danger",
          title: "Error",
          text: e.message,
        };
        console.log(e);
      }
    },

    async removePerson(id) {
      await axios.delete(
        `https://vue-ui-i-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
      );
      this.people = this.people.filter((person) => person.id !== id);
    },
  },
  components: {
    AppPeopleList,
    AppAlert,
  },
};
</script>

<style>
</style>
