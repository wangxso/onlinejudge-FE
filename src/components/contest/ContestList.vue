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
            <a-tag v-for="tag in JSON.parse(tags)" :key="tag" color="blue">{{ tag }}</a-tag>
          </span>
          </template>
        </a-table-column>
        <a-table-column  title="status">
          <template slot-scope="records">
            <a-tag :color="date_status[getDate(records.startDate, records.endDate)].color">{{date_status[getDate(records.startDate, records.endDate)].desc}}</a-tag>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
</template>
<script>

const date_status = {
  "-1":{"desc":"已结束", "color":"#FF4949"},
  "1":{"desc":"进行中", "color":"#13CE66"},
  "2":{"desc":"未开始", "color":"#20A0FF"}
}



export default {
  data() {
    return {
      date_status,
      data: [],
      loading: true,
      rowClick: record => ({
        on: {
          click: ()=> {
            this.$router.push({path: "/contest/", name: "contestDetail", params: {contest: record}})
          }
        }
      }),
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
    getDate(startDate ,endDate) {
      let str = this.$moment(endDate).format("YYYY-MM-DD HH:mm:ss")
      let str2 = this.$moment(startDate).format("YYYY-MM-DD HH:mm:ss")
      str = str.replace(/-/g, "/");
      str2 = str2.replace(/-/g, "/");
      var date = new Date(str);
      var date2 = new Date(str2);
      let deadline = date
      let startTime = date2;
      let now = new Date();
      if (now >= deadline) {
          return -1;
      } else if (now < startTime) {
          return 2;
      } else {
          return 1;
      }
    }
  },
  mounted() {
    this.findByPagination(1, 10);
  }
};
</script>
