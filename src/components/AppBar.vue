<template>
  <v-app-bar color="transparent" dark absolute flat class="px-md-10">
    <v-btn icon to="/home">
      <v-icon>mdi-binoculars</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div style="width: 150px" v-if="!birds.uid">
      <v-text-field class="pt-5" :value="search" @input="updateSearch" @click:append="clearSearch" :append-icon="search!='' ? 'mdi-close' : ''" prepend-inner-icon="mdi-magnify"></v-text-field>
    </div>
    <v-btn text rounded x-small to="/home" v-else>
      Volver
      <v-icon class="ml-2">mdi-keyboard-return</v-icon>
    </v-btn>
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
  computed: mapState(['search', 'birds'])
}
</script>