import BaseModel from './base';
class AdminModel extends BaseModel {
	static model_name = 'admin';
	constructor(props) {
		super(props);
	}
	login() {
		return fetch(this.api_prefix + '/' + this.model_name + '/login', {
			method: 'post',
			headers: new Headers({
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			}),
			body: JSON.stringify({
				username: this.username,
				password: this.password
			})
		}).then(res => res.json());
	}
	logout() {
		return fetch(this.api_prefix + '/' + this.model_name + '/logout?token=' + this.token, {
			method: 'get',
			headers: new Headers({
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
			})
		}).then(res => res.json());
	}
	reset_password() {
		return fetch(this.api_prefix + '/' + this.model_name + '/reset_password', {
			method: 'post',
			headers: new Headers({
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			}),
			body: JSON.stringify({
				old_password: this.old_password,
				new_password: this.new_password,
				token: this.token
			})
		}).then(res => res.json());
	}
	static current(token) {
		return fetch(this.api_prefix + '/' + this.model_name + '/current?token=' + (token || ''), {
			method: 'get',
			headers: new Headers({
				Accept: 'application/json'
			}),
		}).then(res => res.json());
	}
}
export default AdminModel
