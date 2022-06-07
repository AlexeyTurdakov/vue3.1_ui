<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <h4>id: {{ id }}</h4>
    <button class="btn" @click="open">
      {{ isOpen ? "Close news" : "Open news" }}
    </button>
    <p v-if="isOpen">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quae,
      tempora suscipit molestiae commodi expedita delectus eos! Cupiditate optio
      dicta, qui facilis, pariatur accusamus quia sed voluptate, similique nemo
      iusto!
      <br />
      <button v-if="wasread" class="btn primary" @click="readNews">
        Read News
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    id: {
      type: Number,
      required: false,
      default: 42,
      validator(val) {
        if (val >= 3) {
          return 22;
        }
      },
    },
    flagOpenNews: {
      type: Boolean,
      required: true,
    },
    wasRead: {
      type: Boolean,
      required: false,
    },
  },
  emits: {
    "open-news": null,
    "read-news": null,
  },

  data() {
    return {
      isOpen: this.flagOpenNews,
      wasread: this.wasRead,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$emit("open-news", true);
      }
    },
    readNews() {
      this.isOpen = !this.isOpen;
      this.$emit("read-news", this.isOpen);
      this.wasread = false;
    },
  },
};
</script>