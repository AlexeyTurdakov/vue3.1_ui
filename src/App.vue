<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Actual news {{ now }}</h2>
      Counter Open News: {{ count }} <br />
      Counter Read News: {{ readNewsCount }}
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :flagOpenNews="item.flagOpenNews"
      :was-read="item.wasRead"
      @open-news="counterFunction"
      @read-news="readNewsFunction"
    ></app-news>
    <the-footer></the-footer>
  </div>
</template>

<script>
import AppNews from "./components/AppNews.vue";

export default {
  data() {
    return {
      now: new Date().toLocaleString(),
      count: 0,
      readNewsCount: 0,
      news: [
        {
          title: "news 1",
          id: 1,
          flagOpenNews: false,
          wasRead: true,
        },
        {
          title: "news 2",
          id: 2,
          flagOpenNews: false,
          wasRead: true,
        },
        {
          title: "news 3",
          id: 3,
          flagOpenNews: false,
          wasRead: true,
        },
      ],
    };
  },

  methods: {
    counterFunction(dataBoolean) {
      if (dataBoolean) {
        return this.count++;
      }
    },

    readNewsFunction(bool) {
      if (!bool) {
        this.readNewsCount++;
      }
    },
  },

  components: {
    "app-news": AppNews,
  },
};
</script>


