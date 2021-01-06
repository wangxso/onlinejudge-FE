<template>
  <div>
    <a-card title="问题" :bordered="false">
      <ProblemList></ProblemList>
    </a-card>
  </div>
</template>

<script>
import ProblemList from "@/components/problems/ProblemList";
export default {
  name: "Problems",
  components:{
    ProblemList
  }
}
</script>

<style scoped>

</style>