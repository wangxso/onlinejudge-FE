<template>
  <div id="navigation-index">
    <a-affix :offset-top="top">
    <!-- 导航栏logo start -->
      <div class="logo">
        <p>SOJ</p>
      </div>
      <!-- 导航栏logo end -->
      <!-- 头像 start -->
      <div class="avatar">
        <Login v-if="!user"></Login>
        <Register v-if="!user"></Register>
        <div class="logined"  v-if="user">
          <a-avatar style="margin-right: 10px" :src="user.avatar" />
          <!-- 用户名 下拉栏 start -->
          <a-space :size="size">
            <a-dropdown placement="bottomCenter" >
              <a class="ant-dropdown-link username" @click="e => e.preventDefault()">
                {{user.username}} <a-icon type="down" />
              </a>
              <a-menu slot="overlay" @click="onClick">
                <a-menu-item @click="toLink('/personal')">
                  个人中心
                </a-menu-item>
                <!-- 判断权限 -->
                <a-menu-item v-if="user.authority == 1" @click="toLink('/admin')">
                  后台管理
                </a-menu-item>
                <a-menu-item @click="logout" key="3">
                  退出登录
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <p style="padding-right: 10px"></p>
            <!-- 用户名 下拉栏 end -->
          </a-space>
        </div>
      </div>
      <!-- 头像 end -->
      <!-- 导航 按钮 start -->
      <a-menu
          :theme="theme"
          mode="horizontal"
          :default-selected-keys="['/']"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/" v-on:click="changePages">
          <a-icon type="bank" />
          首页
        </a-menu-item>
        <a-menu-item key="/problems" v-on:click="changePages">
          <a-icon type="appstore" />
          题目
        </a-menu-item>
        <a-menu-item key="/status" v-on:click="changePages">
          <a-icon type="dashboard" />
          状态
        </a-menu-item>
        <a-menu-item key="/contest" v-on:click="changePages">
          <a-icon type="trophy" />
          比赛
        </a-menu-item>
        <a-menu-item key="/rank" v-on:click="changePages">
          <a-icon type="fund" />
          排名
        </a-menu-item>
        <a-menu-item key="/about" v-on:click="changePages">
          <a-icon type="info-circle" />
          关于
        </a-menu-item>
      </a-menu>
    </a-affix>
  </div>
</template>

<script>
import Login from "@/components/common/Login";
import Register from "@/components/common/Register";
import {RECORD_USER, RECORD_TOKEN} from "@/store/mutation-types";

export default {
  inject:['reload'],
  components: {
    Login,
    Register
  },
  data() {
    return {
      theme: 'light',
      size: 10,
      user: this.$store.state.user,
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
    },
    logout(){
      this.$api.user.logout(this.$store.state.user).then(res => {
          if (res.code === 0) {
              this.$store.commit(RECORD_USER, null);
              this.$store.commit(RECORD_TOKEN, null);
              this.$message.success("登出成功");
              this.reload();
          } else {
            this.$message.error(res.msg);
          }
      })
    },
    toLink(url){
      this.$router.push(url)
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
