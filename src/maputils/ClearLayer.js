import HxMap from '../maputils/map'
import router from '../router'
import * as mapConfig from './mapconfig'
import Extent from '@arcgis/core/geometry/Extent'
import layerTool from './layerTool'
class ClearLayer {
  clearAllLayer () {
    HxMap.HmapView.graphics.removeAll()
    if (layerTool.highlight) {
      layerTool.highlight.remove()
    }
    // ----清空甘肃边界图层-----------
    const pLayer = HxMap.HmapView.map.findLayerById('bybjid')
    if (pLayer) {
      pLayer.visible = false
      pLayer.definitionExpression = '1=1'
    }
    // 清空临时图层
    let tmLayer = HxMap.HmapView.map.findLayerById('tmpLayer')
    if (pLayer) {
      HxMap.HmapView.map.remove(tmLayer)
    }
    // 清空生成点的临时图层
    tmLayer = HxMap.HmapView.map.findLayerById('jylstcid')
    if (tmLayer) {
      HxMap.HmapView.map.remove(tmLayer)
    }
  }

  setMapExtent() {
    HxMap.HmapView.extent = new Extent({
      xmin: mapConfig.serverConfig.mapExtent.xmin,
      ymin: mapConfig.serverConfig.ymin,
      xmax: mapConfig.serverConfig.xmax,
      ymax: mapConfig.serverConfig.ymax,
      spatialReference: {
        wkid: 4523
      }
    })
  }

  showLayerByRouuter () {
    this.clearAllLayer()
    if (router.currentRoute.value.name === 'ydzf') {
      console.log('加载执法相关图层')
    }
  }
}
export const clearLayer = new ClearLayer()
