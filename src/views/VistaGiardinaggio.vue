<script setup>
import { reactive } from "vue";
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";

const services = reactive([
  {
    id: 0,
    title: "Manutenzione del giardino",
    text: "La manutenzione del giardino è uno dei principali servizi di giardinaggio offerti, includere la potatura delle piante, la potatura delle siepi, la pulizia delle aiuole.",
    icon: "mdi-numeric-1",
  },
  {
    id: 1,
    title: "Taglio del prato",
    text: "Il taglio del prato è un servizio di giardinaggio essenziale per mantenere l'erba a una lunghezza uniforme e ordinata.",
    icon: "mdi-numeric-2",
  },
  {
    id: 2,
    title: "Potatura degli alberi",
    text: "Questo servizio include la potatura per rimuovere rami morti, malati o danneggiati, per migliorare la struttura dell'albero, per controllare la crescita e per aumentare la sicurezza dell'area circostante.",
    icon: "mdi-numeric-3",
  },
]);
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fgardening_illustration.svg?alt=media&token=0c231c0f-ecf4-4916-aaa6-85be86f086fe"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fgardening_illustration.svg?alt=media&token=0c231c0f-ecf4-4916-aaa6-85be86f086fe"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">Giardinaggio</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            Coltivare il giardino ci macchia le mani, ma ci pulisce la mente
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer />

  <v-container>
    <h6 class="text-light-blue-darken-4">
      Il servizio di giardinaggio è un'attività professionale che offre
      assistenza e cura per giardini, aree verdi e spazi esterni. Ecco una
      descrizione generale del processo di giardinaggio che effettuiamo:
    </h6>
    <v-timeline side="end" align="start">
      <v-timeline-item dot-color="light-blue-darken-4" v-for="service in services" :key="service.id" :icon="service.icon">
        <div>
          <div class="text-h6 font-weight-bold text-light-blue">
            {{ service.title }}
          </div>
          <p>
            {{ service.text }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
