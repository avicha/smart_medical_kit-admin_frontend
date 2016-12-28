import BaseModel from './base';
class UserAddressModel extends BaseModel {
	static model_name = 'user_address';
	constructor(props) {
		super(props);
	}
	set_default() {
		return fetch(this.api_prefix + '/' + this.model_name + '/set_default', {
			method: 'post',
			headers: new Headers({
				'Content-Type': 'application/json; charset=UTF-8'
			}),
			body: JSON.stringify({
				user_address_id: this.id,
				token: this.token
			})
		}).then(res => res.json());
	}
}
export default UserAddressModel
