<template>
  <div>
    <a-row>
      <a-col :span="18">
        <PersonalInfo></PersonalInfo>
      </a-col>
      <a-col :span="2">
      </a-col>
      <a-col :span="4">
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PersonalInfo from "@/components/personal/PersonalInfo";
  export default {
  name: "personal",
      components: {
        PersonalInfo,
      }
  }
</script>

<style scoped>

</style>