<template>
<div id="root">
    <Navbar />
    <div class="main">
        <div class="row-flow">
            <div class="col-xs-2 nav-list">
                <MenuList></MenuList>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from 'components/Navbar'
import MenuList from 'components/MenuList'
export default {
    name: 'user-create',
    components: {
        Navbar,
        MenuList
    }
}
</script>

<style>
@import "../../assets/scss/global.scss"
</style>
