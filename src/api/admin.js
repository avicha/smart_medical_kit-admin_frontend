import BaseModel from './base';
class AdminModel extends BaseModel {
    static model_name = 'admin';
    constructor(props) {
        super(props);
    }
    login() {
        return fetch(this.urlPrefix + '/' + this.model_name + '/login', {
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
}
export default AdminModel