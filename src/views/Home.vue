<template>
  <v-main>
    <hero-section :img="img.main" :name="name"></hero-section>
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
      img: {
        main: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116095031/1800',
      },
      name: 'Aves chilenas'
    }
  },
  methods: mapActions(['searchBirds','updateSearch']),
  computed: mapState(['birds']),
  created(){
    this.searchBirds()
    this.updateSearch('')
  }
}
</script>
