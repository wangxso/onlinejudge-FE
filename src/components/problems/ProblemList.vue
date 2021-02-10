<template>
  <a-card title="问题" :bordered="false" :pagination="pagination" @change="changePage">
    <a-table
            :data-source="problemList"
            :loading="loading"
            rowKey="pid"
            :customRow="rowClick"
    >
      <a-table-column key="pid" title="PID" data-index="pid"/>
      <a-table-column key="title" title="Title" data-index="title">
        <template slot-scope="title" >
          <a href="#">{{title}}</a>
        </template>

      </a-table-column>

      <a-table-column key="level" title="Level" data-index="level" >
        <template slot-scope="level">
          <a-tag :color="levelColor[level]">
            {{level | levelFilter}}
          </a-tag>
        </template>
      </a-table-column>
      <a-table-column key="tags" title="Tags" data-index="tags">
        <template slot-scope="tags">
          <a-tag v-for="tag in JSON.parse(tags)" :key="tag" color="#2db7f5">
            {{tag}}
          </a-tag>
        </template>
      </a-table-column>
      <a-table-column key="totalSubmit" title="Total" data-index="totalSubmit" />
      <a-table-column key="pass" title="AC" data-index="pass" />
      <a-table-column title="ACRate" key="acRate" data-index="acRate">
      </a-table-column>
    </a-table>
  </a-card>
</template>
<script>
import { Gauge } from '@antv/g2plot';

export default {
  data() {
    return {
      levelColor: ['#87d068','#f50','#108ee9'],
      rowClick: record => ({
        on: {
          click: ()=> {
            this.$router.push("/problems/"+record.pid)
          }
        }
      }),
      problemList: {},
      loading: true,
      pagination:{
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return range[0] + '-' +range[1] + '共' + total + '条';
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0,
      }
    };
  },
  methods: {
    getAllProblemPagination(page, pageSize) {
      this.$api.problem.findProblemPagination(page, pageSize).then(res => {
        this.problemList = res.data.records
      })
      this.loading = false;
    },
    drawLiquid(data){
      const gauge = new Gauge('container', {
        percent: data,
        range: {
          color: '#5B8FF9',
        },
        statistic: {
          content: {
            formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
          },
        },
      });
      gauge.render();
    },
    changePage(pagination) {
      this.pagination.pageSize = pagination.pageSize
      this.pagination.current = pagination.page
      this.getAllProblemPagination(pagination.page, pagination.pageSize)
    }
  },
  filters: {
    levelFilter: function (value) {
        if (value===0) {
          return "Easy"
        } else if (value === 1) {
          return "Mid"
        } else if (value === 2) {
          return "Hard"
        } else {
          return ""
        }
    },
  },
  mounted() {
    this.getAllProblemPagination(this.pagination.current, this.pagination.pageSize)
    this.drawLiquid(0.75)
  }

};
</script>
