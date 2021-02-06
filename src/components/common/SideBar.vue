<template>
    <div>
        <div class="banner">
            <img style="margin-left: 80px;height: 30%;width: 30%;" src="../../assets/logo.png">
            <br/>
            <h2 style="margin-left: 40px">SOJ 后台管理系统</h2>
        </div>
        <a-menu
                style="width: 256px"
                :default-selected-keys="['/admin']"
                :open-keys.sync="openKeys"
                mode="inline"
                @click="handleClick"
        >
            <a-menu-item key="/admin">
                <a-icon type="home" /><span>首页</span>
            </a-menu-item>
            <a-menu-item key="/admin/user">
                <a-icon type="contacts" /><span>用户管理</span>
            </a-menu-item>
            <a-menu-item key="/admin/problem">
                <a-icon type="file-text" /><span>题目管理</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="cloud" /><span>判题机管理</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="bulb" /><span>比赛管理</span>
            </a-menu-item>
            <a-menu-item key="5">
                <a-icon type="info-circle" /><span>网站信息管理</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: ['mail'],
                openKeys: ['sub1'],
            };
        },
        watch: {
            openKeys(val) {
                console.log('openKeys', val);
            },
        },
        methods: {
            handleClick(e) {
                this.$router.push(e.key);
            }
        },
    };
</script>