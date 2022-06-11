<template>
  <the-header
    :openRateCount="this.openRate"
    :dataEmit="this.dataFromEmitAppNews"
    :readRate="this.readRate"
  ></the-header>
  <!-- <the-body></the-body> -->
  <!-- <the-footer></the-footer> -->
  <app-news
    v-for="item in news"
    :title="item.title"
    :key="item.id"
    :bodyNews="item.bodyNews"
    :isOpen="item.isOpen"
    :id="item.id"
    @open-news="openNews"
    @read-news="readNews"
  ></app-news>
</template>

<script>
import AppNews from "./components/AppNews.vue";

export default {
  data() {
    return {
      openRate: 0,
      readRate: 0,
      dataFromEmitAppNews: 0,
      news: [
        {
          id: 1,
          title: "news1",
          bodyNews: "egh587ghe587ghe57ghe5ghegheg",
          isOpen: false,
        },
        {
          id: 2,
          title: "news2",
          bodyNews: "egh587ghe587ghe57ghe5ghegheg",
          isOpen: false,
        },
        {
          id: 3,
          title: "news3",
          bodyNews: "egh587ghe587ghe57ghe5ghegheg",
          isOpen: false,
        },
      ],
    };
  },
  components: {
    "app-news": AppNews,
  },
  methods: {
    openNews(data) {
      this.openRate++;
      this.dataFromEmitAppNews = data;
    },
    readNews() {
      this.readRate++
    }
  }, 
};
</script>

