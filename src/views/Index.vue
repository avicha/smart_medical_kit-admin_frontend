<template>
<div id="root">
    <Navbar />
    <div class="row-flow">
        <MenuList></MenuList>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import MenuList from '../components/MenuList'
export default {
    name: 'index',
    components: {
        Navbar,
        MenuList
    }
}
</script>

<style>
#root {
    font-family: 'Avenir', Microsoft Yahei, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
