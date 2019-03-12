import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  pokedex: [{name: 'bulbasaur', numero: 1}, {name: 'charmander', numero: 4}, {name: 'squirtle', numero: 7}]
}

const mutations = {
  ADD_POKEMON (state, { pokemon }) {
    state.pokedex.push(pokemon)
  }
}

const actions = {
  async addPokemon ({ commit }, pokemon) {
    commit('ADD_POKEMON', pokemon)
  }
}

const getters = {
  pokedex: state => {
    return state.pokedex
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
