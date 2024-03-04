import Vue from 'vue'
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';

import App from './App.vue'
import Home from './components/Home.vue';
import './assets/custom-fonts.css';

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.use(VueScrollTo, {
  duration: 900,
  easing: "ease",
  offset: -200
})

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
]});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
