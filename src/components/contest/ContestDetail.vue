<template>
    <div>
        <a-card :title="contest.title">
            <a-tabs default-active-key="1" :tab-position="position">
                <a-tab-pane key="1" tab="主页">
                    <Index :contest="contest"></Index>
                </a-tab-pane>
                <a-tab-pane key="2" tab="题目">
                    <ProblemList :contest="contest" :problems="JSON.parse(contest.problems)"></ProblemList>
                </a-tab-pane>
                <a-tab-pane key="3" tab="提交">
                    <StatusList :cid="contest.cid"></StatusList>
                </a-tab-pane>
            </a-tabs>
        </a-card>
        <a-row style="padding-top: 20px">
            <a-col :span="21"></a-col>
            <a-col :span="3">
                <a-card style="background-color: #409EFF">
                    <a-statistic-countdown
                            title="距离比赛结束"
                            :value="contest.endDate"
                            format="HH:mm:ss:SSS"
                            style="padding-left: 15%;"
                    />
                </a-card>
            </a-col>
        </a-row>

    </div>
</template>

<script>
    import Index from "./common/Index";
    import ProblemList from "./common/ProblemList";
    import StatusList from "../status/StatusList";
    export default {
        name: "ContestDetail",
        props: ['contest'],
        data() {
            return {
                position: "right"
            }
        },
        components: {
            StatusList,
            ProblemList,
            Index
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>