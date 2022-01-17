<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> {{ name }} </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="keywords" placeholder="关键字搜索" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <el-button type="primary" @click="exportExcel">导出</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
                @row-click="itemClick"
                id="city_table"
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <el-table-column
                    v-for="(item, index) in tmpField" 
                    :key="index"
                    :prop="'properties.' + item.field"
                    :label="item.alias"
                    align="center"
                    :width="item.width"
               ></el-table-column>

                <!-- <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                       <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.current"
                    :page-size="query.limit"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import * as postgis from '@/api/postgis';
import store from '@/store';
export default {
    data() {
        return {
            name: '白银区-农经权',
            tmpField:null,
            fields: [
                { field: 'bsm', alias: '标识码', width: 'auto',isShow:1 },
                { field: 'ysdm', alias: '要素代码', width: 'auto',isShow:1 },
                { field: 'dkbm', alias: '地块编码', width: 'auto' ,isShow:1},
                { field: 'dkmc', alias: '地块名称', width: '120' ,isShow:1},
                { field: 'syqxz', alias: '所属权性质', width: 'auto',isShow:1 },
                { field: 'dklb', alias: '地块类别', width: 'auto',isShow:1 },
                { field: 'tdlylx', alias: '土地利用类型', width: 'auto' ,isShow:1},
                { field: 'dldj', alias: '地力等级', width: 'auto',isShow:1 },
                { field: 'sfjbnt', alias: '是否基本农田', width: 'auto' ,isShow:1},
                { field: 'scmj', alias: '实测面积', width: 'auto',isShow:1 },
                { field: 'dkxz', alias: '地块西至', width: 'auto',isShow:1 },
                { field: 'dkdz', alias: '地块东至', width: 'auto',isShow:1 },
                { field: 'dknz', alias: '地块南至', width: 'auto' ,isShow:1},
                { field: 'dkbz', alias: '地块北至', width: 'auto',isShow:1 },
                { field: 'dkbzxx', alias: '地块备注信息', width: 'auto',isShow:1 },
                { field: 'zjrxm', alias: '指界人姓名', width: 'auto' ,isShow:1},
                { field: 'kjzb', alias: '空间坐标', width: 'auto', isShow:0 },
                { field: 'scmjm', alias: '实测面积亩', width: 'auto', isShow:0}
                // { field: 'fbfbm', alias: '发包方编码', width: 'auto', isShow:0},
                // { field: 'cbjyqqdfs', alias: '承包经营权取得方式', width: 'auto', isShow:0},
                // { field: 'htmj', alias: '合同面积', width: 'auto',isShow:0 },
                // { field: 'cbhtbm', alias: '承包合同编码', width: 'auto',isShow:0 },
                // { field: 'lzhtbm', alias: '流转合同编码', width: 'auto', isShow:0},
                // { field: 'cbjyqzbm', alias: '承包经营权证编码', width: 'auto',isShow:0 },
                // { field: 'yhtmj', alias: '原合同面积', width: 'auto' ,isShow:0},
                // { field: 'htmjm', alias: '合同面积亩', width: 'auto' ,isShow:0 },
                // { field: 'yhtmjm', alias: '原合同面积亩', width: 'auto',isShow:0 },
                // { field: 'sfqqqg', alias: '是否确权确股', width: 'auto',isShow:0 },
                // { field: 'xian', alias: '县', width: 'auto',isShow:0 },
                // { field: 'xiang', alias: '乡', width: 'auto',isShow:0 },
                // { field: 'cun', alias: '村', width: 'auto' ,isShow:0},
                // { field: 'fbfmc', alias: '发包方名称', width: 'auto' ,isShow:0}

               



        //    FBFBM,发包方编码	CBFBM,承包方编码	CBJYQQDFS,承包经营权取得方式	
                // HTMJ,确权合同面积	CBHTBM,承包合同编码	LZHTBM,流转合同编码	CBJYQZBM,承包经营权证登记簿编码	
                // YHTMJ,原合同面积	HTMJM,合同面积（亩）	YHTMJM,原合同面积（亩）	SFQQQG,是否确权确股	POID,主键	
                // XIAN,县	XIANG,乡	CUN,村	FBFMC,发包方名称	CBFMC,承包方名称	TFBH,图幅编号	DCJS,调查记事	
                // DCJSR,调查记事人	DCRQ,调查日期	SCMJP,实测面积（平方米）	
                // HTMJP,合同面积（平方米）	YHTMJP,原确权合同面积（平方米）	C1,备注字段

            ],
            searchfields: ['bsm', 'ysdm', 'dkmc', 'dklb'],
            query: {
                layerName: 'byq_njq',
                isReturnGeometry: true,
                spatialRel: 'INTERSECTS',
                filter: '',
                current: 1,
                limit: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            keywords: '',
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.tmpField=this.fields.filter(itm=>itm.isShow==1)
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            postgis.search(this.query).then((res) => {
                if (res.data.data.features && res.data.data.features.length > 0) {
                   this.tableData = res.data.data.features;
                    this.pageTotal = res.data.data.totalCount || 0;
                } else {
                    this.tableData = [];
                    this.pageTotal = 0;
                }
            });
        },
        // 触发搜索按钮
        handleSearch() {
            var sql = '';
            if (this.keywords) {
                var str = [];
                this.searchfields.forEach((ite) => {
                    str.push(ite + " like'%" + this.keywords + "%'");
                });
                sql = str.join(' or ');
            }
            this.$set(this.query, 'current', 1);
            this.$set(this.query, 'filter', sql);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'current', val);
            this.getData();
        },

        exportExcel() {
            var that = this;
            require.ensure([], () => {
                const tHeader = []; //表头名
                const filterVal = []; //表头字段
                const { export_json_to_excel } = require('../../../utils/Export2Excel');
                this.fields.forEach((item) => {
                    tHeader.push(item.alias);
                    filterVal.push(item.field);
                });
                const list = that.tableData; //表格内容
                const data = that.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, that.name);
            });
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map((v) => filterVal.map((j) => v.properties[j]));
        },
        itemClick(row) {
            row.table = "njq";
            store.state.selectItem = row;
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
