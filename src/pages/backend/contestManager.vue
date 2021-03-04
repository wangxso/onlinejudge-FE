<template>
    <div :style="{height: height + 'px', backgroundColor: '#eee'}">
        <div class="out-wrapper">
            <a-row>
                <a-col :span="1"></a-col>
                <a-col :span="22">
                    <a-card title="比赛管理">
                        <router-view></router-view>
                    </a-card>
                </a-col>
                <a-col :span="1"></a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contentManager",
        data() {
            return {
                height: `${document.documentElement.clientHeight}`,
            }
        }
    }
</script>

<style scoped>
    .out-wrapper{
        padding-top: 30px;
    }
</style>