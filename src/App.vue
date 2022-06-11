<template>
  <the-header
    :openRateCount="this.openRate"
    :dataEmit="this.dataFromEmitAppNews"
    :readRate="this.readRate"
  ></the-header>

  <app-button
    :color="active === 'one' ? 'primary' : ''"
    @action="active = 'one'"
    >one</app-button
  >
  <app-button
    :color="active === 'two' ? 'primary' : ''"
    @action="active = 'two'"
    >two</app-button
  >

  <app-text1></app-text1>
  <app-text2></app-text2>

  <app-block>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem
      vel voluptatum quae commodi provident ad consectetur inventore dolorum!
      Vero nihil quos unde mollitia quaerat enim veniam nisi harum fugit.
    </p>
    <template #header>
      <h3>title</h3>
    </template>
    <template v-slot:footer>
      <h3>footer</h3>
    </template>
  </app-block>
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
import AppBlock from "./components/AppBlock.vue";
// import AppList from "./components/AppList.vue";
import AppButton from "./components/AppButton.vue";
import AppText1 from "./components/AppText1.vue";
import AppText2 from "./components/AppText2.vue";

export default {
  data() {
    return {
      openRate: 0,
      readRate: 0,
      dataFromEmitAppNews: 0,
      active: "one",
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
    "app-block": AppBlock,
    // "app-list": AppList,
    "app-button": AppButton,
    "app-text1": AppText1,
    "app-text2": AppText2,
  },
  provide() {
    return {
      title: "All news",
      news: this.news,
    };
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

