import Map from '@arcgis/core/Map'
import Basemap from '@arcgis/core/Basemap'
import MapView from '@arcgis/core/views/MapView'
import * as mapConfig from '../maputils/mapconfig'
import Extent from '@arcgis/core/geometry/Extent'
import TileLayer from '@arcgis/core/layers/TileLayer'
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
export default class HxMap {
    static HmapView;
    static addGSBaseLayer() {
      const pLayer = new TileLayer({
        url: mapConfig.serverConfig.jyyxdt,
        title: '电子地图',
        id: 'dzdt',
        visible: true,
        opacity: 1

      })
      const dwpLayer = new TileLayer({
        url: mapConfig.serverConfig.dwzyx,
        title: '影像地图',
        id: 'yxdt',
        visible: false,
        opacity: 1
      })
      const wLayer = new MapImageLayer({
        url: mapConfig.serverConfig.gsby,
        title: '区县',
        id: 'xzqx'
      })
      const stamen = new Basemap({
        baseLayers: [
          wLayer,
          pLayer,
          dwpLayer
        ]
      })
      return stamen
    }
    static async intMap (ids) {
      const layeData = this.addGSBaseLayer()
      const map = new Map({
        basemap: layeData
      })
      const mapView = new MapView({
        map: map,
     
        container: ids,
        constraints: {
        
        },
        zoom: 8,
        highlightOptions: {
          color: [255, 0, 0, 1],
          haloOpacity: 0.9,
          fillOpacity: 0.2
        },
        extent: new Extent({
          xmax: mapConfig.serverConfig.mapExtent.xmax,
          xmin: mapConfig.serverConfig.mapExtent.xmin,
          ymax: mapConfig.serverConfig.mapExtent.ymax,
          ymin: mapConfig.serverConfig.mapExtent.ymin,
          spatialReference: { wkid: 4523 }
        })
      })
      mapView.ui.remove('zoom')
      mapView.ui.remove('attribution')
      this.HmapView = mapView
      window.mapwiew=mapView
    }
  }
  