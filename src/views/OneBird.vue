<template>
  <v-main>
    <hero-section :img="birds.images.main" :name="birds.name.spanish">
    </hero-section>
    <v-container class="py-5">
      <v-overlay :value="loading" opacity="0">
        <v-progress-circular indeterminate size="64" color="red"></v-progress-circular>
      </v-overlay>
      <p class="text-caption text-center"><span class="font-italic text-body-2">{{birds.name.latin}}</span><span class="mx-2 mx-md-5">|</span>{{birds.name.english}}</p>
      <v-row class="mt-md-10">
        <v-col cols="12" md="6" class="px-md-10">
          <v-simple-table dense class="text-center mb-8">
            <tbody>
              <tr>
                <td class="font-weight-bold">Tamaño</td>
                <td>{{ birds.size }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Orden</td>
                <td>{{ birds.order }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Especie</td>
                <td>{{ birds.species}}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-carousel cycle height="400" class="rounded-sm" hide-delimiters :show-arrows="false" :class="birds.images.gallery.length<=1 ? 'hidden-sm-and-down' : ''">
            <v-carousel-item
              v-for="(img,i) in birds.images.gallery"
              :key="i"
              :src="img.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <div v-if="birds.habitat" class="mb-8">
            <v-chip dark small color="red" class="mb-2 font-weight-bold">Hábitat</v-chip>
            <p class="text-justify text-body-2 px-2">{{birds.habitat}}</p>
            <v-img :src="birds.map.image" class="mx-auto" max-width="200px"></v-img>
          </div>
          <div v-if="birds.iucn.title" class="mb-8">
            <v-chip dark small color="red" class="mb-2 font-weight-bold">Peligro de extinción</v-chip>
            <p class="font-weight-bold text-body-2 mb-0 px-2">{{birds.iucn.title}}</p>
            <p class="text-justify text-body-2 px-2">{{birds.iucn.description}}</p>
          </div>
          <div v-if="birds.didyouknow" class="mb-8">
            <v-chip dark small color="red" class="mb-2 font-weight-bold">¿Sabías qué?</v-chip>
            <p class="text-justify text-body-2 px-2">{{birds.didyouknow}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'OneBird',
  components: {
    HeroSection: () => import("../components/HeroSection"),
  },
  data() {
    return {
      audio: undefined
    }
  },
  methods: {
    ...mapActions(['searchBirds'])
  },
  computed: mapState(['birds','loading']),
  created(){
    let route = this.$route.params.name;
    this.searchBirds(route)
  }
}
</script>

<style lang="scss">  
  tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }
</style>