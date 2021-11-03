<template>
<div>
  <div class="maptools">  
    <el-button size="mini" class="toolsClass"  icon="el-icon-camera" circle @click="printMap"></el-button>
    <el-button size="mini" class="toolsClass"  icon="el-icon-share" circle @click="drawLine"></el-button>
    <el-button size="mini" class="toolsClass"  icon="el-icon-collection-tag" circle @click="draArea"></el-button>
    <el-button size="mini" class="toolsClass"  icon="el-icon-delete" circle @click="clearMap"></el-button>
  </div>
   <div class="mapchange" @click="changeGisShow">
        <img v-if="gisShow" src="../../../assets/tools/gis2.png" alt="" srcset="" style="width:26px" />
        <img v-else src="../../../assets/tools/gis1.png" alt="" srcset="" style="width:26px" />
    </div>
  </div>
</template>
<script>
import  layerTool from '@/maputils/layerTool'
import  BaseLayerUtils from '@/maputils/BaseLayerUtils'
export default {
  data(){
    return{
      gisShow:false
    }
  },
  created() {

  },
  methods: {
    zoomClick() {

    },
    drawLine() {
      layerTool.tool(1)
    },
    draArea() {
      layerTool.tool(2)
    },
    clearMap() {
      layerTool.tool(3)
    },
    printMap(){
      layerTool.startPrint()
    },
    changeGisShow (){
      this.gisShow = !this.gisShow
      if (this.gisShow) {
        this.vectorClick()
      } else {
        this.imageClick()
      }
    },
    imageClick ()  {
      BaseLayerUtils.showLayerByid("yxdt")
      BaseLayerUtils.hideLayerByid("dzdt")

    },
     vectorClick  ()  {
        BaseLayerUtils.showLayerByid("dzdt")
        BaseLayerUtils.hideLayerByid("yxdt")
       
    },
  }

}
</script>

<style>
.maptools{
       width: 147px;
    height: 35px;
    top: 3px;
    right: 10px;
    position: absolute;
    background-color: #3a93f9;
    line-height: 35px;
    padding: 0px 2px 2px 7px;
    border-radius: 8px;

}
.toolsClass:hover{
  background-color:  #409EFF;
   color:#efefef !important;
}
el-button.is-circle {
    height: 29px!important;
}
.mapchange{
top: 45px;
    right: 10px;
    position: absolute;
    background-color: white;
    width: 35px;
    height: 28px;
    text-align: center;
    border-radius: 17px;
    padding: 4px 0;
}
</style>
