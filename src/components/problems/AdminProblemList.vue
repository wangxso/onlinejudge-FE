<template>
    <div>
        <a-button size="small" type="primary" @click="() => (this.$router.push('problem/edit'))">
            添加题目
        </a-button>
        <a-table
                :loading="loading"
                :columns="columns"
                :data-source="problemList"
                :pagination="pagination"
                @change="handleTableChange">
            <template slot="operation" slot-scope="text, record">
            <div class="editable-row-operations">
                <a  @click="() => toEdit(record)">Edit</a>
            </div>
            </template>
        </a-table>
    </div>
</template>

<script>
    const columns = [
        {
          title: "pid",
          dataIndex: "pid",
          scopedSlots: {customRender: "pid"}
        },
        {
          title: "title",
          dataIndex: "title",
          scopedSlots: {customRender: "title"}
        },
        {
          title: "tags",
          dataIndex: "tags",
          scopedSlots: {customRender: "tags"}
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
        }
    ];
    export default {
        name: "AdminProblemList",
        data() {
            return{
                columns,
                loading: true,
                problemList: {},
                pagination:{
                    current: 1,
                    pageSize: 10,
                    pageSizeOptions: ['10', '20', '30'],
                    showTotal: (total, range) => {
                        return range[0] + '-' +range[1] + '共' + total + '条';
                    },
                    showQuickJumper: true,
                    showSizeChanger: true,
                    total: 0,
                }
            }
        },
        methods: {
            handleTableChange(pagination) {
                this.pagination.current = pagination.current
                this.pagination.pageSize = pagination.pageSize
                this.findProblemPagination(this.current, this.pageSize)
            },
            findProblemPagination(page, pageSize) {
                this.loading = true;
                this.$api.problem.findProblemPagination(page, pageSize).then(res => {
                    if (res.code === 0) {
                        this.problemList = res.data.records
                        this.pagination.total = res.data.total
                        this.loading = false
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            toEdit(record){
                this.$router.push({path: "problem/edit", name: "edit", params: record})
            }
        },
        mounted() {
            this.findProblemPagination(this.pagination.current, this.pagination.pageSize)
        }
    }
</script>

<style scoped>

</style>