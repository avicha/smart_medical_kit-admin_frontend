<style lang="scss">
#root {
    padding-top: 30px;
}
</style>

<template>
<div id="root">
    <login-form :redirect-uri=redirectUri></login-form>
</div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import qs from '../services/qs'
export default {
    name: 'login',
    data() {
        return {
            redirectUri: qs.query('redirect_uri', '/')
        }
    },
    components: {
        LoginForm
    }
}
</script>
