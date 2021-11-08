<template>
  <div id="mapPopupid" class="afry border" v-show="$store.state.isPopupShow" :style="{ bottom: 50 + 'px', left: 250 + 'px' }">
    <div class="top">
      <span>基础信息</span>
      <span class="close" @click="close">x</span>
    </div>
    <div class="container1">
          <div class="left">
            <div v-for="item in zjdData" v-bind:key="item">
              <span>{{item.filedName}}</span><span style="font-size:13px;">{{item.fieldValue}}</span>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import DragElement from '../../../utils/drag'
export default {
  data() {
    return {
      store: null,
      zjdData: null
    }
  },
  created() {

  },
  mounted() {
    // eslint-disable-next-line no-new
    new DragElement(document.getElementById('mapPopupid'))
  },
  methods: {
    close() {
      
    }
  }
}
</script>

<style scoped lang="scss">
.afry {
  position: fixed;
  z-index: 999999;
  background-color: #fff;
  transform: translate(-50%, 35px);
  width: 480px;
  height: 305px;
  .close {
    line-height: 11px;
    text-align: center;
    cursor: pointer;
  }

  .content {
    padding-left: 15px;

    span {
      &:nth-child(3) {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 18px;
      }

      &:nth-child(1) {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }

      &:nth-child(4) {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
      }

      &:nth-child(2) {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
    }
  }

  .container1 {
    padding: 0 16px;
  }
  .top {
    width: 480px;
    height: 36px;
    background: #e3effb;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    box-sizing: border-box;

    span {
      &:nth-of-type(1) {
        width: 84px;
        height: 14px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #387aff;
      }

      &:nth-of-type(2) {
        width: 12px;
        height: 12px;
        color: #929292;
      }
    }
  }

  .container {
    width: 480px;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .titie {
    width: 456px;
    height: 32px;
    background: #f4f7fc;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #3682ee;
    display: flex;
    align-items: center;
    padding-left: 15px;

    span {
      &:nth-child(1) {
        width: 154px;
      }

      &:nth-child(2) {
        width: 95px;
      }

      &:nth-child(3) {
        width: 111px;
      }
    }
  }
}

.content {
  width: 456px;
  height: 48px;
  background: #ffffff;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;

  span {
    &:nth-of-type(1) {
      width: 111px;
      height: 15px;
      margin-right: 42px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-child(2) {
      width: 95px;
    }

    &:nth-child(3) {
      width: 111px;
    }
  }
}

.container1 ::v-deep .el-tabs__nav-wrap {
  padding-left: 19px;
}

.left {
  width: 456px;
  height: 260px;
  background-color: #fff;
  padding-top: 7px;
  div {
    display: flex;
    align-items: center;
    height: 32px;
    padding-left: 30px;

    &:nth-of-type(odd) {
      background: #f4f7fc;
    }

    span {
      &:nth-of-type(1) {
        width: 150px;
        height: 14px;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }

      &:nth-of-type(2) {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #111111;
      }
    }
  }
}
</style>
