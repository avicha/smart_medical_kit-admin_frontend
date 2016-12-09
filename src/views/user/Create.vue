<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList />
            </div>
            <div class="col-xs-10 nav-list">
                <div class="container">
                    <UserCreateForm />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
import UserCreateForm from 'components/UserCreateForm'
export default {
    name: 'UserCreatePage',
    components: {
        Navbar,
        MenuList,
        UserCreateForm
    }
}
</script>

<style>
@import "../../assets/scss/global.scss"
</style>
