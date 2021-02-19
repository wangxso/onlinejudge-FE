<template>
    <a-modal :footer="null" v-model="registerVisible" title="注册" on-ok="handleOk">
    <a-form :form="form" @submit="handleSubmit">
        <a-form-item v-bind="formItemLayout" label="用户名">
            <a-input
                    v-decorator="[
          'username',
          {
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="邮箱">
            <a-input
                    v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
            <a-input
                    v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
                    type="password"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
            <a-input
                    v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
                    type="password"
                    @blur="handleConfirmBlur"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="手机号">
            <a-input
                    v-decorator="[
          'tel',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          },
        ]"
                    style="width: 100%"
            >
                <a-select
                        slot="addonBefore"
                        v-decorator="['prefix', { initialValue: '86' }]"
                        style="width: 70px"
                >
                    <a-select-option value="86">
                        +86
                    </a-select-option>
                </a-select>
            </a-input>
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                label="验证码"
                extra="We must make sure that your are a human."
        >
            <a-row :gutter="8">
                <a-col :span="12">
                    <a-input
                            v-decorator="[
              'captcha',
              { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
            ]"
                    />
                </a-col>
                <a-col :span="12">
                    <a-button>获取验证码</a-button>
                </a-col>
            </a-row>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
                I have read the
                <a href="">
                    agreement
                </a>
            </a-checkbox>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
            <a-button type="primary" html-type="submit">
                Register
            </a-button>
        </a-form-item>
    </a-form>
    </a-modal>
</template>

<script>
    export default {
        props: ['registerVisible'],
        data() {
            return {
                confirmDirty: false,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 8 },
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 16 },
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'register' });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        this.$api.user.register(values).then(res => {
                            if (res.code === 0){
                                this.registerVisible = false;
                                this.$message.success("注册成功")
                            } else {
                                this.$message.error(res.msg)
                            }
                        })
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },
        },
    };
</script>