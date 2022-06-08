import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheBody from "./components/TheBody.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-body", TheBody);
app.component("the-footer", TheFooter);

app.mount("#app");
