<template>
    <div :style="{height: height + 'px', backgroundColor: '#eee'}">
        <div class="out-wrapper" >
            <a-row>
                <a-col :span="1"></a-col>
                <a-col :span="11">
                  <el-card class="block">
                    <template #header>
                      <div class="card-header">
                        <h3>用户信息</h3>
                      </div>
                    </template>
                    <el-timeline>
                      <el-timeline-item timestamp="用户名" placement="top">
                        <i class="el-icon-user-solid" />
                        <el-tag style="margin-left: 20px" type="success">{{user.username}}</el-tag>
                      </el-timeline-item>
                      <el-timeline-item timestamp="浏览器版本" placement="top">
                        <a-icon type="global" />
                        <el-tag style="margin-left: 20px">{{browser}}</el-tag>
                      </el-timeline-item>
                      <el-timeline-item timestamp="操作系统版本" placement="top">
                        <a-icon type="desktop" />
                        <el-tag style="margin-left: 20px">{{os}}</el-tag>
                      </el-timeline-item>
                      <el-timeline-item timestamp="IP" placement="top">
                        <a-icon type="wifi" />
                        <el-tag style="margin-left: 20px">{{ip}}</el-tag>
                      </el-timeline-item>
                    </el-timeline>
                  </el-card>
                </a-col>
              <a-col :span="1"></a-col>
              <a-col :span="9">
                <el-card :body-style="{ padding: '0px' }">
                  <template #header>
                    <div class="card-header">
                      <h3>每小时提交统计图</h3>
                    </div>
                  </template>
                  <div id="liner" style="padding: 20px"></div>
                </el-card>
              </a-col>
            </a-row>
        </div>
    </div>

</template>

<script>
import { DualAxes } from '@antv/g2plot';
import * as sysTool from '@/assets/js/utils'
export default {
  name: "index",
  data() {
      return {
          height: `${document.documentElement.clientHeight}`,
          user: this.$store.state.user,
          ip: '',
          area: '',
          browser: '',
          os: '',
          staticsSubmission: [],
      }
  },
  methods:{
    getInfo() {
      this.ip = sessionStorage.getItem('ip')
      this.area = sessionStorage.getItem('area')
      this.browser = sysTool.GetCurrentBrowser()
      this.os = sysTool.GetOs()
    },
    getStatisticSubmission(){
      this.$api.submission.getSubmissionStatics().then(res => {
          if (res.code === 0) {
            for (let item of res.data) {
              item.time = this.$moment(item.time).format("YYYY-MM-DD HH:mm:ss")
            }
            this.staticsSubmission = res.data;
            this.drawLine()
          } else  {
            this.$message.error(res.msg)
          }
      })

    },
    drawLine() {
      const data = this.staticsSubmission;
      const dualAxes = new DualAxes('liner', {
        data: [data, data],
        xField: 'time',
        yField: ['count', 'count'],
        geometryOptions: [
          {
            geometry: 'column',
            columnWidthRatio: 0.4,
            label: {
              position: 'middle',
            },
          },
          {
            geometry: 'line',
            smooth: true,
            lineStyle: {
              lineWidth: 2,
            },
          },
        ],
      });

      dualAxes.render();
    }
  },
  mounted() {
    this.getInfo()
    this.getStatisticSubmission()
  }
}
</script>

<style scoped>
    .out-wrapper{
        padding-top: 50px;
    }

    .username{
        float: right;
        padding-right: 30%;
        padding-top: 2%;
        color: #39a0ef;
    }
</style>