import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from "./store"
import Login from "@/components/Login"
import Feed from "@/components/Feed"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/login", component: Login},
  {path: "/feed", component: Feed}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
