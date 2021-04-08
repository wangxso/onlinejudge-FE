<template>
  <el-card title="状态">
    <a-button v-if="cid != null" type="primary" @click="getSubmissionForContest(cid, index, pageSize)">刷新</a-button>
    <el-table :data="submission" >
      <el-table-column label="SID">
        <template slot-scope="scope">
          <el-link @click="toDetail(scope.row)" v-if="uid === scope.row.user.uid"  type="primary">{{scope.row.sid}}</el-link>
          <span v-else>{{scope.row.sid}}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="结果"
          :filters="result_text_filter"
          :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <a-tag :color="answer_status[scope.row.result]">
            {{result_text[scope.row.result]}}
          </a-tag>
        </template>
      </el-table-column>
      <el-table-column label="题目">
        <template slot-scope="scope">
          <el-link type="primary" :href="'/problems/' + scope.row.pid">{{scope.row.pid}}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="语言">
        <template slot-scope="scope">
          {{language2Str[scope.row.language]}}
        </template>
      </el-table-column>
      <el-table-column label="耗时(ms)" prop="timeCost">
      </el-table-column>
      <el-table-column label="内存">
        <template slot-scope="scope">
          {{Math.ceil(scope.row.memoryCost/8/1024)}}&nbsp;MB
        </template>
      </el-table-column>
      <el-table-column label="作者">
        <template slot-scope="scope">
          <el-tag size="medium">
            <el-link type="primary">{{scope.row.user.username}}</el-link>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="提交时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{scope.row.createTime | formatDate}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
            style="float: right;padding: 10px;"
            background
            @current-change="handlePageChange"
            :current-page="page"
            :page-size="pageSize"
            layout="total, prev, pager, next"
            :total="total">
    </el-pagination>
  </el-card>
</template>
<script>
const answer_status = {
  "-1": "blue",
  '1': '#87d068',
  '2': '#ff0000',
  '3': '#f50',
  '4': 'pink',
  '5': '#ff0000',
  '6': '#ff0000',
  '7': "#f50",
  "8": "#f50",
  "9": "#f50"
};

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

const result_text_filter = [
  {'text': 'Pending', "value": -1},
  {'text': 'Accepted', "value": 1},
  {'text': 'Wrong Answer', "value": 2},
  {'text': 'Runtime Error', "value": 3},
  {'text': 'Output Limit Exceeded', "value": 4},
  {'text': 'Memory Limit Exceeded', "value": 5},
  {'text': 'Time Limit Exceeded', "value": 6},
  {'text': 'Presentation Error', "value": 7},
  {'text': 'System Error', "value": 8},
  {'text': 'Compile Error', "value": 9},
];
const language2Str = {
  "0": "C",
  "1": "C++",
  "2": "Java"
}
export default {
  name: "StatusList",
  inject: ['reload'],
  props: ['cid'],
  components: {
  },
  data() {
    return {
      submission: {},
      answer_status,
      language2Str,
      result_text,
      result_text_filter,
      total: 0,
      page: 1,
      pageSize: 10,
      uid: ''
    };
  },
  methods: {
    getSubmissions(page , pageSize){
      this.$api.submission.findAllPagination(page, pageSize).then(res => {
            if (res.code === 0) {
              this.total = res.data.total;
              this.submission = res.data.records
            } else {
              console.log(res)
            }
      })
    },
    handleTableChange(pagination) {
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.getSubmissions(pagination.current, pagination.pageSize)
    },
    getSubmissionForContest(cid, page, pageSize){
      this.$api.contest.findSubmission(cid, page, pageSize).then(res => {
          if (res.code === 0) {
            this.total = res.data.total;
            this.submission = res.data.records;
          } else {
            console.log(res)
          }
      })
    },
    handlePageChange(val){
      this.page = val
      if (this.cid != null) {
        this.getSubmissionForContest(this.cid, this.page,this.pageSize)
      } else {
        this.getSubmissions(this.page, this.pageSize)
      }
    },
    toDetail(status) {
      this.$router.push({path: "detail", name: "detail", params: {status: status}})
    },
    filterHandler(value, row) {
      return row['result'] === value;
    }
  },
  created() {
    if (this.$store.state.user){
        this.uid = this.$store.state.user.uid
    }
    if (this.cid != null){
      this.getSubmissionForContest(this.cid, 1,10)
    } else {
      this.getSubmissions(1, 10)
    }
  }
};
</script>

<style>
  .link-text{
    color: #3838ee;
  }

</style>
