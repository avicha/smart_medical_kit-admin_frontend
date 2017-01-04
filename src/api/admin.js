import BaseModel from './base';
class AdminModel extends BaseModel {
	static model_name = 'admin';
	constructor(props) {
		super(props);
	}
	login() {
		return BaseModel.http.post(this.api_prefix + '/' + this.model_name + '/login', {
			username: this.username,
			password: this.password
		}).then(res => res.json());
	}
	logout() {
		return BaseModel.http.get(this.api_prefix + '/' + this.model_name + '/logout', {
			params: {
				token: this.token || ''
			}
		}).then(res => res.json());
	}
	reset_password() {
		return BaseModel.http.post(this.api_prefix + '/' + this.model_name + '/reset_password', {
			old_password: this.old_password,
			new_password: this.new_password,
			token: this.token
		}).then(res => res.json());
	}
	static current(token) {
		return BaseModel.http.get(this.api_prefix + '/' + this.model_name + '/current', {
			params: {
				token: token || ''
			}
		}).then(res => res.json());
	}
}
export default AdminModel