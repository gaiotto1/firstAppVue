import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = {template: '<h2>Página de contato</h2>'}
const SemPagina = {template: '<h2>Página não encontrada!</h2>'}

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
