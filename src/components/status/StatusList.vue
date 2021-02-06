<template>
  <a-card title="状态">
    <a-table :columns="columns" :data-source="submissionList">
      <a class="link-text" slot="id" slot-scope="id">{{id}}</a>
      <span slot="result" slot-scope="result">
         <a-tag :color="colors[result]">{{resultText[result]}}</a-tag>
      </span>
      <a class="link-text" :href="'problems/'+pid" slot="pid" slot-scope="pid">{{pid}}</a>
      <span slot="timeCost" slot-scope="timeCost">
        <p v-if="timeCost>=0">{{timeCost}} ms</p>
        <p v-if="timeCost<0">-</p>
      </span>
      <span slot="memoryCost" slot-scope="memoryCost">
        <p v-if="memoryCost>=0">{{Math.ceil(memoryCost/8/1024/1024)}} MB</p>
        <p v-if="memoryCost<0">-</p>
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
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: {customRender: 'id'},
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
  '1': '#87d068',
  '-1': '#ff0000',
  '2': '#f50',
  '3': 'pink',
  '4': '#ff0000',
  '5': '#ff0000',
};

const result_text = {
  "1": "Accepted",
  "-1": "Wrong Answer",
  "2": "Runtime Error",
  "3": "Compiled Error",
  "4": "Time Limit Exceeded",
  "5": "Memory Limit Exceeded",
};
export default {
  data() {
    return {
      columns,
      colors: answer_status,
      index: 1,
      pageSize: 10,
      submissionList: {},
      resultText: result_text
    };
  },
  methods: {
    getSubmissions(){
      this.$api.submission.findAllPagination(this.index, this.pageSize).then(res => {
            if (res.code === 0) {
              this.submissionList = res.data;
            } else {
              this.$message.error(res.msg)
            }
      })
    },
  },
  mounted() {
    this.getSubmissions()
  }
};
</script>

<style scoped>
  .link-text{
    color: #3838ee;
  }
</style>
