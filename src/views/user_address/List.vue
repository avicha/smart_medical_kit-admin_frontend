<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList />
            </div>
            <div class="col-xs-10 nav-list">
                <UserAddressListTable :show_update_user_address_modal="show_update_user_address_modal" :show_create_user_address_modal="show_create_user_address_modal" />
                <UserAddressEditModal ref="user_address_edit_modal" :hide_edit_user_address_modal="hide_edit_user_address_modal" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
import UserAddressListTable from 'components/UserAddressListTable'
import UserAddressEditModal from 'components/UserAddressEditModal'
import $ from 'jquery'

export default {
    name: 'UserAddressListPage',
    components: {
        Navbar,
        MenuList,
        UserAddressListTable,
        UserAddressEditModal
    },
    data() {
        return {
            user_id: this.$route.query.user_id
        }
    },
    methods: {
        show_create_user_address_modal() {
            this.$refs.user_address_edit_modal.init({
                id: null,
                user_id: this.user_id,
                region_code: null,
                street: '',
                consignee: '',
                contact: ''
            })
            $(this.$refs.user_address_edit_modal.$el).modal('show')
        },
        show_update_user_address_modal(user_address) {
            this.$refs.user_address_edit_modal.init(user_address)
            $(this.$refs.user_address_edit_modal.$el).modal('show')
        },
        hide_edit_user_address_modal() {
            $(this.$refs.user_address_edit_modal.$el).modal('hide')
        }
    },
    mounted() {
        let token = this.$store.state.admin.token
        this.$store.dispatch('user_address_list', {
            token,
            filter: {
                user_id: this.$route.query.user_id
            }
        })
    }
}
</script>

<style lang="scss">@import "../../assets/scss/global.scss"</style>
