<template>
    <div id="content">
        <HxMap></HxMap>
        <Maptools></Maptools>
        <MapPopup></MapPopup>
    </div>
</template>

<script>
import HxMap from '../page/mapview/HxMap'
import HxMapView from '../../maputils/map'
import Maptools from '../page/mapview/Maptools'
import MapPopup from '../page/mapview/MapPopup'
import store from '@/store'
import Point from '@arcgis/core/geometry/Point'
import Polygon from '@arcgis/core/geometry/Polygon'
import Graphic from '@arcgis/core/Graphic'
export default {
    name: 'dashboard',
    data() {
        return {};
    },
    watch: {
     '$route.path': {
            handler(val) {
               if(val==="/"||val==="/dashboard"){
                    if(store.state.selectItem){
                       this.drawGeom(store.state.selectItem)
                    }
               }
            }
        }
    },
    components: {
        HxMap,
        Maptools,MapPopup

    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    mounted(){
        if(store.state.selectItem){
           this.drawGeom(store.state.selectItem)
        }
    },

    methods: {
        drawGeom(item){
            if(item.geometry){
           
             if(item.geometry.type.toLowerCase()==="point"){
                 var point=new Point(item.geometry.coordinates)
                 point.spatialReference=  {latestWkid:4523,wkid: 4523 } ;
                const pointGraphic = new Graphic({
                    geometry: point,
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
                  HxMapView.HmapView.graphics.removeAll();
                  HxMapView.HmapView.graphics.add(pointGraphic) 
                  HxMapView.HmapView.center= point     
             }else if(item.geometry.type.toLowerCase()==="multipolygon"||item.geometry.type.toLowerCase()==="polygon"){
                     var polygon=new Polygon( {
                            rings: item.geometry.coordinates[0],
                            
                        });
                       polygon.spatialReference=  {latestWkid:4523, wkid: 4523 };
                     const pointGraphic = new Graphic({
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
                  HxMapView.HmapView.graphics.removeAll();
                  HxMapView.HmapView.graphics.add(pointGraphic)
                  HxMapView.HmapView.extent =polygon.extent 
                  store.commit('PopupShow', true)
             }
            }
        }
    }
};
</script>

<style scoped>
#content {
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  /* position: absolute; */
  /* top: 30px;
  left: 0; */
}


</style>
