import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

export default (el) => {
    createApp(App).mount(el);
}
