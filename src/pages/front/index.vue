<template>
  <div>
    <Content id="index-content" />
    <Announcement id="announce"></Announcement>
  </div>
</template>

<script>
import Content from "@/components/index/Content";
import Announcement from "@/components/index/Announcement";
export default {
  name: "index",
  components: {
    Content,
    Announcement,
  }
}
</script>

<style scoped>
#announce {
  padding-top: 20px;
}

#index-statistic{
  float: right;
}
</style>