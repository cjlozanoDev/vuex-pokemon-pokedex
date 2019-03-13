<template>
  <div class="pokedex-container">
    <PokemonList/>
  </div>
</template>

<script>

import PokemonList from './PokemonList'

export default {
  name: 'pokedexContainer',
  components: {
    PokemonList
  },
  data () {
    return {}
  },
  methods: {}
}

</script>

<style scoped>

</style>
