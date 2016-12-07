<template>
<div class="container">
    <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"> <strong>登录</strong>
                    </h3>
            </div>
            <div class="panel-body">
                <form role="form" @submit.prevent="login">
                    <div class="form-group">
                        <label for="username">用户名</label>
                        <input type="text" class="form-control" id="username" name="username" v-model="admin.username" />
                    </div>
                    <div class="form-group">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="password" name="password" v-model="admin.password" />
                    </div>
                    <button type="submit" class="btn btn-sm btn-default">提交</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import AdminModel from '../api/admin'
export default {
    name: 'LoginForm',
    props: ['redirect-uri'],
    data() {
        return {
            admin: new AdminModel({
                username: '',
                password: ''
            })
        }
    },
    methods: {
        login() {
            this.admin.login().then(json => {
                if (json.errcode) {
                    alert(json.errmsg)
                } else {
                    localStorage.setItem('token', json.result.token)
                    window.location.href = this.redirectUri;
                }
            })
        }
    }
}
</script>
