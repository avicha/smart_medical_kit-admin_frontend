class BaseModel {
    constructor(attributes = {}) {
        for (let prop in attributes) {
            this[prop] = attributes[prop];
        }
    }
    static idAttribute = 'id';
    static urlPrefix = (process.env.NODE_ENV == 'development' ? '/api' : '/api');

    clone() {
        return new this.constructor(this.attributes);
    }
    getId() {
        return this.attributes[this.idAttribute];
    }
    get idAttribute() {
        return this.constructor.idAttribute;
    }
    get urlPrefix() {
        return this.constructor.urlPrefix;
    }
    get model_name() {
        return this.constructor.model_name;
    }
    get attributes() {
        let attributes = {};
        for (let prop in this) {
            attributes[prop] = this[prop];
        }
        return attributes;
    }
    static list(filter = {}) {
        let qs = [];
        Object.keys(filter).forEach(key => qs.push(key + '=' + filter[key]));
        return fetch(this.urlPrefix + '/' + this.model_name + '/list?' + qs.join('&'), {
            method: 'get',
            headers: new Headers({
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            })
        }).then(res => res.json());
    }
    get() {
        let id = this.getId();
        return fetch(this.urlPrefix + '/' + this.model_name + '/get?' + this.model_name + '_id=' + id, {
            method: 'get',
            headers: new Headers({
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            })
        }).then(res => res.json());
    }
    update() {
        let id = this.getId();
        return fetch(this.urlPrefix + '/' + this.model_name + '/update', {
            method: 'post',
            headers: new Headers({
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }),
            body: JSON.stringify(this.attributes)
        }).then(res => res.json());
    }
    create() {
        let attributes = this.attributes;
        return fetch(this.urlPrefix + '/' + this.model_name + '/create', {
            method: 'post',
            headers: new Headers({
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }),
            body: JSON.stringify(attributes)
        }).then(res => res.json());
    }
    save() {
        let id = this.getId();
        if (id) {
            return this.update();
        } else {
            return this.create();
        }
    }
    delete() {
        let id = this.getId();
        return fetch(this.urlPrefix + '/' + this.model_name + '/delete?' + this.model_name + '_id=' + id, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => res.json());
    }
}
export default BaseModel