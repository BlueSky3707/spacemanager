<template>
<div class="maptools">  
    <el-button size="mini" class="toolsClass"  icon="el-icon-share" circle @click="drawLine"></el-button>
    <el-button size="mini" class="toolsClass"  icon="el-icon-collection-tag" circle @click="draArea"></el-button>
    <el-button size="mini" class="toolsClass"  icon="el-icon-delete" circle @click="clearMap"></el-button>
</div>
</template>
<script>
import  layerTool from '../../../maputils/layerTool'
export default {
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
    }
  }

}
</script>

<style>
.maptools{
    width: 110px;
    height: 40px;
    top: 2px;
    right:10px;
    position:absolute;
}
.toolsClass:hover{
  background-color:  #409EFF;
   color:#efefef !important;
}
el-button.is-circle {
    height: 29px!important;
}
</style>
