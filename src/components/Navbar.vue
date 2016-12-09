<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">智能药盒</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <p class="navbar-text">{{username}}</p>
                </li>
                <li><a href="#" @click="logout">注销</a></li>
            </ul>
        </div>
    </div>
</nav>
</template>
<script>
import {
    mapState
} from 'vuex'
export default {
    name: 'Navbar',
    computed: {...mapState({
            username: state => state.admin.username
        })
    },
    methods: {
        logout() {
            this.$store.dispatch('admin_logout', this.$store.state.admin).then(json => {
                if (!json.errcode) {
                    this.$router.push({
                        name: 'admin_login'
                    })
                }
            })
        }
    }
}
</script>
