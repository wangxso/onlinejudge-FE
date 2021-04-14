<template>
    <div class="inline">
      <a-button type="primary" style="margin-right: 20px" @click="showRegister">
        Register
      </a-button>
      <a-modal  :footer="null" destroyOnClose="true" @cancel="onClose"  v-model="registerVisible" title="注册" on-ok="handleOk">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="ruleForm.email" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-row>
              <el-col :span="13"><el-input  v-model="ruleForm.tel" auto-complete="off"></el-input></el-col>
              <el-col :span="11"><el-button @click="getSmsCode('ruleForm')">获取验证码</el-button></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input  v-model="ruleForm.code" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </a-modal>
    </div>

</template>

<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validatePhone = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入手机号"));
                } else {
                    if (!/^1[3456789]\d{9}$/.test(value)) {
                        callback(new Error("请输入正确的手机号"));
                    } else {
                        callback();
                    }
                }
            };
            return {
              registerVisible: false,
              ruleForm: {
                    username: '',
                    password: '',
                    checkPass: '',
                    email: '',
                    tel: '',
                    code: '',
                    resource: '',
                    desc: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'}
                    ],
                    checkPass: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur'}
                    ],
                    email: [
                        { type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' }
                    ],
                    tel: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { validator: validatePhone, trigger: 'blur'}
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },

            };
        },
        methods: {
            showRegister(){
              this.registerVisible = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.user.register(this.ruleForm).then(res => {
                            if (res.code === 0) {
                                this.$message.success("注册成功");
                                this.registerVisible = false;
                            } else {
                                this.$message.error(res.msg)
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getSmsCode(formName){
                this.$refs[formName].validateField(['tel'], errorMessage => {
                    if (!errorMessage) {
                        this.$api.sms.getSmsCode(this.ruleForm.tel).then(res => {
                            if (res.code === 0) {
                                this.$message.success(res.data)
                            } else {
                                this.$message.error(res.msg)
                            }
                        })
                    }
                })
            },
            onClose() {
                this.registerVisible = false;
            },
        },
    };
</script>

<style>
.inline {
  display: inline-block;
}
</style>