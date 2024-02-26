<script setup>
import { reactive } from "vue";
import TopNav from "@/components/TopNav.vue";
import CallToAction from "@/components/CallToAction.vue";
import Bottom from "@/components/BottomFooter.vue";

const services = reactive([
  {
    id: 0,
    title: "Raccogliere e svuotare i rifiuti",
    text: "Il processo di pulizia degli uffici inizia con la rimozione di tutti i rifiuti presenti nelle aree di lavoro. Ciò include svuotare i cestini e i contenitori dei rifiuti e assicurarsi che siano sostituiti con sacchetti puliti.",
    icon: "mdi-numeric-1",
  },
  {
    id: 1,
    title: "Pulizia delle superfici",
    text: "Tutte le superfici orizzontali come scrivanie, tavoli, piani di lavoro e ripiani sono pulite attentamente. Questo viene fatto utilizzando prodotti detergenti appropriati per rimuovere polvere, macchie e germi.",
    icon: "mdi-numeric-2",
  },
  {
    id: 2,
    title: "Pulizia dei pavimenti",
    text: "I pavimenti vengono puliti e igienizzati regolarmente. A seconda del tipo di pavimento presente negli uffici, può essere necessario utilizzare aspirapolvere, spazzatrici o altro per rimuovere polvere, sporco e detriti.",
    icon: "mdi-numeric-3",
  },
  {
    id: 3,
    title: "Pulizia dei bagni",
    text: "Si pulisce il lavandino, il WC, gli specchi e le superfici con detergenti appropriati per garantire la massima igiene.",
    icon: "mdi-numeric-4",
  },
  {
    id: 4,
    title: "Pulizia delle aree comuni",
    text: "Se ci sono aree comuni come sale riunioni, cucine o aree di pausa, queste saranno pulite accuratamente. Ciò include la pulizia dei tavoli, delle sedie, degli elettrodomestici e degli utensili da cucina, se presenti.",
    icon: "mdi-numeric-5",
  },
]);
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img min-width="300" max-width="800" max-height="500"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Foffice_illustration.svg?alt=media&token=60f9baf4-022a-4406-986b-18714b0d719b"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Foffice_illustration.svg?alt=media&token=60f9baf4-022a-4406-986b-18714b0d719b"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive text-light-blue">Pulizie Uffici</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive font-weight-bold text-light-blue-darken-4">
            Una buona pulizia migliora la produttività dei dipendenti e il
            benessere di tutti
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-container>
    <h6 class="text-light-blue-darken-4">
      La pulizia degli uffici &egrave; un'attività essenziale per garantire un
      ambiente pulito, igienico e sicuro per i clienti e il personale. Di
      seguito elenchiamo gli interventi di pulizia che effettuiamo negli uffici:
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

  <v-container>
    <v-alert variant="tonal" density="compact" type="warning" title="Nota bene" text="La frequenza delle pulizie e delle mansioni saranno prese di comune accordo con i clienti,
    rispettandone le necessità e il budget.">
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
