<template>
<div id="mainid">
  <div id="mapid"></div>
</div>
</template>
<script>
import '@arcgis/core/assets/esri/themes/light-blue/main.css'
import Measurement from '@arcgis/core/widgets/Measurement'
import map from '../../../maputils/map';
import * as setProxy from '../../../maputils/setProxy';
export default {
  created() {
    setProxy.setProx()
  },
  async mounted () {
    await map.intMap('mapid')
    map.HmapView.scale = 5000
  }

}
</script>
<style>
#mainid,#mapid {
  width: 100%;
  height: 100%;
}
#maptools{
  width: 100px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
