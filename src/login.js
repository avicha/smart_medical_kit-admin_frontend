import Vue from 'vue'
import Login from './views/Login'

let app = new Vue({
	el: '#root',
	components: {
		Login
	},
	template: '<login />'
})
