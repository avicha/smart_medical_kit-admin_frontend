<template>
<form role="form" class="form-horizontal" @submit.prevent="reset_password">
    <legend>
        重置密码
    </legend>
    <div class="form-group">
        <label for="old_password" class="col-sm-1 control-label">旧密码</label>
        <div class="col-sm-4">
            <input type="password" class="form-control" id="old_password" v-model="admin.old_password" />
        </div>
    </div>
    <div class="form-group">
        <label for="new_password" class="col-sm-1 control-label">新密码</label>
        <div class="col-sm-4">
            <input type="password" class="form-control" id="new_password" v-model="admin.new_password" />
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-1 col-sm-9">
            <button type="submit" class="btn btn-default">确定</button>
        </div>
    </div>
</form>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'AdminResetPasswordForm',
    data() {
        return {
            admin: {
                old_password: '',
                new_password: ''
            }
        }
    },
    computed: {...mapState({
            token: state => state.admin.token
        })
    },
    methods: {
        reset_password() {
            this.$store.dispatch('admin_reset_password', {
                admin: this.admin,
                token: this.token
            }).then(json => {
                if (!json.errcode) {
                    alert('重置密码成功')
                }
            })
        }
    }
}
</script>
