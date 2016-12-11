<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList />
            </div>
            <div class="col-xs-10 nav-list">
                <UserListTable />
                <div id="pagination-container"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
import UserListTable from 'components/UserListTable'
import * as types from 'store/mutation_types'
import $ from 'jquery'
export default {
    name: 'UserListPage',
    components: {
        Navbar,
        MenuList,
        UserListTable
    },
    mounted() {
        let filter = {
            page_number: 1,
            page_size: 1
        }
        let totalNumber = 0
        let token = this.$store.state.admin.token
        this.$store.dispatch('user_list', {
            token: token,
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
                        this.$store.commit(types.RECEIVE_USER_LIST, {result})
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss">@import "../../assets/scss/global.scss"</style>
