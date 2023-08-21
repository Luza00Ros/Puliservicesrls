<script>
export default {
  data() {
    return {
      alert: true,
      slides: [
        { id: 0, name: "Vileda Professional", link: "https://www.vileda-professional.it/" },
        { id: 1, name: "Marbec", link: "https://www.marbec.it/" },
        { id: 2, name: "Sutter Professional", link: "https://www.sutterprofessional.it/" },
      ],
      overviews: [
        {
          id: 0,
          title: "Prodotti certificati",
          img: "mdi-certificate",
          text: "I nostri prodotti sono progettati per offrire la massima qualità, sicurezza e conformità ai più alti standard del settore. Ci impegniamo ad usare solo prodotti che abbiano superato rigorosi controlli di qualità e che soddisfino le normative e le certificazioni applicabili.",
        },
        {
          id: 1,
          title: "Personale qualificato",
          img: "mdi-hand-okay",
          text: "Il nostro personale è il cuore della nostra impresa e rappresenta la nostra forza trainante per fornire un servizio eccellente ai nostri clienti. Abbiamo una rigorosa politica di selezione e formazione per garantire che il nostro team sia altamente competente, affidabile e professionale. ",
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
        },
      ],
      contacts: [
        { id: 0, title: 'Telefono', icon: 'mdi-phone', value: 'tel:+393484231742', text: '348 42 31 742' },
        { id: 1, title: 'Email', icon: 'mdi-email-arrow-right', value: 'mailto:adv.puliservicesrls@gmail.com', text: 'adv.puliservicesrls@gmail.com' },
        { id: 2, title: 'Indirizzo', icon: 'mdi-routes', value: 'https://www.google.com/maps/place/Puliservice+di+Rosati+Luciana+S.r.l.s/@40.6452666,15.795948,13.83z/data=!4m6!3m5!1s0x1338e3f913de7987:0x8cd71f33b2e9ab4e!8m2!3d40.641837!4d15.802794!16s%2Fg%2F11kpsn4z6d?entry=tts&shorturl=1', text: 'Piazzale Budapest 9, 85100, PZ' },
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
  <v-alert v-model="alert" border="start" variant="tonal"
    class="bg-light-blue top-responsive hidden-display d-flex flex-row align-center justify-center">
    <v-btn class="text-caption" rounded="xl" variant="text" role="link" :href="contact.value" target="_blank"
      :prepend-icon="contact.icon" v-for="contact in contacts" :key="contact.id">
      <span class="text-light-blue-darken-4">{{ contact.title }}:</span>
      <a :href="contact.value" style="text-decoration: none;" target="_blank" class="text-white">{{ contact.text }}</a>
    </v-btn>
  </v-alert>

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
          <v-btn prepend-icon="mdi-calendar-badge" rounded="xl" color="whithe" variant="outlined"
            v-on:click="routerPush('preventivo')" size="large">
            <b>Preventivo gratuito</b>
          </v-btn>
        </div>
      </div>
    </v-sheet>

    <v-sheet>
      <v-img max-width="800" max-height="500" src="../assets/illustration/home_illustration.svg"></v-img>
    </v-sheet>

  </v-container>

  <v-carousel cycle height="100" hide-delimiters :show-arrows="false">
    <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
      <v-sheet color="light-blue" height="100%">
        <div class="d-flex fill-height justify-center d-flex text-center align-center">
          <template v-if="slide.id == 0">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="../assets/vileda.webp" alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 1">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="../assets/marbec.webp" alt="Marchi da noi utilizzati" /></a>
          </template>
          <template v-if="slide.id == 2">
            <a role="link" aria-label="Le nostre marche certificate" target="_blank" :href="slide.link" class="h-50">
              <v-img src="../assets/sutter.webp" alt="Marchi da noi utilizzati" /></a>
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
          Benvenuti sulla home page della nostra rinomata impresa di pulizie.
        </p>
        <br>
        <p>
          <span class="text-light-blue-darken-4 font-weight-bold">Da Nonno Ernesto, al figlio Marco, e ora a sua figlia
            Luciana.
          </span>
        </p>
        <br>
        <p class="mb-3">
          Siamo orgogliosi di offrire <span class="text-light-blue-darken-4">servizi di pulizia di alta
            qualit&agrave;</span> a costi
          accessibili, garantendo risultati eccezionali per i nostri clienti. Da
          quando abbiamo iniziato la nostra attività, ci siamo impegnati a
          fornire servizi di pulizia professionali a <span class="text-light-blue-darken-4">prezzi competitivi</span>.
          Sappiamo quanto sia importante per voi ottenere una pulizia
          impeccabile della vostra casa o del vostro ufficio senza dover
          spendere una fortuna. Per questo motivo, abbiamo sviluppato strategie
          e processi efficienti che ci consentono di mantenere bassi i costi
          senza compromettere la qualità dei nostri servizi.
        </p>
        <div class="button-right">
          <v-btn color="light-blue" variant="outlined" rounded="xl" class="pl-3" append-icon="mdi-arrow-right-thin"
            v-on:click="routerPush('chiSiamo')">Leggi
            di pi&ugrave;</v-btn>
        </div>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
        <v-img src="/src/assets/puliservice_logo.svg" width="100%" max-width="300px" aspect-ratio="16/9" cover></v-img>
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
    <v-card class="mx-auto mt-5 mb-5" max-width="600" variant="flat" color="white" v-for="service in services"
      :key="service.id">
      <span v-if="service.id == 0">
        <v-img src="../assets/illustration/bestPlace_illustration.svg" height="300px" width="600px" rounded="xl"
          cover></v-img>
      </span>
      <span v-if="service.id == 1">
        <v-img src="../assets/illustration/office_illustration.svg" height="300px" width="400px" rounded="xl"
          cover></v-img>
      </span>
      <span v-if="service.id == 2">
        <v-img src="../assets/illustration/shop_illustration.svg" height="300px" width="400px" rounded="xl" cover></v-img>
      </span>
      <span v-if="service.id == 3">
        <v-img src="../assets/illustration/delivery_illustration.svg" height="300px" width="600px" rounded="xl"
          cover></v-img>
      </span>

      <v-card-item>
        <h6 class="text-light-blue-darken-4">{{ service.type }}</h6>
        <h5 class="text-light-blue">{{ service.title }}</h5>
        <p class="text-black">{{ service.description }}</p>
      </v-card-item>

      <v-card-actions>
        <div class="button-right" style="width: 100%;">
          <v-btn append-icon="mdi-arrow-right-thin" v-on:click="routerPush(service.page)" rounded="xl" color="light-blue"
            variant="outlined" class="pl-3">
            <b>Vai al servizio</b>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>

  <v-spacer></v-spacer>

  <v-container>
    <CarouselText />
  </v-container>

  <v-spacer></v-spacer>

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
      <span class="text-light-blue-darken-4">soluzioni personalizzate.</span>
      <br>
      La nostra mission si basa sui seguenti <span class="text-light-blue"><strong>principi fondamentali</strong></span>:
      <br><br>
      &#x2022;<span class="text-light-blue"><strong> Eccellenza</strong></span>: Miriamo all'eccellenza in tutto ciò che
      facciamo, impegnandoci a offrire
      <span class="text-light-blue-darken-4">servizi di pulizia impeccabili</span>.
      <br><br>
      &#x2022;<span class="text-light-blue"><strong> Affidabilità</strong></span>: Siamo un
      <span class="text-light-blue-darken-4">team affidabile e responsabile</span>. I valori chiave per noi sono:
      Puntualità,
      professionalità e dedizione. <br><br>
      &#x2022;<span class="text-light-blue"><strong> Personalizzazione</strong></span>: Ogni cliente è unico, pertanto
      adottiamo un <span class="text-light-blue-darken-4">approccio personalizzato</span>.
      <br><br>
      &#x2022;<span class="text-light-blue"><strong> Sostenibilità</strong></span>: Siamo impegnati a svolgere il nostro
      lavoro
      in modo responsabile dal punto di vista ambientale, utilizziamo
      <span class="text-light-blue-darken-4">prodotti eco-friendly</span> e adottando
      <span class="text-light-blue-darken-4">pratiche sostenibili</span> per ridurre
      l'impatto ambientale. <br><br>
      &#x2022;<span class="text-light-blue"><strong> Soddisfazione del cliente</strong></span>: La soddisfazione dei
      nostri
      clienti è la nostra priorità assoluta. Ci impegniamo a
      <span class="text-light-blue-darken-4">soddisfare le aspettative dei nostri clienti</span>.<br><br>
      La nostra <span class="text-light-blue-darken-4"><strong>mission</strong></span> è guidata da una <span
        class="text-light-blue-darken-4"><strong>passione per l'eccellenza</strong></span> e un
      impegno costante nell'offrire <span class="text-light-blue-darken-4"><strong>servizi di pulizia
          professionali</strong></span>. Siamo determinati a
      diventare il <span class="text-light-blue-darken-4"><strong>partner di fiducia</strong></span> per le esigenze di
      pulizia dei
      nostri clienti, offrendo <span class="text-light-blue-darken-4"><strong>risultati impeccabili</strong></span> e
      creando ambienti
      puliti, sani e piacevoli in cui vivere e lavorare.
    </p>
  </v-container>

  <v-spacer></v-spacer>

  <CallToAction />

  <v-spacer></v-spacer>

  <Bottom />
</template>

<script setup>
import Review from '@/components/FacebookAndGoogleReview.vue'
import CarouselText from '@/components/CarouselText.vue'
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>
