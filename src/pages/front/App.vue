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
  inject: ['result_text'],
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return{
      queueReceiveSetting: { // 消息队列配置
        websocket: null,
        client: null,
        wsuri: 'ws://localhost:8081/websocket/'+this.$store.state.user.uid
      }
    }
  },
  mounted() {
    $('.main').height($(window).height() - 150)
    this.initWebSocket()
  },
  methods: {
    initWebSocket () {
      // ws地址
      if (this.queueReceiveSetting.websocket) {
        this.queueReceiveSetting.websocket.close()
      }
      this.queueReceiveSetting.websocket = new WebSocket(this.queueReceiveSetting.wsuri)
      this.queueReceiveSetting.websocket.onopen = res => {
        console.log('开启连接' + res)
      }
      this.queueReceiveSetting.websocket.onmessage = res => {
        let data = res.data
        this.$message.info(data)
        this.openNotificationWA('bottomRight', res.data.result)
      }
      this.queueReceiveSetting.websocket.onclose = res => {
        console.log('连接关闭' + res)
      }
      this.queueReceiveSetting.websocket.onerror = res => {
        console.log('连接出错' + res)
      }
    },
    openNotificationWA(placement, res) {
      const key = 'updatable';
      var icon = {};
      const message = this.result_text[res]
      if (res === 1) {
         icon = "<a-icon type=\"check-circle\" theme=\"twoTone\" two-tone-color=\"#52c41a\" />"
      } else {
         icon = "<a-icon type=\"close-circle\" theme=\"twoTone\" two-tone-color=\"#eb2f96\"/>"
      }
        this.$notification.open({
          key,
          message: message,
          description: message,
          placement,
          icon: icon
        });
    },
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