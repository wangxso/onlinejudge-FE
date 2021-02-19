<template>
    <div>
        <a-card>
            <a-tabs default-active-key="1" :tab-position="position">
                <a-tab-pane key="1" tab="主页">
                    <Index :contest="contest"></Index>
                </a-tab-pane>
                <a-tab-pane key="2" tab="题目">
                    Content of Tab 2
                </a-tab-pane>
                <a-tab-pane key="3" tab="提交">
                    Content of Tab 3
                </a-tab-pane>
            </a-tabs>
        </a-card>
    </div>
</template>

<script>
    import Index from "./common/Index";
    export default {
        name: "ContestDetail",
        props: ['contest'],
        data() {
            return {
                position: "right"
            }
        },
        components: {
            Index
        }
    }
</script>

<style scoped>

</style>