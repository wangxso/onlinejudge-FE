<template>
    <div>
      <a-card title="每小时提交统计表" :bordered="false">
        <Carousel></Carousel>
      </a-card>
    </div>
</template>

<script>
import Carousel from './Carousel'
export default {
  name: "content",
  components: {
    Carousel,
  }
}
</script>

<style scoped>

</style>