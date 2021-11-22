<template>
    <div id="content">
        <HxMap></HxMap>
        <Maptools></Maptools>
        <MapPopup></MapPopup>
    </div>
</template>

<script>
import HxMap from '../page/mapview/HxMap'

import Maptools from '../page/mapview/Maptools'
import MapPopup from '../page/mapview/MapPopup'
import store from '@/store'
import {drawGeom} from '@/maputils/tabletomap/index'
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
                       drawGeom(store.state.selectItem)
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
          drawGeom(store.state.selectItem)
        }
    },

    methods: {
        
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
