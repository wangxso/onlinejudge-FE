<template>
  <div>
    <a-row>
      <a-col :span="20">
        <Content id="index-content" />
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="3">
        <div>
          <a-card title="统计数据">
            <a-statistic title="全站用户数" :value="112893" style="margin-right: 50px" />
            <a-statistic title="全站提交数"  :value="112893" />
          </a-card>
        </div>
      </a-col>
    </a-row>
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
      announceList: {},
      visible: false,
      loading: false
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