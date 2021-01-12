<template>
  <a-table :columns="columns" :data-source="data">
    <a  slot="name" slot-scope="text">{{ text }}</a>
    <span slot="tags" slot-scope="tags">
      <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "PID",
    dataIndex: 'pid',
    key: 'pid',
    scopedSlots: { customRender: 'pid' }
  },
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
    width: 80,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    ellipsis: true,
  },
  {
    title: 'AC',
    dataIndex: 'ac',
    key: 'ac',
    ellipsis: true,
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    scopedSlots: {customRender: 'tags'},
    ellipsis: true,
  }
];

const data = [
  {
    pid: '1001',
    name: 'John Brown',
    level: 32,
    total: 1233,
    ac: 12,
    tags: ['nice', 'developer'],
  },
  {
    pid: '1002',
    name: 'Jim Green',
    level: 42,
    total: 1232,
    ac: 12,
    tags: ['loser'],
  },
  {
    pid: '1003',
    name: 'Joe Black',
    level: 32,
    total: 1232,
    ac: 12,
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
