import * as types from '../mutation_types'
import UserAddressModel from 'api/user_address'
import find from 'lodash/find'
import extend from 'lodash/extend'
const state = {
	list: []
}
const getters = {}
const actions = {
	user_address_list({
		commit
	}, {
		filter,
		token
	}) {
		return UserAddressModel.list({
			token,
			...filter
		}).then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.RECEIVE_USER_ADDRESS_LIST, json)
			}
			return json
		})
	},
	user_address_create({
		commit
	}, {
		user_address,
		token
	}) {
		let user_address_model = new UserModel({
			token,
			...user_address
		})
		return user_address_model.create().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {

			}
			return json
		})
	},
	user_address_delete({
		commit
	}, {
		user_address,
		token
	}) {
		let user_address_model = new UserAddressModel({
			token,
			...user_address
		})
		return user_address_model.delete().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.USER_ADDRESS_DELETE_SUCCESS, user_address)
			}
			return json
		})
	},
	user_address_update({
		commit
	}, {
		user_address,
		token
	}) {
		let user_address_model = new UserAddressModel({
			token,
			...user_address
		})
		return user_address_model.update().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.USER_ADDRESS_UPDATE_SUCCESS, user)
			}
			return json
		})
	}
}
const mutations = {
	[types.RECEIVE_USER_ADDRESS_LIST](state, {
		result
	}) {
		state.list = result
	},
	[types.USER_ADDRESS_DELETE_SUCCESS](state, user_address) {
		let index = state.list.indexOf(user_address)
		if (~index) {
			state.list.splice(index, 1)
		}
	},
	[types.USER_ADDRESS_UPDATE_SUCCESS](state, user_address) {
		let o = find(state.list, {
			id: user_address.id
		})
		if (o) {
			extend(o, user_address)
		}
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}
