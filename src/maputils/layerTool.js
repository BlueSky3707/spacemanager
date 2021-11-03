import HxMap from './map'
import Point from '@arcgis/core/geometry/Point'
import Graphic from '@arcgis/core/Graphic'
import Measurement from '@arcgis/core/widgets/Measurement'
import { clearLayer } from '../maputils/ClearLayer'
export default class layerTool {
  static measurement = new Measurement({
    view: HxMap.HmapView
  });

  static highlight;
  static tool (index) {
    if (this.measurement !== undefined) {
      this.measurement.view = HxMap.HmapView
    }
    const pointSymbol = {
      type: 'simple-marker',
      color: [255, 0, 0],
      size: 10,
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    }
    if (index === 0) {
      HxMap.HmapView.when(function () {
        HxMap.HmapView.on('click', function (event) {
          HxMap.HmapView.hitTest(event).then(function (response) {
            const point = new Point({
              x: event.mapPoint.x,
              y: event.mapPoint.y
            })
            const pointGraphic = new Graphic({
              geometry: point,
              symbol: pointSymbol
            })
            HxMap.HmapView.graphics.add(pointGraphic)
          })
        })
      })
    } else if (index === 1) {
      this.measurement.activeTool = 'distance'
    } else if (index === 2) {
      this.measurement.activeTool = 'area'
    } else if (index === 3) {
      clearLayer.clearAllLayer()
      clearLayer.setMapExtent()
      this.measurement.clear()
    }
  }
}
