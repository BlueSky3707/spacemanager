import BaseLayerUtils from './BaseLayerUtils';
import HxMap from './map';
import TileLayer from '@arcgis/core/layers/TileLayer';
import * as serveConfig from './mapconfig'
export default  {
    showLayerByTree(arr) {
        if (arr.length) {
            arr.forEach((item) => {
                const layer = BaseLayerUtils.getLayerByid(item.layrid);
                if (layer) {
                    layer.visible = true;
                } else {
                    const layer = new TileLayer({
                        url: item.url,
                        id: item.layrid,
                        opacity: 0.8,
                        outFields: ['*']
                    });
                    HxMap.HmapView.map.add(layer);
                }
            });
        }
    },
    hideSelLayer(arr) {
        const data =serveConfig.serverConfig.layerTree
        let selData=[];
        const getChildDate = this.getChildNode(data, selData)
        if (arr) {
          const selectIdList = new Set(arr.map(row => row.layrid))
          const newArr = getChildDate.filter(jmXm => !selectIdList.has(jmXm.layrid))
          if (newArr.length && newArr) {
            newArr.forEach(itm => {
              BaseLayerUtils.hideLayerByid(itm.layrid)
            })
          }
        }
    },
    getChildNode(data,selData){
        if (data) {
            data.forEach(item => {
              if (item.children) {
                this.getChildNode(item.children, selData)
              } else {
                selData.push(item)
              }
            })
          }
          return selData
    }
}
