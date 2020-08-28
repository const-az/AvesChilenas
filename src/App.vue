<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    AppBar,
    Footer
  },
};
</script>
