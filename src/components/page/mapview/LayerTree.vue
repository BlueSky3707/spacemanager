<template>

<div class="layerTree" >
<el-tree
  class="filter-tree"
  :data="data"
   show-checkbox
  :props="defaultProps"
  @node-click="handleNodeClick"
  @check-change="handleCheckChange"
  ref="tree">
</el-tree>
 </div>
</template>
<script>
import {serverConfig} from '../../../maputils/mapconfig'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import HxMap from '../../../maputils/map'
export default {
  components: {
  },
  data() {
    return {
      filterText: '',
      data: null,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    this.data = serverConfig.layerTree
  },
  methods: {
    handleNodeClick(node) {
      console.log(node)
      
    },
    handleCheckChange() {
      // const res = this.$refs.tree.getCheckedNodes()
      // const arr = []
      // res.forEach((item) => {
      //   if (item.url) {
      //     arr.push(item)
      //   }
      // })

    },
  }

}
</script>

<style>
.layerTree{
    width: 200px;
    position:fixed;
    bottom: 10px;
    right: 5px;
    height:auto;
    box-shadow: 10px 10px 5px #80a1d3;
    border: 1px solid #adadd5;
    border-radius: 5px;
}
/* .el-tree {
  background: #409eff!important;
  color: white!important;
} */
.el-tree-node__content{
  background:#3a93f9!important;
  color: white!important;
}
.el-tree-node__content:hover {
    background-color: #66b1ff!important;
     color:blue!important;    
}
.el-tree-node__content:hover:before {
    background-color: #5c6269!important;
     color:blue!important;
}
</style>
