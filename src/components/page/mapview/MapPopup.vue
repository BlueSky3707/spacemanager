<template>
  <div id="mapPopupid" class="afry border" v-show="$store.state.isPopupShow" :style="{ bottom: 50 + 'px', left: 350 + 'px' }">
    <div class="top">
      <span>基础信息</span>
         <span v-if="$store.state.selectItem&&$store.state.selectItem.table==='njqn'" class="exportClass" style="padding: 7px 15px;border-radius: 8px;" @click="exportWord">
        <i class="el-icon-s-grid"></i>
      </span>
         <span v-else class="exportClass" style="padding: 7px 15px;border-radius: 8px;" @click="exportExcel">
        <i class="el-icon-s-grid"></i>
      </span>
      <span class="close" @click="close">
        <i class="el-icon-close"></i>
      </span>
    </div>
    <div class="container1">
          <div class="left"> 
            <div v-for="(item,index) in attrs.fileds" :key="index">
              <span>{{item.alias}}</span><span style="font-size:13px;" :title="zjdData[item.field]">{{zjdData[item.field]}}</span>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import DragElement from '@/utils/drag'
import store from '@/store'
import {attrs} from '@/config/arrtbuteConfig'
import  mapView from '@/maputils/map'
import {serverConfig} from '@/maputils/mapconfig'
import PrintTask from '@arcgis/core/tasks/PrintTask'
import PrintTemplate from '@arcgis/core/tasks/support/PrintTemplate'
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters'
import axios from 'axios'
export default {
  data() {
    return {
      zjdData:null ,
      attrs:[]
    }
  },
   watch: {
     '$store.state.selectItem': {
            handler(val) {
             this.zjdData= val.properties
              this.attrs= attrs[val.table]?attrs[val.table]:[]
               
            }
        }
    },
  created() {
    
  },
  mounted() {
    if(store.state.selectItem){
     this.zjdData= store.state.selectItem.properties
     this.attrs= attrs[store.state.selectItem.table]?attrs[store.state.selectItem.table]:[]
   
    }
    new DragElement(document.getElementById('mapPopupid'))
   this.inEvent()
  },
  methods: {
    close() {
     store.commit('PopupShow', false)
    },
    inEvent(){
        mapView.HmapView.when(function () {
          mapView.HmapView.on('click', function (event) {
            mapView.HmapView.hitTest(event).then(function (response) {
              if (response.results.length) {
                store.commit('PopupShow', true)
              }
            })
          })
        })
    },
    exportExcel() {
        var that=this
        require.ensure([], () => {  
          const tHeader = [];  //表格内容
          const data = [];  
          const { export_json_to_excel } = require("../../../utils/Export2Excel");
          that.attrs.fileds.forEach(item=>{
             tHeader.push(item.alias)
             data.push( that.zjdData[item.field])
          })
          export_json_to_excel(tHeader, [data], that.attrs.name);
        });
    },
    exportWord(){ 
      const printTemplate = new PrintTemplate({
        attributionVisible: false,
        exportOptions: {
          width: 1500,
          height: 937
        },
        format: 'png32',
        layout: 'map-only', 
        layoutOptions: {
          titleText: '',
          authorText: '',
          copyrightText: '',
          scalebarUnit: 'Meters',
          legendLayers: []
        }

      });
    
      const printTask = new PrintTask({
        url: serverConfig.printUrl
      })
      const view = mapView.HmapView
      const params = new PrintParameters({
        view: view,
        template: printTemplate
      })
      var that=this
      printTask.execute(params).then( (data)=> {
            if (data.url) { 
              var params={ ...that.zjdData,
               url:data.url, name:"tmp.ftl"}
             
              that.downloadWord(params)
            }else {
          that.$message({
            message: '导出错误',
            type: 'warning'
          });
        }

     }, (err) =>{
        that.$message({
          message: '导出错误',
          type: 'warning'
        });
      }
    )
  },
  // a标签下载word
  downloadWord (data) {
      var that=this;
      axios({
        method: 'post',
        url: '/postgisapi/word/exportword',
        responseType: 'blob',
        data:data
      }).then(res=>{
        var blob= res.data
          if ( res.data.size == 0 ) {
            return  that.$message({
                  message: '导出错误',
                  type: 'warning'
                });
          }
          var time = new Date().getTime();
          var aelm = document.createElement('a');
          aelm.href = URL.createObjectURL(blob);
          aelm.download = time + '.doc';
          aelm.click();
      })
      }
  }
}
</script>

<style scoped lang="scss">
.afry {
  position: fixed;
  z-index: 999999;
  background-color: #fff;
  transform: translate(-50%, 35px);
  width: 480px;
  height: 335px;
  .close {
    line-height: 11px;
    text-align: center;
    cursor: pointer;
  }
.exportClass{
  cursor: pointer;
}
  .container1 {
    padding: 0 16px;
    height: 285px;
    overflow: auto;
  }
  .top {
    width: 480px;
    height: 36px;
    background: #e3effb;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;

    span {
      &:nth-of-type(1) {
       width: 310px;
         min-height: 18px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #387aff;
      }

      &:nth-of-type(2) {
        width: 12px;
          min-height: 18px;
        color: #929292;
      }
    }
  }

  .container {
    width: 480px;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .titie {
    width: 456px;
    height: 32px;
    background: #f4f7fc;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #3682ee;
    display: flex;
    align-items: center;
    padding-left: 15px;

    span {
      &:nth-child(1) {
        width: 154px;
           min-height: 18px;
      }

      &:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
          min-height: 18px;
          // max-width: 270px;
      }

      
    }
  }
}

.content {
  width: 456px;
  height: 48px;
  background: #ffffff;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;

  span {
    &:nth-of-type(1) {
      // width: 111px;
      height: 15px;
        height: 18px;
      margin-right: 42px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-child(2) {
      // width: 95px;
        min-height: 18px;
    }

    &:nth-child(3) {
      //width: 111px;
        height: 18px;
    }
  }
}

.container1 ::v-deep .el-tabs__nav-wrap {
  padding-left: 19px;
}

.left {

  background-color: #fff;
  padding-top: 7px;
  div {
    display: flex;
    align-items: center;
    height: 32px;
    padding-left: 30px;

    &:nth-of-type(odd) {
      background: #f4f7fc;
    }

    span {
      &:nth-of-type(1) {
        width: 95px;
        height: 14px;
          height: 18px;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }

      &:nth-of-type(2) {
        font-size: 14px;
          height: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #111111;
      }
    }
  }
}
</style>
