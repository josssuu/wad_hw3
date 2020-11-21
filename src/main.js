import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import LoginForm from "@/components/LoginForm";
import Posts from "@/components/Posts";
import Profiles from "@/components/Profiles";

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: {name: 'LoginForm'}},
  {path: '/login', name: 'LoginForm', component: LoginForm},
  {path: '/posts', name: 'Posts', component: Posts},
  {path: '/profiles', name: 'Profiles', component: Profiles},
]

const router = new VueRouter({routes})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
