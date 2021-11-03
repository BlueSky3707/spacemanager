<template>
  <div class="layerSwitch">
    <div
      class="imgef item"
      @click="vectorClick"
      :style="{ zIndex: index == 1 ? 9999 : 0 }"
    >
      地图
    </div>
    <div
      class="imget item"
      @click="imageClick"
      :style="{ zIndex: index == 2 ? 9999 : 0 }"
    >
      影像
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import BaseLayerUtils from '../../../maputils/BaseLayerUtils'

export default {
  setup () {
    const state = reactive({
      index: 1
    })
    return {
      imageClick () {
       
      },
      vectorClick () {
  
      },
      ...toRefs(state)
    }
  }
}
</script>

<style>
.layerSwitch {
  width: 76px;
  height: 76px;
  position: absolute;
  bottom: 200px;
  right: 10px;
  display: flex;
  color: rgb(12, 235, 235);
  cursor: pointer;
  z-index: 999;
  border-radius: 4px;
}
.layerSwitch:hover .imget {
  transform: translateX(-72px);
}
.imgef {
  position: absolute;
  top: 0;
  right: 0;
  width: 76px;
  height: 76px;
  background-image: url("../../assets/maptype.de0b032.jpg");
  background-repeat: no-repeat;
  background-size: 76px 152px;
  background-position: top;
  border: 4px solid #fff;
  box-sizing: border-box;
  border-radius: 4px;
}
.imget {
  position: absolute;
  top: 0;
  right: 0;
  width: 76px;
  height: 76px;
  background-image: url("../../assets/maptype.de0b032.jpg");
  background-repeat: no-repeat;
  background-size: 76px 152px;
  background-position: bottom;
  transition: transform 0.5s;
  border: 4px solid #fff;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>
