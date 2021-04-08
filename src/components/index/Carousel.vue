<template>
  <div id="liner" style="padding: 20px"></div>
</template>

<script>
  import {DualAxes} from "@antv/g2plot";

  export default {
    name: "Carousel",
    methods: {
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
          animation: {
            // 配置图表第一次加载时的入场动画
            appear: {
              animation: 'wave-in', // 动画效果
              duration: 5000,  // 动画执行时间
            },
          }
        });

        dualAxes.render();
      }
    },
    data(){
      return{
        staticsSubmission: []
      }
    },
    mounted() {
      this.getStatisticSubmission()
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>