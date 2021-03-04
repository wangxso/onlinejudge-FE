<template>
    <div>
        <a-statistic title="开始时间" :value="contest.startDate | formatDate" style="margin-right: 50px" />
        <a-statistic title="结束时间"  :value="contest.endDate | formatDate" />
        <a-row :gutter="16">
            <a-col :span="12">
                <a-statistic-countdown
                        title="Countdown"
                        :value="deadline"
                        style="margin-right: 50px"
                        @finish="onFinish"
                        format="HH:mm:ss:SSS"
                />
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "Index",
        props: ['contest'],
        data() {
            return {
                deadline: 0,
            }
        },
        mounted() {
            this.getDate()
        },
        methods: {
            getDate() {
                let str = this.$moment(this.contest.endDate).format("YYYY-MM-DD HH:mm:ss")
                str = str.replace(/-/g, "/");
                var date = new Date(str);
                this.deadline = date
                let now = new Date();
                if (now > this.deadline) {
                    // 返回上一页
                    this.$router.go(-1)
                }

            }
        },
    }
</script>

<style scoped>

</style>