<template>
  <v-main>
    <hero-section :img="img.main" :name="name"></hero-section>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    HeroSection: () => import("../components/HeroSection"),
  },
  data() {
    return {
      img: {
        main: 'https://images.pexels.com/photos/1721675/pexels-photo-1721675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      name: 'Página no encontrada'
    }
  },
  methods: mapActions(['searchBirds']),
  created(){
    this.searchBirds('notfound')
  }
}
</script>