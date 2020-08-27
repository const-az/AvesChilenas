import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: []
  },
  mutations: {
    SAVE_BIRDS(state, data){ state.birds = data}
  },
  actions: {
    searchBirds({commit}){
      axios.get('https://aves.ninjas.cl/api/birds')
      .then( (response) => {
        commit('SAVE_BIRDS', response.data)
      })
    }
  },
  modules: {
  }
})
