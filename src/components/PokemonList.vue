<template>
  <div class="pokedex-list">
      <div class="pokemon-item" v-for="pokemon in pokedexList" :key="pokemon.numero">
          <PokemonCard :pokemon="pokemon"/>
      </div>
  </div>
</template>

<script>

import PokemonCard from './PokemonCard'
import { mapGetters } from 'vuex'

export default {
  name: 'PokemonList',
  components: {
    PokemonCard
  },
  computed: {
    ...mapGetters({pokedexList: 'pokedex'})
  },
  data () {
    return {}
  },
  methods: {}
  }

</script>

<style scoped>
.pokedex-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.pokemon-item {
  width: calc(100%/4 - 20px);
  margin: 0 20px 20px 0;
}
</style>
