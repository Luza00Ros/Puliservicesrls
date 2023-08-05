<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 0,
          name: "Vileda Professional",
          link: "https://www.vileda-professional.it/",
        },
        { id: 1, name: "Marbec", link: "https://www.marbec.it/" },
        {
          id: 2,
          name: "Sutter Professional",
          link: "https://www.sutterprofessional.it/",
        },
      ],
      overviews: [
        {
          id: 0,
          title: "Prodotti certificati",
          img: "mdi-certificate",
          text: "I nostri prodotti certificati sono progettati per offrire la massima qualità, sicurezza e conformità ai più alti standard del settore. Ci impegniamo ad usare solo prodotti che abbiano superato rigorosi controlli di qualità e che soddisfino le normative e le certificazioni applicabili.",
        },
        {
          id: 1,
          title: "Personale qualificato",
          img: "mdi-hand-okay",
          text: "Il nostro personale qualificato è il cuore della nostra impresa e rappresenta la nostra forza trainante per fornire un servizio eccellente ai nostri clienti. Abbiamo una rigorosa politica di selezione e formazione per garantire che il nostro team sia altamente competente, affidabile e professionale. ",
        },
        {
          id: 2,
          title: "Calendario dedicato",
          img: "mdi-calendar-account",
          text: "Il nostro servizio di gestione delle prenotazioni in calendario è progettato per semplificare e ottimizzare il processo di programmazione e pianificazione delle attività. Sia che tu sia un professionista autonomo, un'azienda o un'organizzazione, offriamo un sistema completo e user-friendly per gestire le tue prenotazioni in modo efficiente.",
        },
      ],
      services: [
        {
          id: 0,
          type: "Pulizie",
          title: "Pulizie di condomini",
          description:
            "Soluzione completa per mantenere gli spazi comuni dei condomini puliti, ordinati e accoglienti",
          page: "condomini",
        },
        {
          id: 1,
          type: "Pulizie",
          title: "Pulizie di uffici",
          description:
            "Il nostro servizio di pulizie di uffici è progettato per mantenere i tuoi spazi di lavoro impeccabili, organizzati e piacevoli",
          page: "uffici",
        },
        {
          id: 2,
          type: "Pulizie",
          title: "Pulizie professionali",
          description:
            "Con il nostro servizio di pulizia professionale per negozi, puoi contare su standard elevati e un attenzione impeccabile ai dettagli",
          page: "negozi",
        },
        {
          id: 3,
          type: "Servizi",
          title: "Traslochi",
          description:
            "Il nostro servizio di traslochi offre soluzioni complete e affidabili per rendere il tuo trasferimento senza stress",
          page: "traslochi",
        },
      ],
    };
  },
  methods: {
    routerPush(link) {
      return this.$router.push(link);
    },
  },
};
</script>

<template>
  <TopNav />

  <!-- INTRO -->

  <v-parallax src="/src/assets/cleaning.webp" height="600" alt="Immagine in background">
    <div class="d-flex flex-column fill-height justify-center text-white">
      <div class="text-center mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive">
          Impresa di pulizie a Potenza e provincia
        </h1>
      </div>
      <div class="ma-5 text-center">
        <p class="subtitle-responsive font-weight-bold">
          Specialisti in pulizie di condomini, uffici pubblici e privati a
          Potenza e provincia
        </p>
      </div>
      <div class="mb-5 mt-5 ml-2 text-center button-responsive">
        <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="whithe" variant="outlined"
          v-on:click="routerPush('preventivo')" size="large">
          <b>Preventivo gratuito</b>
        </v-btn>
      </div>
    </div>
  </v-parallax>

  <!-- CAROUSEL -->

  <v-carousel cycle height="100" hide-delimiters :show-arrows="false">
    <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
      <v-sheet color="light-blue" height="100%">
        <div class="d-flex fill-height justify-center d-flex text-center align-center">
          <template v-if="slide.id == 0">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="/src/assets/vileda.webp" alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 1">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="/src/assets/marbec.webp" alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 2">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="/src/assets/sutter.webp" alt="Marchi da noi utilizzati" /></a>
          </template>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <!-- OVERVIEW -->

  <v-container class="mt-3">
    <h1 class="text-start title-responsive">Specialisti della pulizia</h1>
    <h2 class="text-start text-light-blue subtitle-responsive">
      Professionalità, discrezione e personale altamente qualificato
    </h2>
  </v-container>

  <v-container>
    <v-row no-gutters>
      <v-col v-for="overview in overviews" :key="overview.id" class="d-flex flex-wrap align-center">
        <v-card class="text-h5" width="auto" :prepend-icon="overview.img" variant="text"
          id="icon-color">
          <template v-slot:title>
            <span class="text-light-blue-darken-4">
              {{ overview.title.toUpperCase() }}
            </span>
          </template>

          <v-card-text class="ml-5 mr-5">
            <p class="text-black">{{ overview.text }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <!--SERVICES-->

  <v-container class="mt-5">
    <h1 class="title-responsive text-start text-black">I nostri Servizi</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Servizi professionali e personale altamente qualificato
    </h2>
  </v-container>

  <v-container class="d-flex justify-space-evently align-center flex-wrap">
    <v-card class="mx-auto mt-5 mb-5" max-width="600" color="light-blue-darken-4" v-for="service in services" :key="service.id">
      <span v-if="service.id == 0">
        <v-img src="/src/assets/pulizieCondomini.webp" height="300px" width="600px" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 1">
        <v-img src="/src/assets/pulizieUffici.webp" height="300px" width="600px" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 2">
        <v-img src="/src/assets/pulizieProfessionali.jpg" height="300px" width="600px" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 3">
        <v-img src="/src/assets/moves.webp" height="300px" width="600px" rounded="xl" cover></v-img>
      </span>

      <v-card-item>
        <h6 class="text-light-blue-darken-5">{{ service.type }}</h6>
        <h5 class="text-light-blue">{{ service.title }}</h5>
        <p class="text-white">{{ service.description }}</p>
      </v-card-item>

      <v-card-actions>
        <v-btn append-icon="mdi-arrow-right-thin" v-on:click="routerPush(service.page)" rounded="xl"
          color="light-blue" variant="outlined" class="pl-3">
          <b>Vai al servizio</b>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

  <v-spacer></v-spacer>

  <!--CALL TO ACTION-->
  <CallToAction />

  <!-- STORY -->

  <v-container class="mt-5">
    <v-row class="d-flex justify-center align-center flex-wrap">
      <v-col class="text-start" cols="auto" md="8" sm="12">
        <h1 class="title-responsive">La nostra Storia</h1>
        <h2 class="subtitle-responsive text-light-blue">
          20 anni di esperienza nel settore
        </h2>
        <p>
          Benvenuti nella nostra rinomata impresa di pulizie, che vanta una
          solida esperienza di 20 anni nel settore!
        </p>
        <br>
        <v-spacer></v-spacer>
        <p>
          <span class="text-light-blue-darken-4 font-weight-bold">Da Nonno Ernesto, al figlio Marco, e ora a sua figlia Luciana.
          </span>
          <br>
          <br>
          Siamo orgogliosi di offrire servizi di pulizia di alta qualità a costi
          accessibili, garantendo risultati eccezionali per i nostri clienti. Da
          quando abbiamo iniziato la nostra attività, ci siamo impegnati a
          fornire servizi di pulizia professionali a prezzi competitivi.
          Sappiamo quanto sia importante per voi ottenere una pulizia
          impeccabile della vostra casa o del vostro ufficio senza dover
          spendere una fortuna. Per questo motivo, abbiamo sviluppato strategie
          e processi efficienti che ci consentono di mantenere bassi i costi
          senza compromettere la qualità dei nostri servizi.
        </p>
        <br>
        <v-spacer></v-spacer>
        <p>
          Siamo persone che preferiscono i fatti alle belle parole, ed è per questo che vi
          invitiamo a dare subito un'occhiata ai nostri servizi.. lasciamo a voi
          la parola!
        </p>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
        <v-img src="/src/assets/puliservice_logo.svg" width="100%" max-width="300px" aspect-ratio="16/9" cover></v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <!-- MISSION -->

  <v-container class="mt-3">
    <h1 class="title-responsive">La nostra Mission</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Servizi di pulizia professionale e di alta qualità
    </h2>
  </v-container>

  <v-container class="d-flex justify-center align-center flex-wrap mb-5">
    <p>
      Attraverso un
      <span class="text-light-blue-darken-4">approccio orientato al cliente</span>, ci
      dedichiamo a comprendere le specifiche esigenze e le preferenze di ogni
      singolo cliente, al fine di offrire
      <span class="text-light-blue-darken-4">soluzioni personalizzate</span> e risultati
      eccezionali. <br>
      La nostra mission si basa sui seguenti <span class="text-light-blue"><strong>principi fondamentali</strong></span>:
      <br><br>
      &#x2022;<span class="text-light-blue"><strong> Eccellenza</strong></span>: Miriamo all'eccellenza in tutto ciò che
      facciamo, impegnandoci a offrire
      <span class="text-light-blue-darken-4">servizi di pulizia impeccabili</span> e
      <span class="text-light-blue-darken-4">risultati di qualità superiore</span>.
      <br>
      &#x2022;<span class="text-light-blue"><strong> Affidabilità</strong></span>: Siamo un
      <span class="text-light-blue-darken-4">team affidabile e responsabile</span>,
      rispettando sempre gli impegni presi con i nostri clienti. Puntualità,
      professionalità e dedizione sono valori chiave per noi. <br>
      &#x2022;<span class="text-light-blue"><strong> Personalizzazione</strong></span>: Ogni cliente è unico, pertanto
      adottiamo un
      <span class="text-light-blue-darken-4">approccio personalizzato</span>, ascoltando
      attentamente le esigenze e le preferenze di ciascuno per fornire servizi
      su misura che soddisfino le sue specifiche necessità. <br>
      &#x2022;<span class="text-light-blue"><strong> Sostenibilità</strong></span>: Siamo impegnati a svolgere il nostro lavoro
      in modo responsabile dal punto di vista ambientale, utilizzando
      <span class="text-light-blue-darken-4">prodotti eco-friendly</span> e adottando
      <span class="text-light-blue-darken-4">pratiche sostenibili</span> per ridurre
      l'impatto ambientale delle nostre attività. <br>
      &#x2022;<span class="text-light-blue"><strong> Soddisfazione del cliente</strong></span>: La soddisfazione dei nostri
      clienti è la nostra priorità assoluta. Ci impegniamo a superare le
      aspettative dei nostri clienti, offrendo un
      <span class="text-light-blue-darken-4">servizio di pulizia di qualità superiore</span>
      e garantendo la loro piena soddisfazione. <br><br>
      La nostra <span class="text-light-blue-darken-4"><strong>mission</strong></span> è guidata da una <span class="text-light-blue-darken-4"><strong>passione per l'eccellenza</strong></span> e un
      impegno costante nell'offrire <span class="text-light-blue-darken-4"><strong>servizi di pulizia professionali</strong></span> che
      lascino un'impronta positiva nei luoghi che serviamo. Siamo determinati a
      diventare il <span class="text-light-blue-darken-4"><strong>partner di fiducia</strong></span> per le esigenze di pulizia dei
      nostri clienti, offrendo <span class="text-light-blue-darken-4"><strong>risultati impeccabili</strong></span> e creando ambienti
      puliti, sani e piacevoli in cui vivere e lavorare.
    </p>
  </v-container>
  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>

<style>
#icon-color i.v-icon.v-icon {
  color: #01579B;
}

@media screen and (max-width: 966px) {
  .title-responsive {
    font-size: 3em !important;
    text-align: start;
    line-height: normal;
  }

  .subtitle-responsive {
    font-size: 2em !important;
    text-align: start;
  }

  .button-responsive {
    display: flex;
    text-align: start;
    align-items: start;
    justify-items: start;
  }
}
</style>
