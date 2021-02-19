<template>
    <div>
        <a-button size="small" type="primary" @click="() => (this.visible2 = true)">
            添加用户
        </a-button>
        <a-popconfirm
                title="您确定要删除这些用户？"
                ok-text="Yes"
                cancel-text="No"
                @confirm="deleteUsers()"
        >
            <a-button size="small" type="danger" style="margin-left: 30px">
                删除所选用户
            </a-button>
        </a-popconfirm>

        <a-table
                :loading="loading"
                :columns="columns"
                :data-source="userList"
                :pagination="ipagination"
                :row-selection="rowSelection"
                @change="handleTableChange">

            <span slot="authority" slot-scope="authority">
                  <a-tag
                          :key="authority"
                          :color="authorityTagconfig[authority].color"
                  >
                    {{ authorityTagconfig[authority].name }}
                  </a-tag>
            </span>
            <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                    <a  @click="() => openMoral(record)">Edit</a>
                </div>
            </template>
        </a-table>
        <a-modal
                v-model="visible"
                title="修改用户信息"
                centered
                @ok="() => submitChange()"
                :model="user"
        >
            <a-form layout="horizontal">
                <a-form-item
                        label="username"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="user.username" />
                </a-form-item>
                <a-form-item
                        label="email"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="user.email" />
                </a-form-item>
                <a-form-item
                        label="tel"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="user.tel" />
                </a-form-item>
                <a-form-item
                        label="level"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="user.level" />
                </a-form-item>
                <a-form-model-item label="Authority">
                    <a-radio-group v-model="user.authority">
                        <a-radio :value="0">
                            普通用户
                        </a-radio>
                        <a-radio :value="1">
                            管理员
                        </a-radio>
                        <a-radio :value="2">
                            封禁用户
                        </a-radio>
                    </a-radio-group>
                </a-form-model-item>
            </a-form>
        </a-modal>
        <a-modal
                v-model="visible2"
                title="修改用户信息"
                centered
                @ok="() => addUser()"
                :model="form"
        >
            <a-form layout="horizontal">
                <a-form-item
                        label="username"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="form.username" />
                </a-form-item>
                <a-form-item label="password">
                    <a-input-password v-model="form.password" />
                </a-form-item>
                <a-form-item
                        label="email"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="form.email" />
                </a-form-item>

                <a-form-item
                        label="tel"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="form.tel" />
                </a-form-item>

                <a-form-item
                        label="level"
                        :label-col="4"
                        :wrapper-col="14"
                >
                    <a-input v-model="form.level" />
                </a-form-item>

                <a-form-model-item label="Authority">
                    <a-radio-group v-model="form.authority">
                        <a-radio :value="0">
                            普通用户
                        </a-radio>
                        <a-radio :value="1">
                            管理员
                        </a-radio>
                        <a-radio :value="2">
                            封禁用户
                        </a-radio>
                    </a-radio-group>
                </a-form-model-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script>
    const columns = [

        {
            title: 'username',
            dataIndex: 'username',
            scopedSlots: { customRender: 'username' },
        },
        {
            title: 'email',
            dataIndex: 'email',
            scopedSlots: { customRender: 'email' },
        },
        {
            title: 'tel',
            dataIndex: 'tel',
            scopedSlots: { customRender: 'tel' },
        },
        {
            title: 'level',
            dataIndex: 'level',
            scopedSlots: { customRender: 'level' },
        },
        {
            title: 'authority',
            dataIndex: 'authority',
            scopedSlots: { customRender: 'authority' },
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
        },
    ];
    export default {
        inject: ['reload'],
        data() {
            return {
                columns,
                editingKey: '',
                defaultCurrent: 1,
                defaultPageSize: 10,
                total: 0,
                userList: {},
                visible: false,
                user: {},
                cacheUser: {},
                authorityTagconfig: [{"name": "普通用户", "color":"#108ee9"},{"name":"管理员","color":"#87d068"},{"name":"封禁用户", "color":"#f50"}],
                loading: true,
                visible2: false,
                form: {},
                ipagination: {
                    current: 1,
                    pageSize: 10,
                    pageSizeOptions: ['10', '20', '30'],
                    showTotal: (total, range) => {
                        return range[0] + '-' +range[1] + '共' + total + '条';
                    },
                    showQuickJumper: true,
                    showSizeChanger: true,
                    total: 0
                },
                selected: []
            };
        },
        methods: {
            edit(record){
              console.log(record)
            },
            getUserPagination(page, pageSize){
                this.loading = true
                this.$api.user.getUserPagination(page, pageSize).then(res => {
                    if (res.code === 0) {
                        this.userList = res.data.records
                        this.ipagination.total = res.data.total
                        this.loading = false
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            },
            handleTableChange(pagination) {
                this.ipagination.current = pagination.current;
                this.ipagination.pageSize = pagination.pageSize;
                this.getUserPagination(pagination.current, pagination.pageSize)
            },
            openMoral(record){
                this.user = record;
                this.cacheUser = record;
                this.visible = true
            },
            submitChange(){
                this.$api.user.updateUser(this.user).then(res => {
                    if (res.code === 0) {
                        this.visible = false;
                        this.reload()
                        this.$message.success(res.data)
                    } else {
                        this.visible = false;
                        this.user = this.cacheUser;
                        this.$message.error(res.msg)
                    }
                })
            },
            addUser(){
                this.$api.user.register(this.form).then(res => {
                    if (res.code === 0) {
                        this.$message.success("注册成功");
                        this.reload()
                    } else {
                        this.$message.error(res.msg);
                    }
                })
            },
            deleteUsers(){
                if (this.selected.length == 0) {
                    this.$message.error("未选择用户")
                    return;
                }
                this.$api.user.delete(this.selected).then(res => {
                    if (res.code === 0) {
                        this.$message.success(res.data)
                        this.reload()
                    } else {
                        this.$message.error(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.getUserPagination(this.defaultCurrent, this.defaultPageSize)
        },
        computed: {
            rowSelection() {
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        this.selected = selectedRows;
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                    },
                };
            },
        },
    };
</script>
<style scoped>
    .editable-row-operations a {
        margin-right: 8px;
    }
</style>
