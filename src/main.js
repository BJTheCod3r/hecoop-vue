import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueToast from "vue-toast-notification";
import titleMixin from "./mixins/titleMixin";
import axios from "./axios";
import "./filters.js";
import acl from "./acl";
import store from "./store";


Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(FontAwesomeIcon);
Vue.mixin(titleMixin);
Vue.use(VueToast, {
  position: "top-right",
});

// Import stylesheet
import "@fortawesome/fontawesome-free/css/all.min.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "./assets/scss/app.scss";

const accessToken = localStorage.getItem("accessToken");

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + accessToken;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  acl,
  render: (h) => h(App),
}).$mount("#app");
