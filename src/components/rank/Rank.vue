<template>
    <div>
        <a-card title="排名">
            <el-table
                    ref="singleTable"
                    :data="rankList"
                    highlight-current-row
                    style="width: 100%">
                <el-table-column
                        label="#"
                        width="50">
                    <template slot-scope="scope">
                        <img v-if="scope.$index < 3" :src="top3Images[scope.$index]" width="30px">
                        <span v-else>{{scope.$index + 1}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        property="username"
                        label="用户名"
                >
                </el-table-column>
                <el-table-column
                        property="pass"
                        label="AC"
                >
                </el-table-column>
                <el-table-column
                        property="total"
                        label="total">
                </el-table-column>
                <el-table-column
                    label="AcRate"
                >
                    <template slot-scope="record">
                        <el-progress width="50"  type="dashboard" :percentage="record.row.acRate" :color="colors"></el-progress>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="changePage"
                    :page-size="pagination.pageSize"
                    :total="pagination.total">
            </el-pagination>
        </a-card>
    </div>
</template>

<script>
    const listData = [];
    for (let i = 0; i < 10; i++) {
        listData.push({
            href: 'https://www.antdv.com/',
            title: `wangx ${i}`,
            ac:  `${parseInt((i)*100 + Math.random())}`,
            total: 1000,
        });
    }

    export default {
        data() {
            return {
                listData,
                top3Images:["https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210223142331.png",
                    "https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210223142355.png",
                    "https://wxoj.oss-cn-hangzhou.aliyuncs.com/20210223142422.png"
                ],
                pagination: {
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                    total: 0,
                },
                colors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ],
                rankList: {}
            };
        },
        methods: {
            changePage(value){
                this.getRankListPagination(value, this.pagination.pageSize)
            },
            getRankListPagination(page, pageSize){
                this.$api.rank.findRankPagination(page, pageSize).then(res => {
                    if (res.code === 0) {
                        this.rankList = res.data.records
                        this.pagination.total = res.data.total
                    }
                })
            }
        },
        mounted() {
            this.getRankListPagination(1, 10);
        }
    };
</script>

<style scoped>

</style>