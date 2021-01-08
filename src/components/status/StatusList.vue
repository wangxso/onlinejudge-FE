<template>
  <a-card title="状态">
    <a-table :columns="columns" :data-source="data">
      <a class="link-text" slot="id" slot-scope="id">{{id}}</a>
      <span slot="status" slot-scope="status">
         <a-tag :color="colors[status]">{{status}}</a-tag>
      </span>
      <a class="link-text" slot="problem" slot-scope="problem">{{problem}}</a>
      <span slot="time" slot-scope="time">
        <p v-if="time>=0">{{time}} ms</p>
        <p v-if="time<0">-</p>
      </span>
      <span slot="memory" slot-scope="memory">
        <p v-if="memory>=0">{{Math.ceil(memory/8/1024/1024)}} MB</p>
        <p v-if="memory<0">-</p>
      </span>
      <a class="link-text" slot="author" slot-scope="author">{{author}}</a>
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
    dataIndex: 'status',
    key: 'status',
    scopedSlots: { customRender: 'status'},
    width: 200
  },
  {
    title: 'Problem',
    dataIndex: 'problem',
    key: 'problem',
    scopedSlots: {customRender: 'problem'},
    width: 200
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
    scopedSlots: { customRender: 'time' },
    width: 200
  },
  {
    title: 'Memory',
    key: 'memory',
    dataIndex: 'memory',
    scopedSlots: { customRender: 'memory' },
    width: 200
  },
  {
    title: 'Language',
    key: 'language',
    dataIndex: 'language',

  },
  {
    title: 'Author',
    key: 'author',
    dataIndex: 'author',
    scopedSlots: {customRender: 'author'}
  },
  {
    title: 'Submit',
    key: 'submit',
    dataIndex: 'submit'
  }
];

const data = [
  {
    id: '1d25d4b9bc54d',
    status: 'Accept',
    problem: 32,
    time: 63,
    memory: 10020,
    language: 'Python',
    author: 'wangx',
    submit: '2021-1-8 16:08:26'
  },
  {
    id: '2d25d4b9bc54d',
    status: 'Wrong Answer',
    problem: 42,
    time: 7,
    memory: 33333,
    language: 'C++',
    author: 'zimo',
    submit: '2021-1-8 16:05:30'
  },
  {
    id: '3d25d4b9bc54d',
    status: 'Runtime Error',
    problem: 33,
    time: -1,
    memory: -1,
    language: 'Java',
    author: 'mjj',
    submit: '2021-1-8 15:43:56'
  },
  {
    id: '4d25d4b9bc54d',
    status: 'Compiled Error',
    problem: 34,
    time: -1,
    memory: -1,
    language: 'PHP',
    author: 'yjm',
    submit: '2021-1-8 15:43:53'
  },
  {
    id: '5d25d4b9bc54d',
    status: 'Time Limit Exceeded',
    problem: 824,
    time: 2022,
    memory: 20000000,
    language: 'PHP',
    author: 'xiaodaoshi',
    submit: '2021-1-8 15:43:53'
  },
  {
    id: '5d25d4b9bc54d',
    status: 'Memory Limit Exceeded',
    problem: 824,
    time: 1100,
    memory: 3020000000,
    language: 'PHP',
    author: 'xiaodaoshi',
    submit: '2021-1-8 15:43:53'
  }
];

const answer_status = {
  'Accept': '#87d068',
  'Wrong Answer': '#ff0000',
  'Runtime Error': '#f50',
  'Compiled Error': 'pink',
  'Time Limit Exceeded': '#ff0000',
  'Memory Limit Exceeded': '#ff0000',
}
export default {
  data() {
    return {
      data,
      columns,
      colors: answer_status,
    };
  },
};
</script>

<style scoped>
  .link-text{
    color: #3838ee;
  }
</style>
