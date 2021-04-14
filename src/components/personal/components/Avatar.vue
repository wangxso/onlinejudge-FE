<template>
  <div>
    <el-upload
        style="margin: 1%"
        class="avatar-uploader"
        :action="uploadUrl"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button type="primary" style="margin: 6%" @click="updateAvatar">确定修改</el-button>
  </div>
</template>

<script>
import baseURL from "@/service/base-url";
import {RECORD_USER} from "@/store/mutation-types";
export default {
  name: "Avatar",
  props: ['user'],
  data() {
    return {
      loading: false,
      imageUrl: '',
      uploadUrl: baseURL + 'user/avatar'
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      this.imageUrl = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    updateAvatar() {
      let tempUrl = this.user.avatar;
      this.user.avatar = this.imageUrl;
      this.$api.user.updateUser(this.user).then(res => {
          if (res.code === 0) {
            this.$store.commit(RECORD_USER, this.user);
              this.$message.success(res.data)
          } else {
            this.user.avatar = tempUrl;
            this.$message.error("serve error");
          }
      })

    },
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>