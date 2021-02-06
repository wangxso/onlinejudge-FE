<template>
    <div>
        <a-row>
            <a-col :span="3"><SideBar></SideBar></a-col>
            <a-col :span="21"><router-view /></a-col>
        </a-row>
    </div>
</template>

<script>
    import SideBar from "@/components/common/SideBar";
    export default {
        name: "App",
        components:{
            SideBar
        }
    }
</script>

<style scoped>

</style>