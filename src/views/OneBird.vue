<template>
  <v-main>
    <hero-section :img="birds.images.main" :name="birds.name.spanish">
    </hero-section>
    <v-container class="py-5">
      <p class="text-caption text-center"><span class="font-italic text-body-2">{{birds.name.latin}}</span><span class="mx-2 mx-md-5">|</span>{{birds.name.english}}</p>
      <v-chip dark small color="red" class="mb-2 font-weight-bold" v-if="birds.didyouknow">¿Sabías qué?</v-chip>
      <p class="text-justify text-body-2">{{birds.didyouknow}}</p>
      <v-row v-if="birds.images.gallery.length>=3">
        <v-col cols="4" v-for="(img, i) in birds.images.gallery" :key="i">
          <v-img :src="img.url" height="250px"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HeroSection from '../components/HeroSection'

export default {
  name: 'OneBird',
  components: {
    HeroSection
  },
  data() {
    return {
      audio: undefined
    }
  },
  methods: {
    ...mapActions(['searchBirds'])
  },
  computed: mapState(['birds']),
  created(){
    let route = this.$route.params.name;
    this.searchBirds(route)
  }
}
</script>