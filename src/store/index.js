import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:''
  },
  mutations: {
    SET_USERID(state,value){
      state.userId = value
    }
  },
  actions: {
  },
  modules: {
  }
})
