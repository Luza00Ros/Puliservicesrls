<script setup>
import FacebookReview from "./FacebookReview.vue";
import GoogleReview from "./GoogleReview.vue";
</script>

<template>
  <v-container class="mt-5">
    <h1 class="title-responsive text-start text-black">
      Recensioni dei clienti
    </h1>
    <h2 class="subtitle-responsive text-light-blue">
      Opinioni che ci riempiono orgoglio
    </h2>
  </v-container>
  <v-spacer></v-spacer>
  <v-container
    class="d-flex flex-row flex-container align-center justify-center"
  >
    <v-sheet>
      <FacebookReview />
    </v-sheet>
    <v-sheet>
      <GoogleReview />
    </v-sheet>
  </v-container>
</template>
