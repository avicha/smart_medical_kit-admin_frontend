import BaseModel from './base';
class UserModel extends BaseModel {
	static model_name = 'user';
	constructor(props) {
		super(props);
	}
}
export default UserModel
