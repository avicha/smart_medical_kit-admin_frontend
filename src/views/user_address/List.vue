<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList />
            </div>
            <div class="col-xs-10 nav-list">

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
import * as types from 'store/mutation_types'
import $ from 'jquery'
import extend from 'lodash/extend'
export default {
    name: 'UserAddressListPage',
    components: {
        Navbar,
        MenuList,
    },
    methods: {
        show_update_user_modal(user_address) {
            extend(this.$refs.user_address_update_modal.user_address, user_address)
            $(this.$refs.user_update_modal.$el).modal('show')
        },
        hide_update_user_modal() {
            $(this.$refs.user_address_update_modal.$el).modal('hide')
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
