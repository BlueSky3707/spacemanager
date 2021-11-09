<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> {{name}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
            
              
                <el-input v-model="keywords" placeholder="关键字搜索" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <el-button type="primary"  @click="exportExcel">导出</el-button>
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
            <el-table-column v-for="(item,index) in fields" :key="index" :prop="'properties.'+item.field" :label="item.alias"
            align="center" :width="item.width" ></el-table-column>
  
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

import * as postgis from '@/api/postgis'
import store from '@/store'
export default {
  
    data() {
        return {
            name:"农经权",
            fields:[
                {field: "bsm", alias: "标识码",width:"auto"},
                {field: "ysdm", alias: "要素代码",width:"auto"},
                {field: "dkbm", alias: "地块编码",width:"auto"},
                {field: "dkmc", alias: "地块名称",width:"120"},
                 {field: "syqxz", alias: "所属权性质",width:"auto"},
                {field: "dklb", alias: "地块类别",width:"auto"},
                {field: "tdlylx", alias: "土地利用类型",width:"auto"},
                {field: "dldj", alias: "地力等级",width:"auto"},
                {field: "sfjbnt", alias: "是否基本农田",width:"auto"},
                {field: "scmj", alias: "实测面积",width:"auto"},
                {field: "dkxz", alias: "地块西至",width:"auto"},
                 {field: "dkdz", alias: "地块东至",width:"auto"},
                 {field: "dknz", alias: "地块南至",width:"auto"},
                {field: "dkbz", alias: "地块北至",width:"auto"},
                // {field: "dkbzxx", alias: "地块备注信息",width:"auto"},
                {field: "zjrxm", alias: "指界人姓名",width:"auto"}

            ],
            searchfields:["dkmc","dklb"],
            query: {
                layerName:"njq",
                filter:"",
                isReturnGeometry:true,
                spatialRel:"INTERSECTS",
                filter:"",
                current: 1,
                limit:10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            keywords:"",
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            postgis.search(this.query).then(res => {
                if(res.data.data.features&&res.data.data.features.length>0){
                        this.tableData = res.data.data.features;
                        this.pageTotal = res.data.data.totalCount || 0;
                }else{
                   this.tableData = [];
                        this.pageTotal =  0; 
                }
            })
        },
        // 触发搜索按钮
        handleSearch() {
            var sql=""
            if(this.keywords){
                var str=[];
                this.searchfields.forEach(ite => {
                   str.push(ite+" like'%"+this.keywords+ "%'"); 
                });
               sql= str.join(" or ")
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
          var that=this
        require.ensure([], () => {   
            const tHeader = [];  //表头名
            const filterVal = [];  //表头字段
               const { export_json_to_excel } = require("../../../utils/Export2Excel");
            this.fields.forEach(item=>{
                tHeader.push(item.alias)
                filterVal.push(item.field)
            })          
            const list = that.tableData;  //表格内容
            const data = that.formatJson(filterVal, list);  
            export_json_to_excel(tHeader, data, that.name);
        });
    },
    formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v.properties[j]));
    },
    itemClick(row){
        row.table=this.query.layerName
         store.state.selectItem=row
       this.$router.push("/")

    }

  }
}

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
