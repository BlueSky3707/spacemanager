import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true
export default new Vuex.Store({
  state: {
    selectItem:null,
    isPopupShow:false
  },
  mutations: {
    PopupShow(state, show) {
      state.isPopupShow = show
    },

  },
  modules: {
    
  }
})
