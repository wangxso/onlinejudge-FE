<template>
    <div>
        <a-button  type="primary" style="margin-right: 20px;" @click="showModal">
            Login
        </a-button>
        <a-modal v-model="visible" title="登录" on-ok="handleOk">
            <template slot="footer">
                <a-button type="primary" @click="handleOk">
                    登录
                </a-button>
                <a-button style="margin-left: 10px;" @click="handleCancel">
                    取消
                </a-button>
            </template>
                <a-form-model
                        ref="ruleForm"
                        :model="form"
                        :rules="rules"
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                >
                    <a-form-model-item ref="username" label="用户名" prop="username">
                        <a-input
                                v-model="form.username"
                                @blur="() => {$refs.username.onFieldBlur();}"
                        />
                    </a-form-model-item>

                    <a-form-model-item ref="password" label="密码" prop="password">
                        <a-input v-model="form.password" @blur="() => {$refs.password.onFieldBlur()}" type="password"/>
                    </a-form-model-item>

                    <a-form-model-item ref="code" label="验证码" prop="code">
                        <a-row>
                            <a-col :span="12">
                                <a-input v-model="form.code" @blur="() => {$refs.code.onFieldBlur()}" />
                            </a-col>
                            <a-col :span="12">
                                <img :src="img" @click="getVerityCode" >
                            </a-col>
                        </a-row>
                    </a-form-model-item>
                </a-form-model>
            <a-button style="float: left" type="link">
                忘记密码
            </a-button>
        </a-modal>
    </div>
</template>
<script>
    import {RECORD_USER, RECORD_TOKEN} from "@/store/mutation-types";
    import baseURL from "../../service/base-url";
    export default {
    inject:['reload'],
    props: ['loading', 'visible'],
    data() {
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            other: '',
            form: {
                username: '',
                password: '',
                code: ''
            },
            rules: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                ],
                password: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ],
                code: [
                    { required: true, message: '验证码不能为空', trigger: 'blur'}
                ]
            },
            img: baseURL+"/code/",
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.loading=true;
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$api.user.login(this.form).then(res => {
                        if (res.code === 0) {
                            this.visible = false;
                            console.log(res.data)
                            this.$store.commit(RECORD_TOKEN, res.data.token);
                            this.$store.commit(RECORD_USER, res.data.user);
                            this.reload();
                            this.$message.success(`欢迎您! `+res.data.user.username);
                        } else {
                            this.form = {username: '', password: '', code: ''};
                            this.getVerityCode();
                            this.$message.error(res.msg);
                        }
                    })
                } else {
                    this.form = {username: '', password: '', code: ''};
                    return false;
                }
            });
        },
        handleCancel() {
            this.visible = false;
        },
        getVerityCode() {
            this.img = this.img + "?num=" + Math.random()
        },
    },
    mounted() {
        this.getVerityCode()
    }
};
</script>
