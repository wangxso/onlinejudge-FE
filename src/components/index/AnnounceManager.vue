<template>
    <div>
        <a-card title="公告" :bordered="false">
            <a-button type="primary" @click="addNew">添加</a-button>
            <a-table :data-source="announceList">
                <a-table-column key="aid" data-index="aid" title="AID" />
                <a-table-column key="title" data-index="title" title="Title" />
                <a-table-column key="action" title="Action">
                    <template slot-scope="record">
                        <span>
                          <a @click="toEdit(record)">Edit</a>
                          <a-divider type="vertical" />
                            <a-popconfirm
                                    title="您确定要删除？"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="deleteAnnounce(record)"
                            >
                              <a >Delete</a>
                            </a-popconfirm>
                        </span>
                    </template>
                </a-table-column>
            </a-table>
        </a-card>
    </div>
</template>

<script>
export default {
name: "AnnounceManager",
    components: {},
    data() {
        return {
            announceList: null
        }
    },
    methods: {
        findAnnouncePagination(page, pageSize) {
            this.$api.announce.findAnnouncePagination(page, pageSize).then(res => {
                if (res.code === 0) {
                    this.announceList = res.data.records
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        toEdit(record){
          this.$router.push({path: "/admin/announce/edit", name: "AnnounceEdit", params: {record:record}})
        },
        addNew(){
            // noinspection JSCheckFunctionSignatures
            this.$router.push({path: "/admin/announce/edit", name: "AnnounceEdit", params: {record:{}}, query: {new: 1}})
        },
        deleteAnnounce(record){
            this.$api.announce.deleteAnnounce(record.aid).then(res => {
                 if (res.code === 0){
                     this.$message.success(res.data)
                     this.findAnnouncePagination(1, 10)
                 } else {
                     this.$message.error(res.msg)
                 }
            })
        }
    },
    mounted() {
        this.findAnnouncePagination(1, 10);
    }
}
</script>

<style scoped>

</style>