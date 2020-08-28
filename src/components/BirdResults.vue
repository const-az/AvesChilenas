<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="(bird, index) in filterBirds" :key="index">
        <v-card outlined>
          <v-img
            class="white--text align-end"
            height="300px"
            :src="bird.images.main"
            position="top"
            gradient="to top, rgba(0,0,0,.3), rgba(255,255,255,0)"
          >
            <v-card-title>{{bird.name.spanish}}</v-card-title>
            <v-card-subtitle class="white--text font-weight-bold">{{bird.name.latin}}</v-card-subtitle>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay :value="loading" absolute opacity="0">
      <v-progress-circular indeterminate size="64" color="red"></v-progress-circular>
    </v-overlay>
    <div v-if="!loading && filterBirds.length==0" class="text-center pt-10">
      <p class="text-h5 font-weight-bold">No existen resultados para <span class="font-italic">{{search}}</span></p>
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