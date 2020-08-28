<template>
  <v-main>
    <hero-section :img="img" :name="name"></hero-section>
    <bird-results></bird-results>
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HeroSection from '../components/HeroSection'
import BirdResults from '../components/BirdResults'

export default {
  name: 'Home',
  components: {
    HeroSection,
    BirdResults
  },
  data() {
    return {
      img: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116095031/1800',
      name: 'Aves chilenas'
    }
  },
  methods: mapActions(['searchBirds']),
  computed: mapState(['birds']),
  created(){
    this.searchBirds()
  }
}
</script>
