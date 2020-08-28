<template>
  <v-app-bar color="transparent" dark absolute flat>
    <v-icon>mdi-binoculars</v-icon>
    <v-spacer></v-spacer>
    <v-text-field class="pt-5" :value="search" @input="updateSearch"></v-text-field>
    <v-icon>mdi-magnify</v-icon>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: mapActions(['updateSearch']),
  computed: mapState(['search'])
}
</script>