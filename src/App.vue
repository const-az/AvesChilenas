<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <hero-section></hero-section>
      <bird-results></bird-results>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppBar from './components/AppBar'
import HeroSection from './components/HeroSection'
import BirdResults from './components/BirdResults'

export default {
  name: 'App',

  components: {
    AppBar,
    HeroSection,
    BirdResults
  },

  data: () => ({
    //
  }),
  methods: mapActions(['searchBirds']),
  computed: mapState(['birds']),
  created(){
    this.searchBirds()
  }
};
</script>
