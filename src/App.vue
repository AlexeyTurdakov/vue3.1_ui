<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="text"
      title="title"
      type="danger"
      :closable="true"
      @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="alert = true">Show component</button>
    </div>

    <div class="card" v-color:[type].blink="myColor">
      <div class="form-control">
        <label for="inp">Active default</label>
        <input type="text" id="inp" v-focus />
      </div>
      {{ type }}
    </div>

    <button class="btn danger" @click="myColor = 'red'">Create red</button>
    <button
      class="btn danger"
      @click="type = type === 'color' ? 'backgroundColor' : 'color'"
    >
      change
    </button>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
  data() {
    return {
      alert: false,
      myColor: "blue",
      type: "color",
    };
  },
  components: {
    AppAlert,
  },
};
</script>

<style>
</style>
