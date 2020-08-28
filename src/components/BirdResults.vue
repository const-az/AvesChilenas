<template>
  <v-container>
    <div v-if="!loading && !filterBirds.length==0">
      <p class="text-center text-body-1 text-sm-body-2 py-4">
        <span class="font-weight-bold">¡Encuentra todo la información que buscas! </span>
        Clickea el ave que desees para obtener más información sobre él.
      </p>
      <v-divider class="mb-4"></v-divider>
    </div>
    <v-row>
      <v-overlay :value="loading" :absolute="true" opacity="0">
        <v-progress-circular indeterminate size="64" color="red"></v-progress-circular>
      </v-overlay>
      <v-col cols="12" sm="6" md="4" v-for="(bird, index) in filterBirds" :key="index">
        <v-card flat :to="{ name: 'onebird', params: { name: bird.uid} }">
          <v-img
            class="white--text align-end"
            height="300px"
            :src="bird.images.main"
            position="top"
            gradient="to top, rgba(0,0,0,.4), rgba(255,255,255,0)"
          >
            <v-card-title class="">{{bird.name.spanish}}</v-card-title>
            <v-card-subtitle class="white--text font-italic">{{bird.name.latin}}</v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="!loading && filterBirds.length==0" class="text-center pt-10">
      <v-icon x-large color="red" class="mb-5">mdi-alert-circle-outline</v-icon>
      <p class="text-h5 font-weight-medium">No existen resultados para <span class="font-italic">{{search}}</span></p>
      <p class="text-body-1">Intente con otra búsqueda.</p>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['birds','search','loading']),
    filterBirds(){
      return this.birds.filter(b => {
        return b.name.spanish.toLowerCase().includes(this.search.toLowerCase())
      })
    }} 
}
</script>