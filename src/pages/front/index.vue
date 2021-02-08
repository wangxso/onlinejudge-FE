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
            <a-statistic title="全站用户数" :value="userCount" style="margin-right: 50px" />
            <a-statistic title="全站提交数"  :value="submitCount" />
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
      loading: false,
      userCount: 0,
      submitCount: 0,
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
    getUserCount(){
      this.$api.user.getCount().then(res => {
          if (res.code === 0) {
            this.userCount = res.data
          } else {
            this.$message.error(res.msg)
          }
      })
    },
    getSubmissionCount(){
      this.$api.submission.getCount().then(res => {
        if (res.code === 0) {
          this.submitCount = res.data
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  },
  mounted() {
    this.getAnnounceList();
    this.getUserCount();
    this.getSubmissionCount();
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