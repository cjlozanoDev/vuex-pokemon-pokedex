<template>
  <div class="pokedex-card">
    <div>
        <v-card>
            <v-img
            :src="pokemon.image"
            aspect-ratio="1"
            ></v-img>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{pokemon.name}}</h3>
            </div>
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

</style>
