<script setup>
import { reactive } from 'vue';
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
const services = reactive([
  {
    id: 0,
    title: "Rimozione di oggetti e mobili",
    text: "Prima di iniziare la pulizia straordinaria, è consigliabile rimuovere oggetti personali, mobili e altri oggetti che possono ostacolare il processo di pulizia. Questo permette di accedere a tutte le aree dell'appartamento in modo più efficace.",
    icon: "mdi-numeric-1",
  },
  {
    id: 1,
    title: "Pulizia degli infissi e degli elettrodomestici",
    text: "Gli infissi, come porte, finestre, cornici e maniglie, vengono puliti accuratamente per rimuovere polvere, sporco e impronte. Gli elettrodomestici, come il forno, il frigorifero, la lavatrice e la lavastoviglie, vengono puliti sia internamente che esternamente. Utilizziamo detergenti appropriati per eliminare macchie e odori.",
    icon: "mdi-numeric-2",
  },
  {
    id: 2,
    title: "Pulizia approfondita dei pavimenti",
    text: "I pavimenti richiedono una pulizia approfondita per rimuovere sporco, polvere e macchie. A seconda del tipo di pavimento presente, utilizziamo metodi specifici come l'aspirapolvere, il lavaggio a secco o umido, o l'utilizzo di prodotti specifici per la pulizia dei pavimenti.",
    icon: "mdi-numeric-3",
  },
  {
    id: 3,
    title: "Pulizia dei bagni",
    text: "I bagni richiedono particolare attenzione nella pulizia straordinaria. Puliamo a fondo il lavandino, il WC, la vasca o la doccia, gli specchi, le piastrelle e i pavimenti. Utilizziamo detergenti sgrassanti e disinfettanti per garantire una pulizia completa e igienica.",
    icon: "mdi-numeric-4",
  },
  {
    id: 4,
    title: "Pulizia della cucina",
    text: "La cucina è un'altra area che richiede una pulizia approfondita. Puliamo i ripiani, i mobili, il lavello, i fornelli, il forno, la cappa e i pavimenti. Rimuoviamo eventuali residui di cibo, grasso e macchie utilizzando detergenti sgrassanti e disinfettanti.",
    icon: "mdi-numeric-5",
  },
  {
    id: 5,
    title: "Pulizia dei mobili e degli armadi",
    text: " Puliamo i mobili, gli armadi e le superfici di lavoro con panni umidi o prodotti specifici per il tipo di materiale. Rimuoviamo la polvere, le macchie e i segni evidenti.",
    icon: "mdi-numeric-6",
  },
  {
    id: 6,
    title: "Pulizia delle finestre e delle superfici vetrate",
    text: "Le finestre e le superfici vetrate sono pulite sia all'interno che all'esterno. Utilizziamo detergenti per vetri e panni puliti per rimuovere polvere, impronte digitali e macchie per una vista nitida e luminosa.",
    icon: "mdi-numeric-7",
  },
  {
    id: 7,
    title: "Sanificazione degli ambienti",
    text: "Infine, eseguiamo una sanificazione generale dell'appartamento utilizzando prodotti disinfettanti. Questo aiuta a eliminare germi, batteri e cattivi odori per creare un ambiente igienicamente sicuro.",
    icon: "mdi-numeric-8",
  },
]);
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-img min-width="300" max-width="800" max-height="500"
      src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fappartment_illustration.svg?alt=media&token=d983f3b7-7107-4062-933a-69172986a447"
      lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fappartment_illustration.svg?alt=media&token=d983f3b7-7107-4062-933a-69172986a447"></v-img>
    <div class="d-flex flex-column fill-height justify-center text-white">
      <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive">Pulizia Appartamenti</h1>
      </div>
      <div class="ma-5 text-start">
        <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
          La pulizia straordinaria degli appartamenti è un processo
          approfondito e dettagliato rispetto alla normale pulizia di routine
        </p>
      </div>
    </div>
  </v-container>

  <v-container>
    <h6 class="text-light-blue-darken-4">
      Garantiamo che l'appartamento sia completamente pulito, igienizzato e
      pronto per essere abitato. Di seguito elenchiamo gli interventi di pulizia
      che effettuiamo:
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
    <v-alert variant="tonal" density="compact" type="info" text="Utilizziamo strumenti e prodotti appropriati per garantire una
    pulizia efficace ed evitare danni alle superfici.">
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>
