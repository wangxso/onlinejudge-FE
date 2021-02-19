<template>
  <div>
    <a-card title="Contest">
      <a-table
              :data-source="data"
              :customRow="rowClick"
              rowKey="cid"
              :loading="loading"
      >
        <a-table-column key="cid" title="Cid" data-index="cid" />
        <a-table-column key="title" title="Title" data-index="title" />
        <a-table-column key="startDate" title="Start" data-index="startDate">
          <template slot-scope="startDate">
            {{startDate | formatDate}}
          </template>
        </a-table-column>
        <a-table-column key="endDate" title="End" data-index="endDate">
          <template slot-scope="endDate">
            {{endDate | formatDate}}
          </template>
        </a-table-column>
        <a-table-column key="tags" title="Tags" data-index="tags">
          <template slot-scope="tags">
          <span>
            <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
          </span>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
</template>
<script>




export default {
  data() {
    return {
      data: [],
      loading: true,
      rowClick: record => ({
        on: {
          click: ()=> {
            this.$router.push({path: "/contest/", name: "contestDetail", params: {contest: record}})
          }
        }
      })
    };
  },
  methods: {
    findByPagination(page, pageSize){
      this.$api.contest.findContestPagination(page, pageSize).then(res => {
          if (res.code === 0) {
            this.data = res.data.records;
            this.loading = false
          } else {
            this.$message.error(res.msg)
          }
      })
    },

  },
  mounted() {
    this.findByPagination(1, 10);
  }
};
</script>
