<template>
<table class="table table-hover">
    <caption>客户地址列表<button class="btn btn-info pull-right" @click="show_create_user_address_modal">添加地址</button></caption>
    <thead>
        <tr>
            <th>#</th>
            <th>地区</th>
            <th>详细街道</th>
            <th>收货人</th>
            <th>联系方式</th>
            <th>添加时间</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="o in user_addresses">
            <td><span class="label label-info" v-if="o.is_default">默认</span><span class="btn btn-default" v-else @click="set_default_user_address(o)">设置默认</span></td>
            <td>{{o.region_code|map_region}}</td>
            <td>{{o.street}}</td>
            <td>{{o.consignee}}</td>
            <td>{{o.contact}}</td>
            <td>{{o.created_at}}</td>
            <td>
                <button class="btn btn-primary" @click="show_update_user_address_modal(o)">更新</button>
                <button class="btn btn-danger" @click="delete_user_address(o)">删除</button>
            </td>
        </tr>
    </tbody>
</table>
</template>
<script>
import {
    mapState
} from 'vuex'
import addresses from 'api/address'
import find from 'lodash/find'
export default {
    name: 'UserAddressListTable',
    computed: {...mapState({
            user_addresses: state => state.user_address.list,
            token: state => state.admin.token
        })
    },
    props: ['show_create_user_address_modal', 'show_update_user_address_modal'],
    filters: {
        map_region(region_code) {
            let address = find(addresses, {
                region_code: region_code.toString()
            })
            if (address) {
                return [address.province, address.city, address.region].join(' ')
            } else {
                return ''
            }
        }
    },
    methods: {
        delete_user_address(user_address) {
            if (window.confirm('是否确定删除该客户地址信息？')) {
                this.$store.dispatch('user_address_delete', {
                    user_address,
                    token: this.token
                }).then(json => {
                    if (!json.errcode) {
                        alert('删除成功')
                    }
                })
            }
        },
        set_default_user_address(user_address) {
            this.$store.dispatch('user_address_set_default', {
                user_address,
                token: this.token
            })
        }
    }
}
</script>
