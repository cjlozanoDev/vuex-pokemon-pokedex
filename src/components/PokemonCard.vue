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

                    <span class="pokemon-number"># {{pokemon.number}}</span>
                    <span class="pokemon-name">{{pokemon.name}}</span>

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
    background-color: hsl(0, 79%, 72%);
    opacity: 0.9;
    color: white;
}
.pokemon-number {
  font-size: 20px;
}
.pokemon-name {
  font-size: 15px;
}

@media (min-width: 480px) {
   .pokemon.number {
     font-size: 25px;
   }
   .pokemon-name {
     font-size: 22px;
   }
}
</style>
