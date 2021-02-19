<template>
  <div id="app">
      <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
const result_text = {
  "-1": "Pending",
  "1": "Accepted",
  "2": "Wrong Answer",
  "3": "Runtime Error",
  "4": "Output Limit Exceeded",
  "5": "Memory Limit Exceeded",
  "6": "Time Limit Exceeded",
  "7": "Presentation Error",
  "8": "System Error",
  "9": "Compile Error",
};
export default {
  name: 'App',
  components: {
  },
  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload,
      result_text,
    }
  },
  data() {
    return{
      isRouterAlive: true ,                   //控制视图是否显示的变量,
      transitionName:"",
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      })
    },
  },
  created() {
    this.initWebSocket()
  },
}
</script>
<style scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
