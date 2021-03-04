<template>
    <div>
        <a-form-model :model="record">
            <a-form-item label="标题">
                <a-input v-model="record.title"></a-input>
            </a-form-item>
            <a-form-item label="比赛起始时间">
                <el-date-picker
                        v-model="value"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </a-form-item>
            <a-form-model-item style="float: right">
                <a-button @click="updateContest"  type="primary">
                    提交
                </a-button>
            </a-form-model-item>
        </a-form-model>
        <div>
            <a-transfer
                    :data-source="data"
                    :target-keys="targetKeys"
                    :disabled="disabled"
                    :show-search="showSearch"
                    :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
                    :show-select-all="false"
                    @change="onChange"
            >
                <template
                        slot="children"
                        slot-scope="{
                        props: { direction, filteredItems, selectedKeys, disabled: listDisabled },
                        on: { itemSelectAll, itemSelect },
                        }"
                >
                    <a-table
                            :row-selection="
                            getRowSelection({ disabled: listDisabled, selectedKeys, itemSelectAll, itemSelect })
                            "
                            :columns="direction === 'left' ? leftColumns : rightColumns"
                            :data-source="filteredItems"
                            size="small"
                            :style="{ pointerEvents: listDisabled ? 'none' : null }"
                            :custom-row="
                              ({ key, disabled: itemDisabled }) => ({
                              on: {
                                click: () => {
                                  if (itemDisabled || listDisabled) return;
                                  itemSelect(key, !selectedKeys.includes(key));
                                },
              },
            })
          "
                    />
                </template>
            </a-transfer>
        </div>
    </div>
</template>

<script>
    import difference from 'lodash/difference';
    const leftTableColumns = [
        {
            dataIndex: 'pid',
            title: 'PID',
        },
        {
            dataIndex: 'title',
            title: 'Title',
        },
    ];
    const rightTableColumns = [
        {
            dataIndex: 'pid',
            title: 'PID',
        },
        {
            dataIndex: 'title',
            title: "Title"
        }
    ];
    export default {
        name: "ContestEdit",
        props: ['record'],
        data() {
            return {
                value: '',
                targetKeys: [],
                disabled: false,
                showSearch: true,
                leftColumns: leftTableColumns,
                rightColumns: rightTableColumns,
                data: [],
                problemList: []
            }
        },
        methods: {
            getDate(){
                this.record.startDate = this.value[0];
                this.record.endDate = this.value[1]
            },
            updateContest(){
                this.getDate();
                this.record.problems = JSON.stringify(this.targetKeys);
                this.$api.contest.updateContest(this.record).then(res => {
                    if (res.code === 0) {
                        this.$message.success(res.data);
                        this.$router.push("/admin/contest")
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            onChange(nextTargetKeys) {
                this.targetKeys = nextTargetKeys;
            },
            getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
                return {
                    getCheckboxProps: item => ({ props: { disabled: disabled || item.disabled } }),
                    onSelectAll(selected, selectedRows) {
                        const treeSelectedKeys = selectedRows
                            .filter(item => !item.disabled)
                            .map(({ key }) => key);
                        const diffKeys = selected
                            ? difference(treeSelectedKeys, selectedKeys)
                            : difference(selectedKeys, treeSelectedKeys);
                        itemSelectAll(diffKeys, selected);
                    },
                    onSelect({ key }, selected) {
                        itemSelect(key, selected);
                    },
                    selectedRowKeys: selectedKeys,
                };
            },
            findProblemById(id){
                let result = null;
                this.$api.problem.findProblemByPid(id).then(res => {
                    if (res.code === 0) {
                        result = res.data
                    }else {
                        this.$message.error(res.msg)
                    }
                });
                return result;
            },
            getInitProblem(){
                let keys = JSON.parse(this.record.problems)
                for(let i in keys){
                    this.targetKeys.push(keys[i].toString())
                }
            },
            getProblemByPagination(page, pageSize){
                this.$api.problem.findProblemPagination(page, pageSize).then(res => {
                    if (res.code === 0) {
                        let problemList = res.data.records
                        for (let i in problemList){
                            this.data.push({
                                key: problemList[i].pid,
                                pid: problemList[i].pid,
                                title: problemList[i].title
                            })
                        }
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.getInitProblem();
            this.getProblemByPagination(1, 10);
        }
    }
</script>

<style scoped>

</style>