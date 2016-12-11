import * as types from './mutation_types'
import AdminModel from 'api/admin'
export function admin_login({
	commit
}, admin) {
	return admin.login().then(json => {
		if (json.errcode) {
			commit(types.RECEIVE_ERROR, json)
		} else {
			commit(types.LOGIN_SUCCESS, json)
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
				errcode: json.errcode,
				errmsg: json.errmsg || '你还未登录'
			})
		} else {
			commit(types.LOGIN_CURRENT, json)
		}
		return json
	})
}

export function admin_logout({
	commit
}, admin) {
	return admin.logout().then(json => {
		if (json.errcode) {
			commit(types.RECEIVE_ERROR, json)
		} else {
			commit(types.LOGOUT_SUCCESS)
		}
		return json
	})
}