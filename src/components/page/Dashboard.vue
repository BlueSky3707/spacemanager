<template>
    <div id="content">
        <HxMap></HxMap>
        <Maptools></Maptools>
    </div>
</template>

<script>
import HxMap from '../page/mapview/HxMap'
import HxMapView from '../../maputils/map'
import Maptools from '../page/mapview/Maptools'
import store from '@/store'
import Point from '@arcgis/core/geometry/Point'
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
        Maptools

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
            if(item.geoJson){
             var geo= JSON.parse(item.geoJson)
             if(geo.type.toLowerCase()==="point"){
                 var point=new Point(geo.coordinates)
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
                 
                    if(HxMapView.HmapView){
                        HxMapView.HmapView.graphics.add(pointGraphic) 
                        var view=HxMapView.HmapView
                        HxMapView.HmapView.center= point
                    }
               
               
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
