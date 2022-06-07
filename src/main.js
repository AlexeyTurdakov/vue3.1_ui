import { createApp } from "vue";
import App from "./App.vue";
import TheFooter from "./components/TheFooter.vue";
import "./theme.css";

const app = createApp(App);

app.component("the-footer", TheFooter);
app.mount("#app");
