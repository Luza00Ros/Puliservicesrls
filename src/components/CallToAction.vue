<script>
export default {
  methods: {
    routerPush(link) {
      return this.$router.push(link);
    }
  }
}
</script>

<template>
  <v-parallax src="/src/assets/callToActionBg.webp" height="600" alt="Chiamata all'azione richiesta preventivo">
    <div class="d-flex flex-column fill-height justify-center">
      <div class="text-center mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive text-white">Prova i nostri servizi di qualit&agrave;</h1>
      </div>
      <div class="ma-3 ma-5 text-center">
        <p class="subtitle-responsive font-weight-bold text-white">Il nostro team sarà
          lieto di valutare le tue esigenze specifiche e fornirti una stima accurata dei costi.</p>
      </div>
      <div class="button-responsive mb-5 mt-5 ml-2 text-center">
        <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="white" variant="outlined"
          v-on:click="routerPush('preventivo')" size="large">
          <b>Preventivo gratuito</b>
        </v-btn>
      </div>
    </div>
  </v-parallax>
</template>
