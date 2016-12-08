import * as types from './mutation_types'
import AdminModel from '../api/admin'
export function admin_login({
	commit
}, admin) {
	return admin.login().then(json => {
		if (json.errcode) {
			commit(types.RECEIVE_ERROR, {
				error: json.errmsg
			})
		} else {
			commit(types.LOGIN_SUCCESS, {
				token: json.result.token
			})
		}
		return json
	})
}
export function admin_current({
	commit
}, token) {
	return AdminModel.current(token).then(json => {
		if (json.errcode || !json.result) {
			commit(types.RECEIVE_ERROR, {
				error: json.errmsg || '你还未登录'
			})
		} else {
			commit(types.LOGIN_CURRENT, json.result)
		}
		return json
	})
}

export function admin_logout({
	commit
}, admin) {
	return admin.logout().then(json => {
		if (json.errcode) {
			commit(types.RECEIVE_ERROR, {
				error: json.errmsg
			})
		} else {
			commit(types.LOGOUT_SUCCESS)
		}
		return json
	})
}
