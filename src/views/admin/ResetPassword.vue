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
                    <AdminResetPasswordForm />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
import AdminResetPasswordForm from 'components/AdminResetPasswordForm'
export default {
    name: 'AdminResetPasswordPage',
    components: {
        Navbar,
        MenuList,
        AdminResetPasswordForm
    }
}
</script>

<style>
@import "../../assets/scss/global.scss"
</style>
