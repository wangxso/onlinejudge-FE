<template>
  <div>
    <el-card>
      <el-tabs tab-position="left" :stretch="true">
        <el-tab-pane label="基本信息">
            <a-col :span="11">
              <UserInfo :user="user"></UserInfo>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="11">
              <label for="container">用户通过统计图</label>
              <div id="container"></div>
            </a-col>
        </el-tab-pane>
        <el-tab-pane label="头像管理">
          <Avatar style="margin-left: 40%" :user="user"></Avatar>
        </el-tab-pane>
        <el-tab-pane label="角色管理"></el-tab-pane>
        <el-tab-pane label="定时任务补偿"></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import {Pie} from "@antv/g2plot";
import UserInfo from "@/components/personal/components/UserInfo";
import Avatar from "@/components/personal/components/Avatar";
export default {
  name: "PersonalInfo",
  components: {
    UserInfo,
    Avatar
  },
  data() {
    return{
      user: this.$store.state.user,
      passAndTotal: []
    }
  },
  methods: {
    findUserSubmissionPassAndTotal(uid) {
        this.$api.user.findUserSubmissionPassAndTotal(uid).then(res => {
            if (res.code === 0) {
              this.passAndTotal = res.data;
              this.draw()
            } else {
              this.$message.error(res.msg);
            }
        })
    },
    draw() {
      const data = [
        {type: '通过数', value: this.passAndTotal['pass']},
        {type: '未通过数', value: this.passAndTotal['total'] - this.passAndTotal['pass']},
      ];
      console.log(data)
      const piePlot = new Pie('container', {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        height: 180,
        width: 180,
        autoFit: true,
        label: {
          type: 'outer',
          content: '{name} {percentage}',
        },
        interactions: [{type: 'pie-legend-active'}, {type: 'element-active'}],
        color: ({ type }) => {
          if(type === '通过数'){
            return '#67C23A';
          }
          return '#F56C6C';
        }
      });

      piePlot.render();
    }
  },
  mounted() {
    this.findUserSubmissionPassAndTotal(this.user.uid)
  }
}
</script>

<style scoped>

</style>