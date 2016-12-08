import AdminModel from 'api/admin'
export default {
	admin: new AdminModel({
		username: '',
		token: localStorage.getItem('token')
	})
}
