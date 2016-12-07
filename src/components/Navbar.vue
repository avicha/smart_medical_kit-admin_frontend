<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">智能药盒</a>
        </div>
        <div class="collapse navbar-collapse">
            <p class="navbar-text navbar-right">{{username}} <a href="/admin/logout" class="navbar-link">注销</a></p>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    name: 'navbar',
    props: ['username']
}
</script>
