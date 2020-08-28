<template>
  <v-app-bar color="transparent" dark absolute flat class="px-md-10">
    <v-btn icon to="/home">
      <v-icon>mdi-binoculars</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text rounded x-small to="/home" v-if="birds.uid || birds.length==0">
      Volver
      <v-icon class="ml-2">mdi-keyboard-return</v-icon>
    </v-btn>
    <div style="width: 150px" v-else>
      <v-text-field class="pt-5" :value="search" @input="updateSearch" @click:append="clearSearch" :append-icon="search!='' ? 'mdi-close' : ''" prepend-inner-icon="mdi-magnify"></v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    clearSearch(){
      this.updateSearch('')
    },
    ...mapActions(['updateSearch'])
  },
  computed: mapState(['search', 'birds']),
}
</script>