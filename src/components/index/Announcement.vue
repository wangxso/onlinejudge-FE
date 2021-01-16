<template>
  <div style="background:#ECECEC">
    <a-card title="公告" :bordered="false">
      <a slot="extra" href="#">more</a>
      <a-list item-layout="horizontal" :data-source="announceList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta
              :description = item.content
          >
            <a slot="title" :href="'announce?id='+item.aid">{{ item.title }}</a>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>


<script>
export default {
  name: "Announcement",
  props: ['announceList'],
  data() {
    return {
    };
  },
}
</script>

<style scoped>

</style>