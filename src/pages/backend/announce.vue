<template>
    <div :style="{height: height + 'px', backgroundColor: '#eee'}">
        <div class="out-wrapper">
            <a-row>
                <a-col :span="1"></a-col>
                <a-col :span="22">
                    <a-card title="公告管理" class="user-list">
                        <AnnounceManager></AnnounceManager>
                    </a-card>
                </a-col>
                <a-col :span="1"></a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    import AnnounceManager from "@/components/index/AnnounceManager";
    export default {
        name: "announce",
        data() {
            return {
                height: `${document.documentElement.clientHeight}`,
            }
        },
        components: {
            AnnounceManager
        }
    }
</script>

<style scoped>
    .out-wrapper{
        padding-top: 30px;
    }
</style>