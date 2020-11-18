import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from "@/components/HelloWorld"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/helloworld", component: HelloWorld}
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
  //state: {someVariable = ''},
  //mutation: {function: function(state) {state.someVariable++}},
  //actions: {increment (context) { context.commit('functionFromMutation')} }
  //getters: {getSomeVariable: function(state) {return state.someVariable}},
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
