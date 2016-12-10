import * as types from './mutation_types'
export default {
	[types.RECEIVE_ERROR](state, errcode, errmsg) {
		console.error(errcode, errmsg);
		alert(errmsg);
	}, [types.LOGIN_SUCCESS](state, {
		token
	}) {
		localStorage.setItem('token', token)
		state.admin.token = token
	}, [types.LOGIN_CURRENT](state, {
		username
	}) {
		state.admin.username = username
	}, [types.LOGOUT_SUCCESS](state) {
		localStorage.removeItem('token')
		state.admin.token = null
	}
}