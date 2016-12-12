<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList />
            </div>
            <div class="col-xs-10 nav-list">
                <UserListTable :show_update_user_modal="show_update_user_modal" />
                <div id="pagination-container"></div>
                <UserUpdateModal ref="user_update_modal" :hide_update_user_modal="hide_update_user_modal" />
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
import UserListTable from 'components/UserListTable'
import UserUpdateModal from 'components/UserUpdateModal'
import * as types from 'store/mutation_types'
import $ from 'jquery'
import extend from 'lodash/extend'
export default {
    name: 'UserListPage',
    components: {
        Navbar,
        MenuList,
        UserListTable,
        UserUpdateModal
    },
    methods: {
        show_update_user_modal(user) {
            extend(this.$refs.user_update_modal.user, user)
            $(this.$refs.user_update_modal.$el).modal('show')
        },
        hide_update_user_modal() {
            $(this.$refs.user_update_modal.$el).modal('hide')
        }
    },
    mounted() {
        let filter = {
            page_number: 1,
            page_size: 25
        }
        let totalNumber = 0
        let token = this.$store.state.admin.token
        this.$store.dispatch('user_list', {
            token,
            filter,
        }).then(json => {
            if (!json.errcode) {
                totalNumber = json.total_count
                $('#pagination-container').pagination({
                    dataSource: '/api/user/list',
                    locator: 'result',
                    totalNumber: totalNumber,
                    pageNumber: filter.page_number,
                    pageSize: filter.page_size,
                    pageRange: 2,
                    triggerPagingOnInit: false,
                    alias: {
                        pageNumber: 'page_number',
                        pageSize: 'page_size'
                    },
                    ajax: {
                        data: {
                            token: token
                        }
                    },
                    callback: (result, pagination) => {
                        this.$store.commit(types.RECEIVE_USER_LIST, {
                            result
                        })
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss">@import "../../assets/scss/global.scss"</style>
