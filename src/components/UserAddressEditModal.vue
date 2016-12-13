<template>
<div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" v-if="user_address.id">修改地址信息</h4>
                <h4 class="modal-title" v-else>添加地址信息</h4>
            </div>
            <div class="modal-body">
                <form role="form" class="form-horizontal">
                    <fieldset>
                        <div class="form-group">
                            <label class="col-sm-offset-1 col-sm-2 control-label">所在城市</label>
                            <div class="col-sm-8">
                                <AddressSelector ref="address_selector" :address_updated_handler="address_updated_handler" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="street" class="col-sm-offset-1 col-sm-2 control-label">详细街道</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="street" v-model="user_address.street">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="consignee" class="col-sm-offset-1 col-sm-2 control-label">收货人</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="consignee" v-model="user_address.consignee">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contact" class="col-sm-offset-1 col-sm-2 control-label">联系方式</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="contact" v-model="user_address.contact">
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="save_user_address">保存</button>
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
import extend from 'lodash/extend'
import * as types from 'store/mutation_types'
import AddressSelector from 'components/AddressSelector'
export default {
    name: 'UserAddressEditModal',
    props: ['hide_edit_user_address_modal'],
    data() {
        return {
            user_address: {
                id: null,
                user_id: null,
                region_code: null,
                street: '',
                consignee: '',
                contact: ''
            }
        }
    },
    components: {
        AddressSelector
    },
    computed: {...mapState({
            token: state => state.admin.token
        })
    },
    methods: {
        init(init_data) {
            extend(this.user_address, init_data)
            this.$refs.address_selector.init(this.user_address.region_code)
        },
        address_updated_handler(region_code) {
            this.user_address.region_code = region_code
        },
        save_user_address() {
            this.$store.dispatch('user_address_save', {
                user_address: this.user_address,
                token: this.token
            }).then(json => {
                if (!json.errcode) {
                    this.hide_edit_user_address_modal()
                }
            })
        }
    }
}
</script>
