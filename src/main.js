import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld"

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: "/helloworld", component: HelloWorld}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
