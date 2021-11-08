<template>
    <div>
        <div class="maptools">
            <el-button size="mini" class="toolsClass" icon="el-icon-camera" circle @click="printMap"></el-button>
            <el-button size="mini" class="toolsClass" icon="el-icon-share" circle @click="drawLine"></el-button>
            <el-button size="mini" class="toolsClass" icon="el-icon-collection-tag" circle @click="draArea"></el-button>
            <el-button size="mini" class="toolsClass" icon="el-icon-delete" circle @click="clearMap"></el-button>
        </div>
        <div class="mapchange" @click="changeGisShow">
            <img v-if="gisShow" src="../../../assets/tools/gis2.png" alt="" srcset="" style="width: 26px" />
            <img v-else src="../../../assets/tools/gis1.png" alt="" srcset="" style="width: 26px" />
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
        this.imageClick()
      } else {
        this.vectorClick()
      
      }
    },
    imageClick ()  {
      BaseLayerUtils.showLayerByid("yxdt")
      BaseLayerUtils.hideLayerByid("dzdt")
      let player=window.mapwiew.map.findLayerById("dtid")
    },
     vectorClick  ()  {
        BaseLayerUtils.showLayerByid("dzdt")
        BaseLayerUtils.hideLayerByid("yxdt")

    },
  }

}
</script>

<style>
.maptools {
    width: 147px;
    height: 35px;
    top: 40px;
    right: 10px;
    position: absolute;
    background-color: #3a93f9;
    line-height: 35px;
    padding: 2px 2px 2px 7px;
    border-radius: 8px;
}
.toolsClass:hover {
    background-color: #409eff;
    color: #efefef !important;
}
el-button.is-circle {
    height: 29px !important;
}
.mapchange {
    top: 45px;
    right: 10px;
    position: absolute;
    background-color: white;
    width: 35px;
    height: 26px;
    text-align: center;
    border-radius: 17px;
    padding: 4px 0;
    display: none;
}
</style>
