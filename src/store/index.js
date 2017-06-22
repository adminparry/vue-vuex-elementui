import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
