<template>
  <div>
    <Content id="index-content" />
    <Announcement :announceList="announceList" id="announce"></Announcement>
  </div>
</template>

<script>
import Content from "@/components/index/Content";
import Announcement from "@/components/index/Announcement";
export default {
  name: "index",
  data() {
    return {
      announceList: {}
    }
  },
  components: {
    Content,
    Announcement,
  },
  methods: {
    getAnnounceList(){
      this.$api.announce.findAll().then(res => {
          if (res.code === 0) {
            this.announceList = res.data
          } else {
            alert(res.msg)
          }
      })
    },
  },
  mounted() {
    let that = this;
    that.getAnnounceList()
  },
}
</script>

<style scoped>
#announce {
  padding-top: 20px;
}

#index-statistic{
  float: right;
}
</style>