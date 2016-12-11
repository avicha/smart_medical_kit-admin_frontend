<style lang="scss">
.avatar {
    width: 60px;
    height: 60px;
}
</style>
<template>
<table class="table table-hover">
    <caption>用户列表</caption>
    <thead>
        <tr>
            <th>用户名</th>
            <th>头像</th>
            <th>性别</th>
            <th>手机号码</th>
            <th>昵称</th>
            <th>注册方式</th>
            <th>注册时间</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="u in users">
            <td>{{u.username}}</td>
            <td><img class="avatar" src="~images/default_avatar.png" /></td>
            <td>{{u.sex|map_sex}}</td>
            <td>{{u.phone_number}}</td>
            <td>{{u.nick}}</td>
            <td>{{u.register_type|map_register_type}}</td>
            <td>{{u.created_at}}</td>
            <td>
                <button class="btn btn-primary">更新</button> 
                <button class="btn btn-danger" @click="delete_user(u)">删除</button>
            </td>
        </tr>
    </tbody>
</table>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'UserListTable',
    computed: {...mapState({
            users: state => state.user.list,
            token: state => state.admin.token
        })
    },
    methods:{
        delete_user(user){
            if(window.confirm('是否确定删除该客户信息？')){
                this.$store.dispatch('user_delete', {user, token: this.token}).then(json => {
                    if (!json.errcode) {
                        alert('删除成功')
                    }
                })
            }
        }
    }
}
</script>
