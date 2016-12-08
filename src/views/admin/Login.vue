<style lang="scss">
#root {
    padding-top: 30px;
}
</style>

<template>
<div id="root">
    <login-form></login-form>
</div>
</template>

<script>
import LoginForm from 'components/LoginForm'
export default {
    name: 'admin-login',
    components: {
        LoginForm
    }
}
</script>
