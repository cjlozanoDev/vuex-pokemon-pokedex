import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  allPokemon: [],
  pokedex: [
    {name: 'bulbasaur', number: 1, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/1.png?raw=true'},
    {name: 'charmander', number: 4, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/4.png?raw=true'},
    {name: 'squirtle', number: 7, image: 'https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/7.png?raw=true'}]
}

const mutations = {
  ADD_POKEMON (state, pokemon) {
    state.pokedex.push(pokemon)
  },
  ADD_ALL_POKEMON (state, {listPokemon}) {
    state.allPokemon = listPokemon
  }
}

const actions = {
  async addPokemon ({ commit }, pokemon) {
    commit('ADD_POKEMON', pokemon)
  },
  async allListPokemon ({ commit }) {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const {data} = await axios.get(url)
    commit('ADD_ALL_POKEMON', { listPokemon: data.results })
  }
}

const getters = {
  pokedex: state => {
    return state.pokedex
  },
  allPokemon: state => {
    return state.allPokemon
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
