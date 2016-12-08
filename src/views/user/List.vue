<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList></MenuList>
            </div>
            <div class="col-xs-10 nav-list">
                <UserList></UserList>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
import UserList from 'components/UserList'
export default {
    name: 'user-list',
    components: {
        Navbar,
        MenuList,
        UserList
    }
}
</script>

<style lang="scss">@import "../../assets/scss/global.scss"</style>
