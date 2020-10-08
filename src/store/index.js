import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  cartList: [],
  qxBtn: false
}
import mutations from "./mutations"
import getters from "./getters"

export default new Vuex.Store({
  state,
  mutations,
  getters,
})