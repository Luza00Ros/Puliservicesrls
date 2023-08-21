<template>
  <v-container class="mt-5">
    <h1 class="title-responsive text-start text-black">Recensioni dei clienti</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Opinioni che ci riempiono di orgoglio
    </h2>
  </v-container>
  <v-spacer></v-spacer>
  <v-container class="d-flex flex-row flex-container">
    <v-sheet>
      <FacebookReview />
    </v-sheet>
    <v-sheet>
      <GoogleReview />
    </v-sheet>
  </v-container>
</template>

<script setup>
import FacebookReview from './FacebookReview.vue';
import GoogleReview from './GoogleReview.vue';
</script>
