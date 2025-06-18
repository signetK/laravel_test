import "./bootstrap";
import router from "./router";
import "../css/app.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");