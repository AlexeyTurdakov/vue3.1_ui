<template>
  <div class="card">
    <h2>{{ title }} id: {{ id }}</h2>
    <app-fo :titleFo="bodyNews"></app-fo>
    <app-button @action="open">{{ isOpened ? "close" : "open" }}</app-button>
    <div v-if="isOpened">
      <p>{{ bodyNews }}</p>
      <app-button :color="'primary'" @action="closeNews" v-show="visible"
        >Read News
      </app-button>
      <app-button :color="'danger'" @action="closeNews" v-show="visible"
        >unmark
      </app-button>
    </div>
  </div>
</template>

<script>
import AppFo from "./AppFo.vue";
import AppButton from "./AppButton.vue";

export default {
  emits: {
    "open-news"(num) {
      if (num) {
        return true;
      }
      console.log("no data false");
    },
    "read-news": null,
  },
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    bodyNews: { type: String, required: false, default: "no news" },
    isOpen: { type: Boolean, reauired: false, default: false },
  },
  data() {
    return {
      isOpened: this.isOpen,
      visible: true,
    };
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        this.$emit("open-news", 42);
      }
    },
    closeNews() {
      this.isOpened = !this.isOpened;
      this.$emit("read-news");
      this.visible = !this.visible;
    },
  },
  components: {
    "app-fo": AppFo,
    "app-button": AppButton,
  },
};
</script>

<style lang="scss" scoped>
</style>