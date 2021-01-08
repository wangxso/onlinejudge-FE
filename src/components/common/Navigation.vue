<template>
  <div id="navigation-index">
      <!-- 导航栏logo start -->
      <div class="logo">
        <p>SOJ</p>
      </div>
      <!-- 导航栏logo end -->
      <!-- 头像 start -->
      <div class="avatar">
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <!-- 用户名 下拉栏 start -->
        <a-space :size="size">
        <a-dropdown placement="bottomCenter" >
          <a class="ant-dropdown-link username" @click="e => e.preventDefault()">
            wangx/用户名 <a-icon type="down" />
          </a>
          <a-menu slot="overlay" @click="onClick">
            <a-menu-item key="1">
              个人中心
            </a-menu-item>
            <a-menu-item key="2">
              后台管理
            </a-menu-item>
            <a-menu-item key="3">
              退出登录
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-switch  :default-checked="false" @change="changeTheme" /> 切换配色
          <p style="padding-right: 10px"></p>
        <!-- 用户名 下拉栏 end -->
        </a-space>
      </div>
      <!-- 头像 end -->
      <!-- 导航 按钮 start -->
      <a-menu
          :theme="theme"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/" v-on:click="changePages">
          <a-icon type="bank" />
          首页
        </a-menu-item>
        <a-menu-item key="problems" v-on:click="changePages">
          <a-icon type="appstore" />
          题目
        </a-menu-item>
        <a-menu-item key="status" v-on:click="changePages">
          <a-icon type="dashboard" />
          状态
        </a-menu-item>
        <a-menu-item key="contest" v-on:click="changePages">
          <a-icon type="trophy" />
          比赛
        </a-menu-item>
        <a-menu-item key="rank" v-on:click="changePages">
          <a-icon type="fund" />
          排名
        </a-menu-item>
        <a-menu-item key="about" v-on:click="changePages">
          <a-icon type="info-circle" />
          关于
        </a-menu-item>
      </a-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      theme: 'light',
      size: 10,
    }
  },
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
    changePages(obj) {
      this.$router.push(obj.key)
    }
  },
};
</script>

<style>
#navigation-index .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

#navigation-index .logo p{
  font-size: 31px;
  text-align: center;
  position: relative;
  bottom: 15px;
}

#navigation-index .avatar{
  float: right;
}

#navigation-index .username{
  color: #39a0ef;
}

</style>
