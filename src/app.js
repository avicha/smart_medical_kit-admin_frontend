// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import * as types from './store/mutation_types'
Vue.use(VueRouter)
const Index = resolve => require(['./views/Index'], resolve)
const AdminLogin = resolve => require(['./views/admin/Login'], resolve)
const routes = [{
	name: 'admin_login',
	path: '/admin/login',
	component: AdminLogin
}, {
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
router.beforeEach((to, from, next) => {
	if (to.name != 'admin_login') {
		let token = store.state.admin.token
		store.dispatch('admin_current', token).then(json => {
			if (json.errcode || !json.result) {
				next({
					name: 'admin_login',
					query: {
						redirect_uri: to.fullPath
					}
				})
			} else {
				next()
			}
		})
	} else {
		next()
	}
})
const app = new Vue({
	router,
	store
}).$mount('#app')
