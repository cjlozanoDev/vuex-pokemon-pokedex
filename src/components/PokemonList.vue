<template>
  <div class="main">
    <v-dialog
        v-model="dialogVisible"
        width="500"
    >
      <v-card class="card-dialog">
        <v-card-title primary-title>
          <div>
            <h1 class="headline mb-0">Nuevo pokemon encontrado</h1>
          </div>
        </v-card-title>
        <div class="card-dialog-section" style="padding:20px">
            <h3>¿Qué pokemon has visto?</h3>
            <v-select
              v-model="pokemonFound"
              :items="allPokemonlistMap"
              label="Escoge a un pokemon"
              outline
            ></v-select>
            <v-btn color="#F08080" class="button-seen" @click.stop="addPokemonPokedex">Añadir pokemon a pokedex </v-btn>
        </div>
      </v-card>
    </v-dialog>
    <div class="title">
      <h1> Tienes {{pokedexList.length}} pokemon </h1>
      <v-btn color="#F08080" class="button-seen" @click.stop="mostrarDialogo">¡He visto un pokemon! </v-btn>
    </div>
    <div class="pokedex-list">
      <div class="pokemon-item" v-for="pokemon in pokedexListSort" :key="pokemon.number">
          <PokemonCard :pokemon="pokemon"/>
      </div>
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
    ...mapGetters({pokedexList: 'pokedex', allPokemonList: 'allPokemon'}),
    allPokemonlistMap () {
      return this.allPokemonList.map((pokemon, index) => ({
        text: pokemon.name,
        value: {
          name: pokemon.name,
          number: index + 1,
          image: `https://github.com/devcjlozano/pokeApi/blob/master/sprites/other-sprites/official-artwork/${index + 1}.png?raw=true`
        }
      }))
    },
    pokedexListSort () {
      let arrayClone = this.pokedexList.slice(0)
      return arrayClone.sort((a, b) => a.number > b.number ? 1 : -1)
    }
  },
  created () {
    this.$store.dispatch('allListPokemon')
  },
  data () {
    return {
      dialogVisible: false,
      pokemonFound: {}
    }
  },
  methods: {
    mostrarDialogo () {
      this.dialogVisible = true
    },
    addPokemonPokedex () {
      this.$store.dispatch('addPokemon', this.pokemonFound)
      this.dialogVisible = false
    }
  }
}

</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.pokedex-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
}
.pokemon-item {
  width: calc(100%/2 - 20px);
  margin: 0 20px 20px 0;
}
.button-seen {
  opacity: 0.9;
  color: white;
  font-weight: bold;
}
.card-dialog .v-card__title--primary {
  padding: 20px;
  background-color: lightcoral;
  color: white;
  display: flex;
  justify-content: center;
}
.card-dialog-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (min-width: 768px) {
  .pokemon-item {
      width: calc(100%/4 - 20px);
      margin: 0 20px 20px 0;
  }
}
@media only screen and (min-width: 1024px) {
  .pokemon-item {
      width: calc(100%/4 - 20px);
      margin: 0 20px 20px 0;
  }
}
</style>
