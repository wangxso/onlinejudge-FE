<template>
    <div>
        <a-button size="small" type="primary" @click="() => (this.$router.push({path:'problem/edit',params: {problem: {}}, query: {'mode': 2}}))">
            添加题目
        </a-button>
        <a-table
                :loading="loading"
                :columns="columns"
                :data-source="problemList"
                :pagination="pagination"
                @change="handleTableChange">
            <template slot="tags" slot-scope="tags">
              <a-tag v-for="tag in JSON.parse(tags)" :key="tag" color="#2db7f5">
                {{tag}}
              </a-tag>
            </template>
            <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                    <a  @click="() => toEdit(record)">Edit {{text}}</a>
                </div>
            </template>
            <template slot="visible" slot-scope="visible, record">
                <div>
                    <a-switch :checked="visible" @change="onchange(checked, record)"></a-switch>
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
        },
        {
            title: 'visible',
            dataIndex: 'visible',
            scopedSlots: { customRender: 'visible' },
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
                this.$api.problem.findProblemPaginationAdmin(page, pageSize).then(res => {
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
                this.$router.push({path: "problem/edit", name: "edit", params: {problem: record}, query: {"mode": 1}})
            },
            onchange(checked, record){
                record.visible = !record.visible
                this.$api.problem.update(record).then(res => {
                    if (res.code === 0) {
                        this.$message.success("修改成功")
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.findProblemPagination(this.pagination.current, this.pagination.pageSize)
        }
    }
</script>

<style scoped>

</style>