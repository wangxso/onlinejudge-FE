<template>
    <a-card title="编辑公告">
        <a-form-model :model="record">
            <a-form-item label="标题">
                <a-input v-model="record.title"></a-input>
            </a-form-item>
            <a-form-item label="内容">
                <mavon-editor @change="changeContent" v-model="record.contentMd"></mavon-editor>
            </a-form-item>
            <a-form-model-item style="float: right">

                <a-button v-if="newCode == 1" type="primary" @click="addNew">
                    提交
                </a-button>
                <a-button v-else type="primary" @click="onSubmit">
                    提交
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </a-card>
</template>

<script>
    export default {
        name: "AnnounceEdit",
        props: ['record'],
        data() {
            return{
                newCode: 0
            }
        },
        methods: {
            changeContent(value, render){
                this.record.contentHtml = render
            },
            onSubmit(){
                this.$api.announce.update(this.record).then(res => {
                     if (res.code === 0) {
                         this.$message.success(res.data)
                         this.$router.push("/admin/announce")
                     } else {
                         this.$message.error(res.msg)
                     }
                })
            },
            addNew(){
                const uid = this.$store.state.user.uid;
                this.record.uid = uid;
                this.$api.announce.add(this.record).then(res => {
                    if (res.code === 0) {
                        this.$message.success(res.data);
                        this.$router.push("/admin/announce")
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.newCode = this.$route.query.new;
        }
    }
</script>

<style scoped>

</style>