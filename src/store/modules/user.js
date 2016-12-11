import * as types from '../mutation_types'
import UserModel from 'api/user'
const state = {
	list: []
}
const getters = {}
const actions = {
	user_list({
		commit
	}, {
		filter,
		token
	}) {
		return UserModel.list({
			token,
			...filter
		}).then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.RECEIVE_USER_LIST, json)
			}
			return json
		})
	},
	user_create({
		commit
	}, {
		user,
		token
	}) {
		let user_model = new UserModel({
			token,
			...user
		})
		return user_model.create().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {

			}
			return json
		})
	},
	user_delete({
		commit
	}, {
		user,
		token
	}) {
		let user_model = new UserModel({
			token,
			...user
		})
		return user_model.delete().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.USER_DELETE_SUCCESS, user)
			}
			return json
		})
	}
}
const mutations = {
	[types.RECEIVE_USER_LIST](state, {
		result
	}) {
		state.list = result
	},
	[types.USER_DELETE_SUCCESS](state, user) {
		let index = state.list.indexOf(user)
		if (~index) {
			state.list.splice(index, 1)
		}
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}