<template>
<div id="front">
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <Navigation></Navigation>
    </a-layout-header>
    <a-layout-content style="padding: 10px 50px">
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
export default {
  name: "App",
  components: {
    Navigation
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