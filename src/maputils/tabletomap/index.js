import mapView from '@/maputils/map'
import store from '@/store'
import Point from '@arcgis/core/geometry/Point'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
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
     store.commit('PopupShow', true)
    }
}