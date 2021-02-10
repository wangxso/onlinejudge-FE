<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot';

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
  name: "ProblemSubPieChart",
  props: ['pid'],
  methods:{
    getChartData(pid) {
      const data = [];
      this.$api.problem.getChartData(pid).then(res => {
         if (res.code === 0) {
          const temp = JSON.parse(res.data)
           for (const key in temp) {
             let one = {}
             one.type = result_text[key]
             one.value = temp[key]
             console.log(one)
             data.push(one)
           }


           const piePlot = new Pie('container', {
             appendPadding: 10,
             data,
             angleField: 'value',
             colorField: 'type',
             radius: 1,
             innerRadius: 0.64,
             label: {
               type: 'inner',
               offset: '-50%',
               autoRotate: false,
               style: { textAlign: 'center' },
               formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
             },
             statistic: {
               title: {
                 offsetY: -8,
               },
               content: {
                 offsetY: -4,
               },
             },
             // 添加 中心统计文本 交互
             interactions: [
               { type: 'element-selected' },
               { type: 'element-active' },
               {
                 type: 'pie-statistic-active',
                 cfg: {
                   start: [
                     { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
                     { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' },
                   ],
                   end: [
                     { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
                     { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' },
                   ],
                 },
               },
             ],
           });

           piePlot.render();
         } else {
           this.$message.error(res.msg)
         }
      })
    }
  },
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.getChartData(this.pid)
  }
}
</script>

<style scoped>

</style>