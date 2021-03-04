<template>
    <div>
        <a-card title="问题" :bordered="false">
            <a-table
                    :data-source="problemList"
                    :loading="loading"
                    rowKey="pid"
                    :customRow="rowClick"
            >
                <a-table-column key="pid" width="2" title="PID" data-index="pid"/>
                <a-table-column key="title" title="Title" data-index="title">
                    <template slot-scope="title" >
                        <a href="#">{{title}}</a>
                    </template>

                </a-table-column>
                <a-table-column key="totalSubmit" title="Total" data-index="totalSubmit" />
                <a-table-column key="pass" title="AC" data-index="pass" />
            </a-table>
        </a-card>
    </div>
</template>

<script>
    export default {
        props: ['problems', 'contest'],
        data() {
            return {
                problemList: [],
                loading: true,
                rowClick: record => ({
                    on: {
                        click: ()=> {
                            this.$router.push("/contest/problem/"+record.pid+"/"+this.contest.cid)
                        }
                    }
                })
            }
        },
        methods: {
            getProblemList(){
                for (const i in this.problems){
                    this.$api.problem.findProblemByPid(this.problems[i]).then(res => {
                         if (res.code === 0) {
                             this.problemList.push(res.data.problem)
                         } else {
                             this.$message.error(res.msg)
                         }
                    })
                }
                this.loading = false
            },

        },
        mounted() {
            this.getProblemList()
        },

    }
</script>

<style scoped>

</style>