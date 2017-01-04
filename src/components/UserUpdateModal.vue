<template>
<div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">修改用户信息</h4>
            </div>
            <div class="modal-body">
                <form role="form" class="form-horizontal">
                    <fieldset>
                        <div class="form-group">
                            <label for="phone_number" class="col-sm-offset-1 col-sm-2 control-label">电话号码</label>
                            <div class="col-sm-8">
                                <input type="number" class="form-control" id="phone_number" placeholder="电话号码作为用户名注册" v-model="user.phone_number">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-offset-1 col-sm-2 control-label">性别</label>
                            <div class="col-sm-8">
                                <label class="radio-inline">
                                    <input type="radio" value="0" name="sex" v-model.number="user.sex"/> 未知
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="1" name="sex" v-model.number="user.sex"/> 男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="2" name="sex" v-model.number="user.sex"/> 女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="nick" class="col-sm-offset-1 col-sm-2 control-label">昵称</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="nick" placeholder="昵称作为备注" v-model="user.nick">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="avatar" class="col-sm-offset-1 col-sm-2 control-label">默认头像</label>
                            <div class="col-sm-8">
                                <img class="avatar" src="~images/default_avatar.png" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-offset-1 col-sm-2 control-label">注册方式</label>
                            <div class="col-sm-8">
                                <label class="radio-inline">
                                    <input type="radio" value="0" name="register_type" v-model="user.register_type"/> 系统
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="update_user">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'UserUpdateModal',
    props: ['hide_update_user_modal'],
    data() {
        return {
            user: {
                id: '',
                phone_number: '',
                sex: '0',
                nick: '',
                avatar: '',
                register_type: '0'
            }
        }
    },
    computed: {...mapState({
            token: state => state.admin.token
        })
    },
    methods: {
        update_user() {
            if (/^\d{11}$/.test(this.user.phone_number)) {
                this.$store.dispatch('user_update', {
                    user: this.user,
                    token: this.token
                }).then(json => {
                    if (!json.errcode) {
                        this.hide_update_user_modal()
                    }
                })
            } else {
                alert('请输入11位的手机号码');
            }
        }
    }
}
</script>
