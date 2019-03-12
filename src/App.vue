<template>
<v-app>
    <v-content transition="slide-x-transition">
      <div class="app">
        <header class="header">
          <h1>POKEDEX</h1>
        </header>
        <section class="section">
          <Pokedex/>
        </section>
      </div>
    </v-content>
</v-app>
</template>

<script>
import Pokedex from './components/Pokedex'

export default {
  name: 'App',
  components: {
    Pokedex
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
    font-size: 1rem;
}

html,
body {
  height: 100%;
  padding: 0 !important;
}
.header {
  color: white;
  background-color: lightcoral;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  padding: 20px;
}
</style>
