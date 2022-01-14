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
            align="center" :width="item.width"></el-table-column>
  
               
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
            name:"靖远县-林地",
            fields:[
                {field: "sheng", alias: "所在省",width:"auto"},
                {field: "shi", alias: "所在市",width:"auto"},
                {field: "xian", alias: "所在县",width:"auto"},
                 {field: "xiang", alias: "所在乡",width:"auto"},
                {field: "cun", alias: "所在村",width:"auto"},
                {field: "tfh", alias: "图幅号",width:"auto"},
                {field: "xingming", alias: "姓名",width:"auto"}
  
// lin_ye_ju	
// lin_chang	
// ylq		
// lin_ban	
// xiao_ban	
// lindi_dw	
// bgeng_dw	
// g_gyldw	
// baohu_qu	
// gong_yuan	
// sd_g_yuan	
// sm_g_yuan	
// gn_fqu	
// g_dwbh	
	
// wph		
	
// riqi	
// shuixi	
// di_mao	
// haiba	
// po_xiang	
// po_wei	
// po_du	
// g_shtqw	
// g_qwfw	
// g_qwmc	
// ke_ji_du	
// tu_rang_lx	
// tu_ceng_hd	
// mian_ji	nume
// pm_mianji	
// q_ld_qs	
// ld_qs	
// q_lm_qs	
// lm_qs	
// q_di_lei	
// di_lei	
// lq_di_lei	
// gllx	
// gl_di_lei	
// ll_jz	
// q_l_z	
// lin_zhong	
// q_sen_lb	
// sen_lin_lb	
// qi_yuan	
// qljg	
// zrdu	
// diaocha	
// you_shi_sz	
// yu_bi_du	
// bcl_chl	nume
// shuzh_zc	
// nianling	
// ling_ji	
// ling_zu	
// q_sq_d	
// shi_quan_d	
// g_leixing	
// g_bcqsnd	
// g_bj_tc	
// gjgyl_bhdj	
// shangp_dj	
// pingjun_xj	
// pingjun_sj	
// huo_lmgqxj	
// mei_gq_zs	
// zl_dj	
// q_gc_lb	
// g_cheng_lb	
// g_cheng_n	
// g_cheng_ns	
// g_cheng_np	
// g_zlfs	
// g_zlnd	
// hdbw_zl	
// hdbw_gd	
// ld_hs	
// ld_kd	
// ld_cd	
// kejidu	
// ccl_dj	
// djjm_dj	
// linmu_zl
// jingji_zu	
// jjl_zl	
// jjl_cq	
// jjl_mcl	
// jjl_zcl	
// gxdc_sz	
// gxdc_gao	
// gxdc_yzs	
// gxdc_mzs	
// gxdc_dj	
// qxb_zs	
// qxb_xj	
// ssm_zs	
// ssm_xj	
// sps_zs	
// sps_xj	
// td_th_lx	
// hmh_lx	
// sh_lx	
// sh_chd	
// sd_lx	
// sd_dj	
// dispe	
// disaster_c	
// jiank_dj	
// jy_hd	
// jy_yj	
// bcld	
// sfnrld	
// q_bh_dj	
// bh_dj	
// lyfq	
// qykz	
// sfzy	
// ldszs	
// gh_lz	
// gh_sllb	
// gh_gjjbhdj	
// gh_bhdj	
// gh_slmj_zj	
// bhyy	
// bhnd	
// g_lqzh	
// g_lqzh_gs	
// g_xyshu	
// g_sbarea
// g_xbhs	
// rem_gyl	
// remarks	
// dblink	
// mzarea	
// wyguid	
// g_cheng_dl	
// g_cheng_id	
// jingying	
// gx_bj	
// gtxjlx	
// gtdl	
// shape_chan	
// zyzsgcmc	
// zygjgy_mj	
// shsp_wh	varc
// b01	
// b02	
// b03	
// b04	
// b05	
// b06	
// b07	
// b08	
// b09	
// bgyj
// q_gllx	
// ldyzt_xb	
// eldc_xb	
// tdsyqs	
// lmsyqs	
// lq_qlr	
// ybhdj	
// sf_tbq	
// sf_tghl	
// tghl_nd	
// jdsh	
// gh_xy	
// shif_ld	
// shif_fhbz	
// shif_gbyt	
// chuli_yx	
// beizhu	
// tclx	
// ntcgylyysm	
// nnrgyllx	
// qg_di_lei	
// qg_td_qs	
// qg_lm_qs	
// qg_stqw	
// qg_xbh	
// qg_sen_lb	
// qg_leixing	
// qg_shqdj	
// shbao_dl	
// shbao_mj	
// hd_dl	
// hd_mj	
// mj_heshi	
// hd_lz	
// hd_shuzh	
// hd_gclb	
// hd_clnd	
// hd_zlnd	
// hd_fynd	
// hd_fylx	
// hd_ybd	
// shbao_shmj	
// shbao_shyy	
// hd_shmj	
// hd_shyy	
// hd_beizhu	

            ],
            searchfields:["zddm","zl","zldwmc"],
            query: {
                layerName:"jyx_ld",
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
         row.table="ld"
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
