// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseModel from 'api/base'
BaseModel.api_prefix = (process.env.NODE_ENV == 'development' ? '/api' : '/api')
import store from 'store'
import * as types from 'store/mutation_types'
Vue.use(VueRouter)
const Index = resolve => require(['views/Index'], resolve)
const AdminLogin = resolve => require(['views/admin/Login'], resolve)
const AdminResetPassword = resolve => require(['views/admin/ResetPassword'], resolve)
const UserList = resolve => require(['views/user/List'], resolve)
const UserCreate = resolve => require(['views/user/Create'], resolve)

const routes = [{
	name: 'admin_login',
	path: '/admin/login',
	component: AdminLogin
}, {
	name: 'admin_reset_password',
	path: '/admin/reset_password',
	component: AdminResetPassword
}, {
	name: 'index',
	path: '/',
	component: Index
}, {
	name: 'user_list',
	path: '/user/list',
	component: UserList
}, {
	name: 'user_create',
	path: '/user/create',
	component: UserCreate
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
Vue.filter('map_sex', function(value) {
	switch (value) {
		case 1:
			return '男'
			break;
		case 2:
			return '女'
			break;
		default:
			return '未知'
	}
})
Vue.filter('map_register_type', function(value) {
	switch (value) {
		default: return '系统'
	}
})
const app = new Vue({
	router,
	store
}).$mount('#app')
