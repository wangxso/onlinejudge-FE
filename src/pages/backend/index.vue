<template>
    <div :style="{height: height + 'px', backgroundColor: '#eee'}">
        <div class="out-wrapper" >
            <a-row>
                <a-col :span="1"></a-col>
                <a-col :span="3">
                    <a-card title="用户信息" style="width: 300px">
                        <a-avatar>{{user.username[0]}}</a-avatar>
                        <span class="username">{{user.username}}</span>

                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>

</template>

<script>

    export default {
    name: "index",
    data() {
        return {
            height: `${document.documentElement.clientHeight}`,
            user: this.$store.state.user,
            ip: ''
        }
    },
    mounted() {

    }
    }
</script>

<style scoped>
    .out-wrapper{
        padding-top: 50px;
    }

    .username{
        float: right;
        padding-right: 30%;
        padding-top: 2%;
        color: #39a0ef;
    }
</style>