<template>
  <a-card title="状态">
    <a-table :loading="loading" :columns="columns" :data-source="submissionList" :pagination="pagination" @change="handleTableChange">
      <a class="link-text" slot="sid" slot-scope="sid">{{sid}}</a>
      <span slot="result" slot-scope="result">
         <a-tag :color="colors[result]">{{resultText[result]}}</a-tag>
      </span>
      <a class="link-text" :href="'problems/'+pid" slot="pid" slot-scope="pid">{{pid}}</a>
      <span slot="timeCost" slot-scope="timeCost">
        <p v-if="timeCost>=0">{{timeCost}} ms</p>
        <p v-else>-</p>
      </span>
      <span slot="memoryCost" slot-scope="memoryCost">
        <p v-if="memoryCost>=0">{{Math.ceil(memoryCost/8/1024/1024)}} MB</p>
        <p v-else>-</p>
      </span>
      <span slot="language" slot-scope="language">
        {{language2Str[language]}}
      </span>
      <a class="link-text" slot="user" slot-scope="user">{{user.username}}</a>
      <template slot="createTime" slot-scope="createTime">
        {{createTime | formatDate}}
      </template>
    </a-table>
  </a-card>
</template>
<script>

const columns = [
  {
    title: 'sid',
    dataIndex: 'sid',
    key: 'sid',
    scopedSlots: {customRender: 'sid'},
    width: 200
  },
  {
    title: 'Status',
    dataIndex: 'result',
    key: 'result',
    scopedSlots: { customRender: 'result'},
    width: 200
  },
  {
    title: 'Problem',
    dataIndex: 'pid',
    key: 'pid',
    scopedSlots: {customRender: 'pid'},
    width: 200
  },
  {
    title: 'Time',
    key: 'timeCost',
    dataIndex: 'timeCost',
    scopedSlots: { customRender: 'timeCost' },
    width: 200
  },
  {
    title: 'Memory',
    key: 'memoryCost',
    dataIndex: 'memoryCost',
    scopedSlots: { customRender: 'memoryCost' },
    width: 200
  },
  {
    title: 'Language',
    key: 'language',
    dataIndex: 'language',
    scopedSlots: {customRender: "language"}
  },
  {
    title: 'Author',
    key: 'user',
    dataIndex: 'user',
    scopedSlots: {customRender: 'user'}
  },
  {
    title: 'Submit',
    key: 'createTime',
    dataIndex: 'createTime',
    scopedSlots: {customRender: 'createTime'}
  }

];

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
const language2Str = {
  "0": "C",
  "1": "C++",
  "2": "Java"
}
export default {
  inject: ['reload'],
  data() {
    return {
      columns,
      colors: answer_status,
      index: 1,
      pageSize: 10,
      submissionList: {},
      resultText: result_text,
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
      },
      loading: true,
      language2Str,
    };
  },
  methods: {
    getSubmissions(page , pageSize){
      this.$api.submission.findAllPagination(page, pageSize).then(res => {
            if (res.code === 0) {
              this.loading = false
              this.submissionList = res.data.records;
              this.pagination.total = res.data.total
            } else {
              this.$message.error(res.msg)
            }
      })
    },
    handleTableChange(pagination) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.getSubmissions(pagination.current, pagination.pageSize)
    },
  },
  mounted() {
    this.getSubmissions(this.index, this.pageSize)
  }
};
</script>

<style scoped>
  .link-text{
    color: #3838ee;
  }
</style>
