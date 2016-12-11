import * as types from './mutation_types'
export default {
	[types.RECEIVE_ERROR](state, {
		errcode,
		errmsg
	}) {
		console.error(errcode, errmsg);
		alert(errmsg);
	}, [types.LOGIN_SUCCESS](state, {
		result
	}) {
		localStorage.setItem('token', result.token)
		state.admin.token = result.token
	}, [types.LOGIN_CURRENT](state, {
		result
	}) {
		state.admin.username = result.username
	}, [types.LOGOUT_SUCCESS](state) {
		localStorage.removeItem('token')
		state.admin.token = null
	}
}