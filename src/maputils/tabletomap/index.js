import mapView from '@/maputils/map'
import store from '@/store'
import Point from '@arcgis/core/geometry/Point'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
var abc=['A','B','C','D','E','F','G']
export const drawGeom=(item)=>{
    if(item.geometry){
        mapView.HmapView.graphics.removeAll();
        var graphic=null;
     if(item.geometry.type.toLowerCase()==="point"){
         var point=new Point(item.geometry.coordinates)
         point.spatialReference=  {latestWkid:4523,wkid: 4523 } ;
         graphic= new Graphic({geometry: point,
                symbol: {type: 'simple-marker',
                        color: [255, 0, 0],
                        size: 10,
                        outline: {
                            color: [255, 255, 255],
                            width: 1
                        }
                },
                attributes:item.properties
            })
            mapView.HmapView.center= point     
     }else if(item.geometry.type.toLowerCase()==="multipolygon"||item.geometry.type.toLowerCase()==="polygon"){
             var polygon=new Polygon({ rings: item.geometry.coordinates[0] });
               polygon.spatialReference=  {latestWkid:4523, wkid: 4523 };
               graphic = new Graphic({
                        geometry: polygon,
                        symbol: {
                            type: 'simple-fill',
                            color: [0, 0, 255, 0.5],
                            style: 'solid',
                            outline: {
                                color: 'red',
                                width: 1
                            }
                        },
                    attributes:item.properties
                })      
                mapView.HmapView.extent =polygon.extent 
               
      }
     mapView.HmapView.graphics.add(graphic) 
      addLabel(item)  
     store.commit('PopupShow', true)
    }
}
 
export const addLabel=(item)=>{
    //面地块名称标注
    var polygon=new Polygon({ rings: item.geometry.coordinates[0] });
    polygon.spatialReference=  {latestWkid:4523, wkid: 4523 };
    var textgraphic = new Graphic({
        geometry: polygon,
        symbol: {
            type: 'text',
            lineWidth: 150,
            color: 'black',
            haloSize: .7,
             haloColor: 'white',
            // yoffset:-5,
            text: item.properties.dkmc?item.properties.dkmc:item.properties.dlmc?item.properties.dlmc:item.properties.zldwmc?item.properties.zldwmc:"",
            font: {
              size: 8,
            } 
         }
        })  
    mapView.HmapView.graphics.add(textgraphic) 
    // 点位标注
    var textline=[]
    item.geometry.coordinates[0].forEach((eles,index) => {
        var len=eles.length
        eles.forEach((ele,ind)=>{
            if(ind!==len-1){
            
            textline.push(abc[index]+ind+":"+ele[0]+" "+ele[1])
            var point=new Point(ele)
            point.spatialReference=  {latestWkid:4523,wkid: 4523 } ;
            var textgraphic = new Graphic({
                geometry: point,
                symbol: {
                    type: 'text',
                    lineWidth: 150,
                    color: 'black',
                    haloSize: .7,
                     haloColor: 'white',
                    // yoffset:-5,
                    text: abc[index]+ind,
                    font: {
                      size: 8,
                    } 
                 }
                })  
            mapView.HmapView.graphics.add(textgraphic) 
    
            }
        })
    });
    // 文字背景渲染
    var point2=new Point([(mapView.HmapView.extent.xmax+polygon.extent.xmax)/2,mapView.HmapView.extent.ymax])
    point2.spatialReference=  {latestWkid:4523,wkid: 4523 } ;
    var bb= getPath(textline[0],textline.length)
    var texttablebg = new Graphic({
        geometry: point2,
        symbol: {
            type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
            path:bb.path,
            color: "white",
            size: bb.size,  // pixels
            outline: {  // autocasts as new SimpleLineSymbol()
              color: 'black',
              width: .6  // points
            },
            yoffset:-bb.height/2,
            xoffset:-bb.width/2,

         }
        })  
    mapView.HmapView.graphics.add(texttablebg) 
    // 坐标文字标注
    var texttable = new Graphic({
        geometry: point2,
        symbol: {
            type: 'text',
         
            color: 'black',
            haloSize: .7,
             haloColor: 'white',
             horizontalAlignment:"left",
            text: textline.join("\n"),
            font: {
              size: 10,
            },
            yoffset:-20,
            xoffset:-bb.width+10,
         }
        })  
    mapView.HmapView.graphics.add(texttable) 
}

const getPath=(infoTem,row)=>{
    var _fontsize =  10;
    var radius =  6
    var width = infoTem.length * 0.45 * (_fontsize + 3) + 4; //
    var height = _fontsize *1.4*row;
    var path = "M0" + " " + radius + "L0" + " " 
    + (height - radius) + "Q0" + " " + height + " " + radius + " " + height + "L" 
    + (width - radius) + " " + height + "Q" + width + " " + height + " " + width 
    + " " + (height - radius) + "L" + width + " " + radius + "Q" + width + " " 
    + "0" + " " + (width - radius) + " " + "0L" + radius + " " + "0Q0" + " " 
    + "0" + " " + "0" + " " + radius;
    return {path:path,size:Math.max(height, width),height:height,width:width};
}