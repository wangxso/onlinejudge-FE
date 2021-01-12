<template>
  <div style="background:#ECECEC">
    <a-card title="公告" :bordered="false">
      <a slot="extra" href="#">more</a>
      <a-list item-layout="horizontal" :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
              :description = item.des
          >
            <a slot="title" href="announce?id=123">{{ item.title }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>


<script>
const data = [
  {
    title: '关于启动OJ的通知',
    des: '123'
  },
  {
    title: '开展比赛的通知',
    des: 'sss'
  },
  {
    title: '关于元旦节的放假的通知',
    des: 'sss'
  },
  {
    title: '关于开展运营的通知',
    des: 'sss'
  },
];
export default {
  name: "Announcement",
  data() {
    return {
      data,
    };
  },
}
</script>

<style scoped>

</style>