<script setup>
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" max-height="500"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fmantence_illustration.svg?alt=media&token=9408053a-df56-4ce4-ae79-a127027788f3"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fmantence_illustration.svg?alt=media&token=9408053a-df56-4ce4-ae79-a127027788f3"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">Manutenzione generale</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            La manutenzione generale è un insieme di attività preventive e
            correttive
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer />

  <v-container>
    <h6 class="text-light-blue-darken-4">
      Questo tipo di manutenzione &egrave; necessaria per preservare
      l'efficenza, la sicurezza e le prestazioni ottimali nel corso del tempo.
    </h6>
  </v-container>

  <v-container>
    <v-alert variant="tonal" density="compact" type="info" text="Su questa attività non è presente una lista di servizi che offriamo,
    bensì mettiamo a disposizione il nostro numero di telefono per garantirvi un
    pronto intervento! ">
      <div class="d-flex justify-start">
        <v-btn prepend-icon="mdi-cellphone" type="link" href="tel:+393484231742" class="text-info"
          rounded="xl" size="large" density="compact" elevation="0" color="transparent">+39 348 42 31 742</v-btn>
      </div>
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
