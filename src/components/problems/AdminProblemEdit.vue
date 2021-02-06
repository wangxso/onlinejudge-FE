<template>
    <div>
        <a-form-model :model="problem" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="题目ID">
                <a-input v-model="problem.pid" />
            </a-form-model-item>
            <a-form-model-item label="题目标题">
                <a-input v-model="problem.title" />
            </a-form-model-item>
            <a-form-model-item label="题目描述">
                <div id="main">
                    <mavon-editor v-model="problem.description"/>
                </div>
            </a-form-model-item >
            <a-form-model-item label="输入描述">
                <mavon-editor v-model="problem.inputDescription" />
            </a-form-model-item>

            <a-form-model-item label="输出描述">
                <mavon-editor v-model="problem.outputDescription"/>
            </a-form-model-item>

            <a-form-model-item label="样例描述">
                <a-input-group>
                    <a-input v-model="problem.samples" />
                </a-input-group>
            </a-form-model-item>
            <a-form-model-item label="语言">
                <a-checkbox-group v-model="problem.languages">
                    <a-checkbox value="0" name="type">
                        C
                    </a-checkbox>
                    <a-checkbox value="1" name="type">
                        C++
                    </a-checkbox>
                    <a-checkbox value="2" name="type">
                        Java
                    </a-checkbox>
                </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item label="难度">
                <a-radio-group v-model="problem.level">
                    <a-radio :value="0">简单</a-radio>
                    <a-radio :value="1">中等</a-radio>
                    <a-radio :value="2">困难</a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="时间限制">
                <a-input  suffix="ms" v-model="problem.timeLimit" />
            </a-form-model-item>
            <a-form-model-item label="内存限制">
                <a-input  suffix="b" v-model="problem.memoryLimit" />
            </a-form-model-item>
            <a-form-model-item label="提示">
                <mavon-editor v-model="problem.hint"/>
            </a-form-model-item>

            <a-form-model-item label="输入数据">
                <a-textarea v-model="testcase.input" :rows="6"/>
            </a-form-model-item>
            <a-form-model-item label="输出数据">
                <a-textarea v-model="testcase.output" :rows="6"/>
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                    提交
                </a-button>
            </a-form-model-item>
        </a-form-model>
        <div>
            <a-back-top />
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminProblemEdit",
        data() {
            return{
                problem: {},
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                form: {
                    name: '',
                    region: undefined,
                    date1: undefined,
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                testcase: {},
                mode: 1,
            }
        },
        methods: {
            onSubmit() {
                if (this.mode === 1){
                    this.update()
                } else if (this.mode === 2) {
                    this.add()
                }

            },
            update() {
                this.$api.problem.update(this.problem).then(res => {
                    if (res.code === 0) {
                        this.$message.success(res.data)
                        this.$router.push("/admin/problem")
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            add() {
                this.$api.problem.add(this.problem).then(res => {
                    if (res.code === 0) {
                        this.$message.success(res.data)
                        this.$router.push("/admin/problem")
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            findTestcase(id) {
                this.$api.testcase.findTestCaseById(id).then(res => {
                    if (res.code === 0) {
                        this.testcase = res.data
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.problem = this.$attrs
            if (this.problem == null) {
                this.mode = 2
            } else {
                this.findTestcase(this.problem.pid);
                this.mode = 1
            }
        }
    }
</script>

<style scoped>

</style>