<script setup>
import { ref, reactive, computed } from 'vue';
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
const step = ref(1);
const cards = reactive([
  {
    id: 1,
    title: "Il fondatore dell'attività",
    subtitle: "Ernesto Rosati",
    text: "Fondatore dell'impresa familiare di pulizie. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/howTo%2FErnesto-Rosati.webp?alt=media&token=ed060159-f3ab-4022-a7b4-3104d6e617ef",
  },
  {
    id: 2,
    title: "Il secondo erede dell'attività",
    subtitle: "Marco Rosati",
    text: "Figlio di Enesto, ha guidato l'impresa per un lungo periodo.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/howTo%2FMarco-Rosati.webp?alt=media&token=56b4d790-6015-417a-bc85-9721f51f59cd",
  },
  {
    id: 3,
    title: "La terza erede ",
    subtitle: "Luciana Rosati",
    text: "Nipote di Ernesto e figlia di Marco, ha scelto di portare avanti l'impresa famigliare.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/howTo%2FLuciana-Rosati.webp?alt=media&token=ccf25e8d-dd61-47fb-821a-990921d4ae29",
  },
]);

const currentTitle = computed(() => {
  let title = "";
  cards.forEach((card) => {
    if (step.value == card.id) {
      title = card.title;
    }
  });
  return title;
});

const currentSubtitle = computed(() => {
  let subtitle = "";
  cards.forEach((card) => {
    if (step.value == card.id) {
      subtitle = card.subtitle;
    }
  });
  return subtitle;
});

const currentText = computed(() => {
  let text = "";
  cards.forEach((card) => {
    if (step.value == card.id) {
      text = card.text;
    }
  });
  return text;
});

const currentImage = computed(() => {
  let image = "";
  cards.forEach((card) => {
    if (step.value === card.id) {
      image = card.image;
    }
  });
  return image;
});

</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" max-height="500"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fstory_illustration.svg?alt=media&token=6c27154d-1154-41fa-a74c-290100ade821"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fstory_illustration.svg?alt=media&token=6c27154d-1154-41fa-a74c-290100ade821"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">La nostra Storia</h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            Una storia che risale a più di 20 anni f&agrave;
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-spacer></v-spacer>

  <v-container>
    <div class="d-flex flex-row flex-wrap align-center justify-center">
      <v-card id="icon-color" variant="flat" height="100%">
        <div class="d-flex flex-row align-center justify-center">
          <v-img :src="currentImage" max-width="350" max-height="500" cover />
        </div>

        <template v-slot:title>
          <div class="text-h6 font-weight-regular justify-start">
            <h6 class="text-light-blue">{{ currentTitle }}</h6>
          </div>
        </template>

        <template v-slot:subtitle>
          <div class="text-h6 font-weight-regular justify-start text-light-blue-darken-4">
            {{ currentSubtitle }}
          </div>
        </template>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <p>{{ currentText }}</p>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <p>{{ currentText }}</p>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <v-card-text>
              <p>{{ currentText }}</p>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-card-actions>
          <v-btn v-if="step > 1" color="light-blue" density="compact" size="large" variant="text" rounded="xl" @click="step--"
            icon="mdi-arrow-left-thin">
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step < 3" color="light-blue" density="compact" size="large" variant="text" rounded="xl" @click="step++"
            icon="mdi-arrow-right-thin">
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>

  <v-spacer />

  <v-container>
    <h1 class="text-start title-responsive">Chi &egrave; Luciana?</h1>
    <h2 class="text-start text-light-blue subtitle-responsive">
      Imprenditrice per passione
    </h2>
  </v-container>

  <v-container>
    <v-row class="d-flex justify-center align-center flex-wrap-reverse">
      <v-col class="text-start mb-0 pb-0" cols="auto" md="8" sm="12">
        <p class="text-body-1">
          <span class="text-h6 font-weight-bold font-italic">"</span>Sono una ragazza
          <span class="text-light-blue-darken-4">determinata</span>
          e con una grande voglia di lavorare, anche se ancora molto
          giovane. Orgogliosa di aver preso in mano l'impresa di famiglia e
          di poter contribuire al suo successo.
          Fin da piccola, ho sempre ammirato il duro lavoro dei miei genitori e
          di mio nonno Ernesto nell'azienda. Ho trascorso molte ore osservandoli e
          imparando tutto ciò che potevo. La mia
          <span class="text-light-blue-darken-4">passione</span>
          per l’impresa è cresciuta di pari passo con me.
        </p>
        <br />
        <p class="text-body-1">
          Nonostante la mia giovane età, mi impegno a
          migliorare le mie <span class="text-light-blue-darken-4">competenze</span>. <br />
          Sono consapevole che ci sono ancora molte cose da imparare, ma sono
          pronta ad affrontare le sfide che si presentano lungo il percorso.
          Essere al comando dell'impresa di famiglia è un grande onore per me,
          ma è anche una responsabilità che prendo molto seriamente. Sono
          <span class="text-light-blue-darken-4">orgogliosa</span> dei risultati
          che abbiamo ottenuto finora. Tuttavia, non mi accontento mai e
          continuo a lavorare con impegno e passione per raggiungere nuovi
          traguardi e garantire un futuro prospero per l'impresa che amo.
          <span class="text-h6 font-weight-bold font-italic">"</span>
        </p>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" style="margin-bottom: 0; padding-bottom: 0">
        <v-card color="light-blue-darken-4" variant="flat">
          <div id="blue-circle"></div>
          <v-img
            lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/howTo%2FLuciana-Imprenditrice.webp?alt=media&token=2753652b-243a-498e-883c-eedef6dee493"
            src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/howTo%2FLuciana-Imprenditrice.webp?alt=media&token=2753652b-243a-498e-883c-eedef6dee493"
            width="100%" max-width="400px" aspect-ratio="16/9" cover></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <v-container class="mt-3">
    <h1 class="title-responsive">I nostri 5 valori fondamentali</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Il fondamento del nostro lavoro
    </h2>
  </v-container>

  <v-container class="d-flex flex-wrap align-center justify-space-between">
    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Qualit&agrave;
      </h3>
      <p class="mb-5">
        Siamo fermamente impegnati a offrire
        <span class="text-light-blue-darken-4">servizi di pulizia di alta qualità</span>. Ci sforziamo di soddisfare le
        aspettative dei nostri clienti,
        garantendo risultati impeccabili. La qualità è per noi un impegno costante
        e una priorità assoluta.
      </p>
    </div>
    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Affidabilit&agrave;
      </h3>
      <p class="mb-5">
        La nostra reputazione si basa sulla
        <span class="text-light-blue-darken-4">fiducia e sull'affidabilità</span>.
        Rispettiamo gli impegni presi con i nostri clienti. La puntualità, la
        professionalità e la coerenza sono i pilastri su cui costruiamo rapporti
        duraturi con i nostri clienti.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">Etica</h3>
      <p class="mb-5">
        Agiamo sempre in modo etico. Siamo guidati dai
        principi dell'<span class="text-light-blue-darken-4">integrit&agrave;</span>,
        dell'<span class="text-light-blue-darken-4">onest&agrave;</span> e della <span
          class="text-light-blue-darken-4">trasparenza</span> in tutte le nostre interazioni e
        operazioni.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">Teamwork</h3>
      <p class="mb-5">
        Il nostro successo dipende dalla forza del nostro
        team. Favoriamo un
        ambiente di lavoro collaborativo, in cui
        ogni membro del team viene <span class="text-light-blue-darken-4">valorizzato</span>
        e incoraggiato a contribuire con le proprie competenze.
        Crediamo nel <span class="text-light-blue-darken-4">valore</span> delle persone
        e nel potere del lavoro di squadra.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">Responsabilità sociale</h3>
      <p class="mb-5">
        Ci impegniamo a operare in modo sostenibile, adottando pratiche che riducano
        <span class="text-light-blue-darken-4">l'impatto ambientale</span>.
        Siamo <span class="text-light-blue-darken-4">orgogliosi dei nostri valori</span>
        e lavoriamo instancabilmente per mantenerli vivi in ogni aspetto del
        nostro lavoro.
      </p>
    </div>
  </v-container>

  <v-spacer></v-spacer>

  <CallToAction />

  <v-spacer></v-spacer>

  <Bottom />
</template>
