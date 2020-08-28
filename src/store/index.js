import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: [],
    search: '',
    loading: false,
  },
  mutations: {
    SAVE_BIRDS(state, data){ state.birds = data},
    UPDATE_SEARCH(state, bird){ state.search = bird},
    IS_LOADING(state){ state.loading = true},
    NOT_LOADING(state){ state.loading = false}
  },
  actions: {
    searchBirds({commit}){
      commit('IS_LOADING')
      axios.get('https://aves.ninjas.cl/api/birds')
      .then( (response) => {
        commit('SAVE_BIRDS', response.data)
        commit('NOT_LOADING')
      })
    },
    updateSearch({commit}, search){ commit('UPDATE_SEARCH', search) },
  },
})
