<template>
    <div id="content">
        <HxMap></HxMap>
        <Maptools></Maptools>
    </div>
</template>

<script>
import HxMap from '../page/mapview/HxMap'
import Maptools from '../page/mapview/Maptools'
export default {
    name: 'dashboard',
    data() {
        return {};
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

    methods: {}
};
</script>

<style scoped>
#content {
  width: 100%;
  height: calc(100vh - 30px);
  overflow: hidden;
  position: absolute;
  top: 30px;
  left: 0;
}


</style>
