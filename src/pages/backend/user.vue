<template>
    <div :style="{height: height + 'px', backgroundColor: '#eee'}">
        <div class="out-wrapper">
            <a-row>
                <a-col :span="1"></a-col>
                <a-col :span="22">
                    <a-card title="用户管理" class="user-list">
                        <UserList></UserList>
                    </a-card>
                </a-col>
                <a-col :span="1"></a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    import UserList from "@/components/user/UserList";
    export default {
        name: "User",
        data() {
            return{
                height: `${document.documentElement.clientHeight}`,
            }
        },
        components: {
            UserList
        },
        methods: {
        }
    }
</script>

<style scoped>
    .out-wrapper{
        padding-top: 30px;
    }
</style>