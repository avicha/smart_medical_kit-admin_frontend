import * as types from '../mutation_types'
import UserModel from 'api/user'
const state = {
	list: []
}
const getters = {}
const actions = {
	user_list({
		commit
	}, filter) {
		return UserModel.list(filter).then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, {
					error: json.errmsg
				})
			} else {
				commit(types.RECEIVE_USER_LIST, {
					user_list: json.result
				})
			}
			return json
		})
	},
	user_create({
		commit
	}, user) {
		let user_model = new UserModel(user)
		return user_model.create().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, {
					error: json.errmsg
				})
			} else {

			}
			return json
		})
	}
}
const mutations = {
	[types.RECEIVE_USER_LIST](state, {
		user_list
	}) {
		state.list = user_list
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}
