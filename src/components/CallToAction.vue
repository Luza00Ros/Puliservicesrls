<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function routerPush(link) {
  return router.push(link);
}
</script>

<template>
  <v-parallax
    src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/callToActionBg.webp?alt=media&token=88db5faf-61b2-4bd6-b9d9-4e97d1238d9f"
    height="600" alt="Chiamata all'azione richiesta preventivo">
    <div class="d-flex flex-column fill-height justify-center">
      <div class="text-center mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive text-white">
          Prova i nostri servizi di qualit&agrave;
        </h1>
      </div>
      <div class="ma-3 ma-5 text-center">
        <p class="subtitle-responsive font-weight-bold text-white">
          Il nostro team sarà lieto di valutare le tue esigenze specifiche e
          fornirti una stima accurata dei costi.
        </p>
      </div>
      <div class="button-responsive mb-5 mt-5 mr-16 ml-5 text-center">
        <v-btn class="text-subtitle-1 font-weight-bold" prepend-icon="mdi-calendar-badge" rounded="xl" color="white"
          variant="outlined" density="compact" v-on:click="routerPush('preventivo')" size="large">
          Preventivo gratuito
        </v-btn>
      </div>
    </div>
  </v-parallax>
</template>
