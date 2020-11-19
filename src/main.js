import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from "./store"
import Login from "@/components/Login"
import Feed from "@/components/Feed"
import Browse from "@/components/Browse"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/", component: Feed},
  {path: "/login", component: Login},
  {path: "/browse", component: Browse}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')
