import * as types from '../mutation_types'
import UserAddressModel from 'api/user_address'
import find from 'lodash/find'
import extend from 'lodash/extend'
import each from 'lodash/each'
const state = {
	list: [],
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
	user_address_save({
		commit
	}, {
		user_address,
		token
	}) {
		let user_address_model = new UserAddressModel({
			token,
			...user_address
		})
		return user_address_model.save().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				if (json.result.created_at) {
					user_address = extend({}, user_address, json.result)
					commit(types.USER_ADDRESS_CREATED_SUCCESS, user_address)
				} else {
					commit(types.USER_ADDRESS_UPDATE_SUCCESS, user_address)
				}
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
	user_address_set_default({
		commit
	}, {
		user_address,
		token
	}) {
		let user_address_model = new UserAddressModel({
			token,
			...user_address
		})
		return user_address_model.set_default().then(json => {
			if (json.errcode) {
				commit(types.RECEIVE_ERROR, json)
			} else {
				commit(types.USER_ADDRESS_SET_DEFAULT_SUCCESS, user_address)
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
	[types.USER_ADDRESS_CREATED_SUCCESS](state, user_address) {
		state.list.unshift(user_address)
	},
	[types.USER_ADDRESS_UPDATE_SUCCESS](state, user_address) {
		let o = find(state.list, {
			id: user_address.id
		})
		if (o) {
			extend(o, user_address)
		}
	},
	[types.USER_ADDRESS_SET_DEFAULT_SUCCESS](state, user_address) {
		each(state.list, o => {
			if (o.id == user_address.id) {
				o.is_default = true
			} else {
				o.is_default = false
			}
		})
	},
}
export default {
	state,
	getters,
	actions,
	mutations
}
