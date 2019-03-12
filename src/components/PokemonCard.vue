<template>
  <div class="pokedex-card">
    <div>
        <v-card>
            <v-img
            :src="pokemon.image"
            aspect-ratio="1"
            >
            <template v-slot:placeholder>
                <v-layout
                    fill-height
                    align-center
                    justify-center
                    ma-0
                >
                    <v-progress-circular indeterminate color="red lighten-2"></v-progress-circular>
                </v-layout>
            </template>
            </v-img>

            <v-card-title primary-title>
                
                    <h3># {{pokemon.number}}</h3>
                    <h3 class="headline mb-0">{{pokemon.name}}</h3>
                
            </v-card-title>
            
        </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pokedexCard',
  data () {
    return {
    }
  },
  props: {
    pokemon: {
      type: Object
    }
  }
}
</script>

<style scoped>
div /deep/ .v-card__title{
    align-items:  center;
    flex-direction: column;

}
</style>