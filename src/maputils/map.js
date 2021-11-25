import Map from '@arcgis/core/Map'
import Basemap from '@arcgis/core/Basemap'
import MapView from '@arcgis/core/views/MapView'
import * as mapConfig from '../maputils/mapconfig'
import Extent from '@arcgis/core/geometry/Extent'
import TileLayer from '@arcgis/core/layers/TileLayer'
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer'
export default class HxMap {
    static HmapView;
    static addGSBaseLayer() {
      const dzdtLayer=new TileLayer({
        url:mapConfig.serverConfig.dzdt,
        visible:true,
        id:"dzdt"
      })
      const yxdtLayer=new TileLayer({
        url:mapConfig.serverConfig.yxdt,
        visible:false,
        id:"yxdt"

      })
      const pbaseLayer=new TileLayer({
        url:mapConfig.serverConfig.dtbaselayer
      })

      const stamen = new Basemap({
        baseLayers: [
          dzdtLayer,
          yxdtLayer,
        //  pbaseLayer
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
  