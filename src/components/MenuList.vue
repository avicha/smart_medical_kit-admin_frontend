<template>
<div class="panel-group" id="accordion">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#user-manage">客户管理</a>
                </h4>
        </div>
        <div id="user-manage" class="panel-collapse">
            <div class="panel-body">
                <ul class="nav nav-pills nav-stacked">
                    <router-link role="presentation" to="/user/list" exact tag="li"><a>客户列表</a></router-link>
                    <router-link role="presentation" to="/user/create" exact tag="li"><a>添加客户</a></router-link>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'menu-list'
}
</script>
