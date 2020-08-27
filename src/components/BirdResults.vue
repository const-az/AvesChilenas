<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="(bird, index) in birds" :key="index">
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['birds'])  
}
</script>