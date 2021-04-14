<template>
    <div>
        <a-row>
            <a-col :span="19">
                <a-card :bordered="false" class="desc-box">
                    <a-descriptions :title="problem.title" layout="vertical" bordered>

                        <a-descriptions-item label="Description" :span="3">
                            <div v-html="problem.descriptionHtml">
                            </div>
                        </a-descriptions-item>
                        <a-descriptions-item label="Input" :span="3">
                            <div v-html="problem.inputDescriptionHtml">
                            </div>
                        </a-descriptions-item>
                        <a-descriptions-item label="Output" :span="3">
                            <div v-html="problem.outputDescriptionHtml">
                            </div>
                        </a-descriptions-item>
                        <a-descriptions-item label="Samples input1">
                            {{problem.samples.input}}
                        </a-descriptions-item>
                        <a-descriptions-item label="Samples output1">
                            {{problem.samples.output}}
                        </a-descriptions-item>
                        <br/>
                        <a-descriptions-item  label="提示" :span="3">
                            <div v-html="problem.hintHtml">
                            </div>
                        </a-descriptions-item>
                        <a-descriptions-item label="题目来源" :span="3">
                            {{problem.source}}
                        </a-descriptions-item>
                    </a-descriptions>
                </a-card>

                <a-card class="input-box" bordered="false">
                    <div class="select-lang">
                        <span>语言:</span>
                        <a-select default-value="0" v-model="type" style="width: 120px" @change="handleChange">
                            <a-select-option :value="0">
                                C
                            </a-select-option>
                            <a-select-option :value="1">
                                C++
                            </a-select-option>
                            <a-select-option :value="2">
                                Java
                            </a-select-option>
                        </a-select>
                    </div>
                    <!-- Two-way Data-Binding -->
                    <codemirror v-model="code" :options="options" />
                    <a-button type="primary" :loading="loading" @click="enterLoading" style="float: right;margin-top: 20px">
                        提交
                    </a-button>
                </a-card>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="4">
                <a-card :bordered="false" >
                    <template slot="title">
                        数据
                    </template>
                    <span>
                        ID: {{problem.pid}}
                        <br/>
                        Time Limit: {{problem.timeLimit}} ms
                        <br/>
                        Memory Limit: {{Math.ceil(problem.memoryLimit/8/1024/1024)}} M
                        <br/>
                        Created By: {{problem.user.username}}
                        <br/>
                        Level: {{problem.level | levelFilter}}
                    </span>
                </a-card>
                <a-card title="题目详情" class="pie">
                  <ProblemSubPieChart :pid="pid"></ProblemSubPieChart>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    // 核心样式
    import 'codemirror/lib/codemirror.css'
    // 引入主题后还需要在 options 中指定主题才会生效
    import 'codemirror/theme/rubyblue.css'
    require("codemirror/mode/clike/clike.js")
    require("codemirror/mode/javascript/javascript.js")
    require("codemirror/mode/xml/xml.js")
    require("codemirror/mode/vue/vue.js")
    require("codemirror/mode/python/python.js")
    require("codemirror/mode/css/css.js")
    require("codemirror/mode/sql/sql.js")
    require("codemirror/mode/shell/shell.js")
    import ProblemSubPieChart from "@/components/problems/ProblemSubPieChart";
    export default {
        name: "ProblemDetail",
        props:['pid'],
        components: {
            codemirror,
            ProblemSubPieChart
        },
        data(){
            return{
                type: 0,
                problem: {},
                code: '', // 编辑器绑定的值
                // 默认配置
                options: {
                    tabSize: 2, // 缩进格式
                    theme: 'rubyblue', // 主题，对应主题库 JS 需要提前引入
                    lineNumbers: true, // 显示行号
                    line: true,
                    mode: 'text/x-c++src',
                    styleActiveLine: true, // 高亮选中行
                    hintOptions: {
                        completeSingle: true // 当匹配只有一项的时候是否自动补全
                    }
                },
                loading: false,
            }
        },
        methods: {
            getProblem(){
                this.$api.problem.findProblemByPid(this.pid).then(res => {
                    if (res.code === 0) {
                        this.problem = res.data.problem;
                        // 题目不可显示
                        if (!this.problem.visible) {
                            this.problem = null
                        }
                        this.problem.user = res.data.user
                        const samples = this.problem.samples;
                        this.problem.samples = JSON.parse(samples)
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            handleChange(value) {
                if (value === 0 || value === 1) this.options.mode = "text/x-c++src"
                else if (value === 2) this.options.mode = "text/x-java"
            },
          enterLoading: function () {
            if (this.code === "") {
              this.$message.error("代码不能为空");
              this.loading = false;
              return;
            } else if (this.$store.state.user === null) {
              this.$message.error("用户未登录");
              return;
            }

            this.loading = true;

            const submission = {
              "code": this.code,
              "type": this.type,
              "uid": this.$store.state.user.uid,
              "pid": this.problem.pid,
              "language": this.type
            }


            this.openNotification('rightBottom')
            this.$api.submission.submitAnswer(submission, this.problem.pid).then(res => {
                  if (res.code === 0) {
                    this.$message.success("提交成功")
                    this.loading = false;
                  } else {
                    this.$message.error(res.msg)
                    this.loading = false;
                  }
            })
          },
          openNotification(placement){
              const message = "已提交，等待判题"
              this.$notification.open({
                key: 'updatable',
                message: message,
                description: message,
                placement,
                icon:     <a-icon type="sync" spin />
              });
          }
        },
        mounted() {
            this.getProblem();
        },
        filters: {
            levelFilter: function (value) {
                if (value===0) {
                    return "Easy"
                } else if (value === 1) {
                    return "Mid"
                } else if (value === 2) {
                    return "Hard"
                } else {
                    return ""
                }
            },
        },
    }
</script>

<style scoped>
    .ant-descriptions .ant-descriptions-title{
        color: #39a0ef;
    }
    .select-lang{
        margin-bottom: 20px;
    }
    .pie{
      margin-top: 50px;
    }
</style>