<template>
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
</template>
<script>
import AdminModel from 'api/admin'
export default {
    name: 'LoginForm',
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
            this.$store.dispatch('admin_login', this.admin).then(json => {
                if (!json.errcode) {
                    this.$router.push({
                        path: this.$route.query.redirect_uri || '/'
                    })
                }
            })
        }
    }
}
</script>
