import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Header from "@/components/common/Header.vue";

createApp(App).use(store).use(router).mount("#app");
// createApp(Header).use(store).use(router).mount("#header");
