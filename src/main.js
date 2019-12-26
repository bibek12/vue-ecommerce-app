

import Vue from "vue";
import App from "./App.vue";
import router from "./router";



import "bootstrap"; 
import jQuery from "jquery";
import "popper.js";
window.$ = window.jQuery = jQuery;

import "./assets/app.scss";


Vue.component('NavBar',require('./components/NavBar').default);
Vue.component('Banner',require('./components/Banner').default);

Vue.component('Products',require('./sections/Products').default);

Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
