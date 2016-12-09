<style lang="scss" scoped>
#root {
    padding-top: 30px;
}
</style>

<template>
<div id="root">
    <div class="container">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"> <strong>登录</strong>
                        </h3>
                </div>
                <div class="panel-body">
                    <login-form></login-form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import LoginForm from 'components/LoginForm'
export default {
    name: 'AdminLoginPage',
    components: {
        LoginForm
    }
}
</script>
