<template>
<div id="front">
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <Navigation></Navigation>
    </a-layout-header>
    <a-layout-content class="main" style="padding: 10px 50px; height: 100%">
      <router-view/>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      OnlineJudge ©2020 Created by wangx
    </a-layout-footer>
  </a-layout>
</div>
</template>

<script>
import Navigation from "@/components/common/Navigation";
import $ from 'jquery'

export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return{

    }
  },
  mounted() {
    $('.main').height($(window).height() - 150)
  }
}
</script>

<style scoped>
#navigation-index .header{
  background-color: transparent;
}
.ant-layout-header {
  background-color: transparent;
  padding: 0;
}
</style>