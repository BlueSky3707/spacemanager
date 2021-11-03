import HxMap from './map'
import Point from '@arcgis/core/geometry/Point'
import Graphic from '@arcgis/core/Graphic'
import Measurement from '@arcgis/core/widgets/Measurement'
import { clearLayer } from '../maputils/ClearLayer'
import {serverConfig} from './mapconfig'
import PrintTask from '@arcgis/core/tasks/PrintTask'
import PrintTemplate from '@arcgis/core/tasks/support/PrintTemplate'
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters'
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
  // 地图打印
  static startPrint = () => {
  const printTemplate = new PrintTemplate({
    attributionVisible: false,
    exportOptions: {
      // dpi: 200,
      width: 1500,
      height: 937
    },
    format: 'png32',
    layout: 'map-only', 
    layoutOptions: {
      titleText: '',
      authorText: '',
      copyrightText: '',
      scalebarUnit: 'Meters',
      legendLayers: []
    }
    //outScale: HxMap.HmapView.scale,
    // preserveScale: true,
    /// showLabels: true
  })

  const printTask = new PrintTask({
    url: serverConfig.printUrl
  })
  const view = HxMap.HmapView
  const params = new PrintParameters({
    view: view,
    template: printTemplate
  })
  var that=this
  printTask.execute(params).then( 
    function (data) {
        if (data.url) { 
          that.downloadIamge(data.url,"地图")
        } else {
          console.log("")
        }

     },function (err) {
        console.log("") 
      }
    )
}

static downloadIamge=(imgsrc, name)=> {
  let image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function() {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
    let a = document.createElement("a"); // 生成一个a元素
    let event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc;
}
}
