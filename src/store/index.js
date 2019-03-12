import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  pokedex: [
    {name: 'bulbasaur', number: 1, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/1.png?raw=true'},
    {name: 'charmander', number: 4, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/4.png?raw=true'},
    {name: 'squirtle', number: 7, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/7.png?raw=true'}]
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
