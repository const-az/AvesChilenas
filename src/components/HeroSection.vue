<template>
  <v-main>
    <v-img class="align-end text-center white--text" :src="img" position="bottom" height="400px" gradient="to top, rgba(0,0,0,.4), rgba(255,255,255,0), rgba(0,0,0,.4)">
      <p class="text-h4 text-md-h2 font-weight-bold">{{ name }}</p>
    </v-img>
  </v-main>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>