<template>
    <div>
        <a-button type="primary">添加</a-button>
        <a-table
                :data-source="data"
                rowKey="cid"
        >
            <a-table-column key="cid" title="Cid" data-index="cid" />
            <a-table-column key="title" title="Title" data-index="title" />
            <a-table-column key="startDate" title="Start" data-index="startDate">
                <template slot-scope="startDate">
                    {{startDate | formatDate}}
                </template>
            </a-table-column>
            <a-table-column key="endDate" title="End" data-index="endDate">
                <template slot-scope="endDate">
                    {{endDate | formatDate}}
                </template>
            </a-table-column>
            <a-table-column key="tags" title="Tags" data-index="tags">
                <template slot-scope="tags">
                  <span>
                    <a-tag v-for="tag in JSON.parse(tags)" :key="tag" color="blue">{{ tag }}</a-tag>
                  </span>
                </template>
            </a-table-column>
            <a-table-column key="action" title="Action">
                <template slot-scope="record">
                        <span>
                          <a @click="toEdit(record)">Edit</a>
                          <a-divider type="vertical" />
                            <a-popconfirm
                                    title="您确定要删除？"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="deleteContest(record)"
                            >
                              <a >Delete</a>
                            </a-popconfirm>
                        </span>
                </template>
            </a-table-column>
        </a-table>
    </div>
</template>

<script>
    export default {
        name: "ContentManagerList",
        data() {
            return{
                data: [],
            }
        },
        methods: {
            findByPagination(page, pageSize){
                this.$api.contest.findContestPagination(page, pageSize).then(res => {
                    if (res.code === 0) {
                        this.data = res.data.records;
                        this.loading = false
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            deleteContest(record){
                alert(record.cid)
            },
            toEdit(record){
                this.$router.push({path: "/admin/contest/edit", name: "ContestEdit", params: {record:record}})
            },
        },
        mounted() {
            this.findByPagination(1, 10);
        }
    }
</script>

<style scoped>

</style>