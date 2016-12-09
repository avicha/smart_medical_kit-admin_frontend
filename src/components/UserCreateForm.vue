<template>
<form role="form" class="form-horizontal" @submit.prevent="create_user">
    <fieldset>
        <legend>
            录入客户
        </legend>
        <div class="form-group">
            <label for="phone_number" class="col-sm-1 control-label">电话号码</label>
            <div class="col-sm-9">
                <input type="number" class="form-control" id="phone_number" placeholder="电话号码作为账号注册" v-model="user.phone_number">
            </div>
        </div>
        <div class="form-group">
            <label for="nick" class="col-sm-1 control-label">昵称</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="nick" placeholder="昵称作为备注" v-model="user.nick">
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-1 control-label">注册方式</label>
            <div class="col-sm-9">
                <label class="radio-inline">
                    <input type="radio" value="0" name="register_type" v-model="user.register_type"/> 系统
                </label>
                <label class="radio-inline">
                    <input type="radio" value="1" name="register_type" v-model="user.register_type"/> 淘宝
                </label>
                <label class="radio-inline">
                    <input type="radio" value="2" name="register_type" v-model="user.register_type"/> 微店
                </label>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-1 col-sm-9">
                <button type="submit" class="btn btn-default">确定</button>
            </div>
        </div>
    </fieldset>
</form>
</template>
<script>
export default {
    name: 'UserCreateForm',
    data() {
        return {
            user: {
                phone_number: '',
                nick: '',
                register_type: '0',
                token: this.$store.state.admin.token
            }
        }
    },
    props: [],
    methods: {
        create_user() {
            this.$store.dispatch('user_create', this.user).then(json => {
                if (!json.errcode) {
                    this.$router.push({
                        name: 'user_list'
                    })
                }
            })
        }
    }
}
</script>
