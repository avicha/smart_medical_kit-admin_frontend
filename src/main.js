// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index'

Vue.use(VueRouter)
const routes = [{
	path: '/',
	component: Index
}, {
	path: '*',
	component: Index
}]
const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active'
})
const app = new Vue({
	router
}).$mount('#app')
