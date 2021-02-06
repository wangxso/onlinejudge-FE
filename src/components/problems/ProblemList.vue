<template>
  <a-card title="问题" :bordered="false">
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
      loading: true
    };
  },
  methods: {
    getAllProblem() {
      this.$api.problem.findAllProblem().then(res => {
        this.problemList = res.data
      })
      this.loading = false;
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
    this.getAllProblem()
  }

};
</script>
