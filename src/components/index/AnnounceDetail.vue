<template>
  <div style="background-color: #F5F5F5; padding: 24px;">
    <a-page-header
        :ghost="false"
        :title="announce.title"
        @back="() => $router.go(-1)"
    >
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="作者">
          {{author.username}}
        </a-descriptions-item>
        <a-descriptions-item label="创建时间">
          {{announce.createTime | formatDate}}
        </a-descriptions-item>
        <a-descriptions-item label="最后更新时间">
          {{announce.updateTime | formatDate}}
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>

    <a-card>
      <p>{{announce.content}}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ['announce', 'author'],
  methods: {

  },
  mounted() {
  }
}
</script>


<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>
