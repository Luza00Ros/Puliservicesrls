<script setup>
import { useRouter } from "vue-router";
import { reactive } from 'vue';
import Review from "@/components/FacebookAndGoogleReview.vue";
import CarouselText from "@/components/CarouselText.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";

const router = useRouter();

const slides = reactive([
  {
    id: 0,
    name: "Vileda Professional",
    link: "https://www.vileda-professional.it/",
  },
  {
    id: 1,
    name: "Marbec",
    link: "https://www.marbec.it/"
  },
  {
    id: 2,
    name: "Sutter Professional",
    link: "https://www.sutterprofessional.it/",
  },
  {
    id: 3,
    name: "Sanitec",
    link: "https://sanitecitalia.com/",
  },
  {
    id: 4,
    name: "Lysoform",
    link: "https://wiop.unilever.it/brands/lysoform/",
  },
]);

const services = reactive([
  {
    id: 0,
    type: "Pulizie",
    title: "Pulizia di condomini",
    description:
      "Soluzione completa per mantenere gli spazi comuni dei condomini puliti, ordinati e accoglienti",
    page: "condomini",
  },
  {
    id: 1,
    type: "Pulizie",
    title: "Pulizia di uffici",
    description:
      "Il nostro servizio di pulizie di uffici è progettato per mantenere i tuoi spazi di lavoro impeccabili, organizzati e piacevoli",
    page: "uffici",
  },
  {
    id: 2,
    type: "Pulizie",
    title: "Pulizia di negozi",
    description:
      "Con il nostro servizio di pulizia professionale per negozi, puoi contare su standard elevati e un attenzione impeccabile ai dettagli",
    page: "negozi",
  },
  {
    id: 3,
    type: "Servizi",
    title: "Facchinaggio",
    description:
      "Il nostro servizio di facchinaggio offre soluzioni complete e affidabili per rendere il tuo trasferimento senza stress",
    page: "traslochi",
  }
]);

const routerPush = (link) => { return router.push(link) }
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center">
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-light-blue">
        <div class="text-center mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive text-start">
            Impresa di pulizie a Potenza e provincia
          </h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            Specialisti in pulizie di condomini, uffici pubblici e privati a
            Potenza e provincia
          </p>
        </div>
        <div class="mb-5 mt-5 ml-2 text-start button-responsive">
          <v-btn class="text-subtitle-1 font-weight-bold" prepend-icon="mdi-calendar-badge" rounded="xl"
            color="light-blue" variant="outlined" density="compact" @click="routerPush('preventivo')"
            size="large">
            Preventivo gratuito
          </v-btn>
        </div>
      </div>
    </v-sheet>

    <v-sheet>
      <v-img max-width="800" max-height="500"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fhome_illustration.svg?alt=media&token=97908135-c2d2-4866-81e3-c71a47e0dd06"
        src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fhome_illustration.svg?alt=media&token=97908135-c2d2-4866-81e3-c71a47e0dd06"></v-img>
    </v-sheet>
  </v-container>

  <v-carousel height="100" hide-delimiters :show-arrows="false" cycle interval="2000">
    <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
      <v-sheet color="light-blue" height="100%">
        <div class="d-flex fill-height justify-center d-flex text-center align-center">
          <template v-if="slide.id == 0">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fvileda.webp?alt=media&token=371ab4f4-1805-41db-8b0d-be5a291c9242"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fvileda.webp?alt=media&token=371ab4f4-1805-41db-8b0d-be5a291c9242"
                alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 1">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fmarbec.webp?alt=media&token=1b04c777-1500-4f29-b530-914f0598c28b"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fmarbec.webp?alt=media&token=1b04c777-1500-4f29-b530-914f0598c28b"
                alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 2">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fsutter.webp?alt=media&token=fc2500e4-ad05-4d34-8e2c-f532f01246c0"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fsutter.webp?alt=media&token=fc2500e4-ad05-4d34-8e2c-f532f01246c0"
                alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 3">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fsanitec.webp?alt=media&token=d2b61923-4d82-46aa-a8d8-6c85e1417b9c"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Fsanitec.webp?alt=media&token=d2b61923-4d82-46aa-a8d8-6c85e1417b9c"
                alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 4">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Flysoform.webp?alt=media&token=ee97bc43-db58-42a5-96ab-0c5f0a927cef"
                lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/logos%2Flysoform.webp?alt=media&token=ee97bc43-db58-42a5-96ab-0c5f0a927cef"
                alt="Marchi da noi utilizzati" /></a>
          </template>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-spacer></v-spacer>

  <v-container class="mt-5">
    <h1 class="title-responsive text-start text-black">La nostra Storia</h1>
    <h2 class="subtitle-responsive text-light-blue">
      20 anni di esperienza nel settore pulizie
    </h2>
  </v-container>

  <v-container class="mt-5">
    <v-row class="d-flex justify-center align-center flex-wrap-reverse">
      <v-col class="text-start" cols="auto" md="8" sm="12">
        <p>
          <span class="text-light-blue-darken-4 font-weight-bold">Da Ernesto Rosati, al figlio Marco, e ora a sua figlia
            Luciana.
          </span>
        </p>
        <br />
        <p class="mb-3">
          Siamo orgogliosi di offrire servizi di pulizia di
          <span class="text-light-blue-darken-4">alta qualit&agrave;</span>
          a costi accessibili, garantendo risultati eccezionali per i nostri
          clienti. Da quando abbiamo iniziato la nostra attività, ci siamo
          impegnati a fornire servizi di pulizia professionali a
          <span class="text-light-blue-darken-4">prezzi competitivi</span>.
          Sappiamo quanto sia importante per voi ottenere una pulizia
          impeccabile della vostra casa o del vostro ufficio senza dover
          spendere una fortuna. Per questo motivo, abbiamo sviluppato strategie
          e processi efficienti che ci consentono di mantenere bassi i costi
          senza compromettere la qualità dei nostri servizi.
        </p>
        <div class="button-right">
          <v-btn color="light-blue text-subtitle-1 font-weight-bold" variant="outlined" density="compact" size="large"
            rounded="xl" class="pl-3" append-icon="mdi-arrow-right-thin" @click="routerPush('chiSiamo')">Leggi
            di
            pi&ugrave;</v-btn>
        </div>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
        <v-img src="/src/assets/puliservice_logo.svg" lazy-src="/src/assets/puliservice_logo.svg" width="100%"
          max-width="300px" aspect-ratio="16/9" cover></v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <Review />

  <v-spacer></v-spacer>

  <v-container class="mt-5">
    <h1 class="title-responsive text-start text-black">I nostri Servizi</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Servizi professionali e personale altamente qualificato
    </h2>
  </v-container>

  <v-container class="d-flex justify-space-evently align-center flex-wrap">
    <v-card class="mx-auto mt-5 mb-5" max-width="700" variant="flat" color="white" v-for="service in services"
      :key="service.id">
      <span v-if="service.id == 0">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2FbestPlace_illustration.svg?alt=media&token=ba9e4b23-483c-4eec-8681-87e0bb9214f1"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2FbestPlace_illustration.svg?alt=media&token=ba9e4b23-483c-4eec-8681-87e0bb9214f1"
          width="600" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 1">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Foffice_illustration.svg?alt=media&token=60f9baf4-022a-4406-986b-18714b0d719b"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Foffice_illustration.svg?alt=media&token=60f9baf4-022a-4406-986b-18714b0d719b"
          width="600" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 2">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fshop_illustration.svg?alt=media&token=d0353e2e-a19b-43b2-ba3a-753b754184f3"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fshop_illustration.svg?alt=media&token=d0353e2e-a19b-43b2-ba3a-753b754184f3"
          width="600" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 3">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fdelivery_illustration.svg?alt=media&token=075f4dbd-d168-4766-84fe-f931858ae44b"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/illustration%2Fdelivery_illustration.svg?alt=media&token=075f4dbd-d168-4766-84fe-f931858ae44b"
          width="600" rounded="xl" cover></v-img>
      </span>

      <v-card-item>
        <h6 class="text-light-blue-darken-4">{{ service.type }}</h6>
        <h5 class="text-light-blue">{{ service.title }}</h5>
        <p class="text-black">{{ service.description }}</p>
      </v-card-item>

      <v-card-actions>
        <div class="button-right" style="width: 100%">
          <v-btn append-icon="mdi-arrow-right-thin" @click="routerPush(service.page)" rounded="xl"
            color="light-blue font-weight-bold text-subtitle-1" variant="outlined" density="compact" size="large"
            class="pl-3">
            Vai al servizio
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>

  <v-spacer></v-spacer>

  <v-container>
    <CarouselText />
  </v-container>


  <v-container class="mt-3">
    <h1 class="title-responsive">La nostra Mission</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Servizi di pulizia professionale e di alta qualità
    </h2>
  </v-container>

  <v-container class="d-flex flex-wrap align-center justify-space-between mb-5">

    <div>
      <p class="mb-5">
        Attraverso un approccio orientato al
        <span class="text-light-blue-darken-4">cliente</span>, ci dedichiamo a comprendere le
        specifiche esigenze e le preferenze di
        ogni singolo cliente, al fine di offrire
        <span class="text-light-blue-darken-4">soluzioni personalizzate.</span>
        La nostra mission si basa sui seguenti
        <span class="text-light-blue"><strong>principi fondamentali</strong></span>:
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">Soddisfazione del cliente</h3>
      <p class="mb-5">La soddisfazione dei
        nostri <span class="text-light-blue-darken-4">clienti</span> è la nostra priorità assoluta.
        Siamo determinati a diventare il <span class="text-light-blue-darken-4">partner di fiducia</span> per le esigenze
        di pulizia dei nostri clienti,
        offrendo risultati impeccabili e creando ambienti puliti, sani e piacevoli in cui vivere e lavorare.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Eccellenza
      </h3>
      <p class="mb-5">
        Miriamo all'eccellenza in tutto ciò che
        facciamo, impegnandoci a
        offrire <span class="text-light-blue-darken-4">servizi di pulizia impeccabili</span>.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Affidabilità
      </h3>
      <p class="mb-5">
        Siamo un team responsabile. I <span class="text-light-blue-darken-4">valori</span> chiave per noi sono:
        Puntualità, professionalità e dedizione.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Personalizzazione
      </h3>
      <p class="mb-5">
        Ogni cliente è unico, pertanto
        adottiamo un
        <span class="text-light-blue-darken-4">approccio</span> personalizzato.
      </p>
    </div>

    <div>
      <h3 class="text-h6 text-light-blue font-weight-bold">
        Sostenibilità
      </h3>
      <p class="mb-5">
        Siamo impegnati a svolgere il nostro
        lavoro in modo responsabile dal
        punto di vista ambientale, utilizziamo prodotti
        <span class="text-light-blue-darken-4"> eco-friendly</span> e
        adottando pratiche
        <span class="text-light-blue-darken-4">sostenibili</span> per
        ridurre l'impatto ambientale.
      </p>
    </div>
  </v-container>

  <v-spacer></v-spacer>

  <CallToAction />

  <v-spacer></v-spacer>

<Bottom /></template>
