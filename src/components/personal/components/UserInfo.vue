<template>
  <el-form :model="user" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
          label="用户名"
      >
        <el-input :disabled="true" v-model="user.username"></el-input>
      </el-form-item>
    <el-form-item
        label="邮箱"
    >
      <el-input :disabled="true" v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item
        label="手机号"
    >
      <el-input :disabled="true" v-model="user.tel"></el-input>
    </el-form-item>
    <el-form-item
        label="分数"
    >
      <el-input :disabled="true" v-model="user.level"></el-input>
    </el-form-item>
    <el-form-item
        label="账户角色"
    >
      <el-tag style="color: #303133" :color="authority_list[user.authority].color">{{authority_list[user.authority].type}}</el-tag>
    </el-form-item>
  </el-form>
</template>
<script>
const authority_list = [
  {'type': '普通用户', 'color': '#409EFF'},
  {'type': '管理员', 'color': '#67C23A'},
  {'type': '封禁用户', color: '#F56C6C'}
]
export default {
  props: ['user'],
  data() {
    return {
      authority_list
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>