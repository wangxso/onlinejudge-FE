<template>
    <div>
        {{announceList}}
    </div>
</template>

<script>
export default {
name: "AnnounceManager",
    data() {
        return {
            announceList: null
        }
    },
    methods: {
        findAnnouncePagination(page, pageSize) {
            this.$api.announce.findAnnouncePagination(page, pageSize).then(res => {
                if (res.code === 0) {
                    this.announceList = res.records
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