<style lang="scss">
#root {
    padding-top: 30px;
}
</style>

<template>
<div id="root">
    <login-form :redirect-uri=redirect_uri></login-form>
</div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import qs from '../services/qs'
export default {
    name: 'login',
    data() {
        return {
            redirect_uri: qs.query('redirect_uri', '/')
        }
    },
    components: {
        LoginForm
    }
}
</script>
