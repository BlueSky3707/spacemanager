
import HxMap from '../maputils/map'
import TileLayer from '@arcgis/core/layers/TileLayer'
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
export default class BaseLayerUtils {
  static getLayerByid (lyrid) {
    const pLayer = HxMap.HmapView.map.findLayerById(lyrid)
    return pLayer
  }

  static hideLayerByid = (lyrid) => {
    const pLayer = BaseLayerUtils.getLayerByid(lyrid)
    if (pLayer) {
      pLayer.visible = false
    }
    return pLayer
  };

  static showLayerByid = (lyrid) => {
    const pLayer = BaseLayerUtils.getLayerByid(lyrid)
    if (pLayer) {
      pLayer.visible = true
    }
    return pLayer
  };

  static addTileLayer = (turl, ids) => {
    let pLayer = new TileLayer({
      url: turl,
      id: ids
    })
    if (BaseLayerUtils.getLayerByid(ids)) {
      pLayer = BaseLayerUtils.getLayerByid(ids)
    } else {
      HxMap.HmapView.map.add(pLayer)
    }
    return pLayer
  };

  static addMapLayer = (murl, ids) => {
    let pLayer = new MapImageLayer({
      url: murl,
      id: ids
    })
    if (BaseLayerUtils.getLayerByid(ids)) {
      pLayer = BaseLayerUtils.getLayerByid(ids)
    } else {
      HxMap.HmapView.map.add(pLayer)
    }
    return pLayer
  };

  // eslint-disable-next-line no-undef
  static addFeatureLayer = (
    furl,
    ids,
    render,
    popupTemplate
  ) => {
    let pLayer = new FeatureLayer({
      url: furl,
      id: ids,
      renderer: render,
      popupTemplate: popupTemplate,
      outFields: ['*']
    })
    if (BaseLayerUtils.getLayerByid(ids)) {
      pLayer = BaseLayerUtils.getLayerByid(ids)
    } else {
      HxMap.HmapView.map.add(pLayer)
    }
    return pLayer
  };

  // eslint-disable-next-line no-undef
  static addFeatureLayerNon = (
    furl,
    ids,
    opacity,
    renderer,
    labelingInfo
  ) => {
    let pLayer = new FeatureLayer({
      url: furl,
      id: ids,
      opacity: opacity,
      renderer: renderer,
      labelingInfo: [labelingInfo],
      visible: false,
      outFields: ['*']
    })
    if (BaseLayerUtils.getLayerByid(ids)) {
      pLayer = BaseLayerUtils.getLayerByid(ids)
    } else {
      HxMap.HmapView.map.add(pLayer)
    }
    return pLayer
  };

  static addGraphicsTempLayer = (ids) => {
    let pLayer = new GraphicsLayer({
      id: ids
    })
    if (BaseLayerUtils.getLayerByid(ids)) {
      pLayer = BaseLayerUtils.getLayerByid(ids)
    } else {
      HxMap.HmapView.map.add(pLayer)
    }
    return pLayer
  };

  // 创建临时图层
  static creatGraphicLayer (id) {
    let pLayer = BaseLayerUtils.getLayerByid(id)
    if (pLayer) {
      HxMap.HmapView.map.remove(pLayer)
    }
    pLayer = new GraphicsLayer()
    pLayer.id = id
    HxMap.HmapView.map.add(pLayer)
    return pLayer
  }
}
