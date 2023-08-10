<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 0,
          title: "Slide 1",
          subtitle: "Subtitle slide 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique, harum eum quaerat eius sequi corporis omnis ut cumque eligendi, nihil placeat commodi quos praesentium nostrum minima, totam in enim?",
        },
        {
          id: 1,
          title: "Slide 2",
          subtitle: "Subtitle slide 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique, harum eum quaerat eius sequi corporis omnis ut cumque eligendi, nihil placeat commodi quos praesentium nostrum minima, totam in enim?",
        },
        {
          id: 2,
          title: "Slide 3",
          subtitle: "Subtitle slide 3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique, harum eum quaerat eius sequi corporis omnis ut cumque eligendi, nihil placeat commodi quos praesentium nostrum minima, totam in enim?",
        },
      ],
    };
  }
};
</script>

<template>
  <TopNav />

  <!--INTRO-->
    <v-parallax src="/src/assets/story.webp" height="600" alt="Immagine in background">
    <div class="d-flex flex-column fill-height justify-center text-white">
      <div class="text-center text-light-blue mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive">
          La nostra Storia
        </h1>
      </div>
      <div class="ma-5 text-center">
        <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
          Una storia che risale a più di 20 anni f&agrave;
        </p>
      </div>
    </div>
  </v-parallax>

  <v-spacer></v-spacer>

  <!-- CAROUSEL -->

  <v-carousel cycle hide-delimiters :show-arrows="false">

    <template v-slot:prev="{ props }">
      <v-btn icon="mdi-arrow-left-bold-circle" variant="elevated" color="light-blue-darken-4"
        @click="props.onClick"></v-btn>
    </template>

    <template v-slot:next="{ props }">
      <v-btn icon="mdi-arrow-right-bold-circle" variant="elevated" color="light-blue-darken-4"
        @click="props.onClick"></v-btn>
    </template>

    <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
      <v-container>
        <v-sheet color="trasparent" height="100%">

          <!--RICORDA CHE UNA VOLTA INSERITE LE IMMAGINI ANDREBBERO CALIBRATE-->

          <template v-if="slide.id == 0">
            <v-card class="mx-auto card-width" color="light-blue-darken-4">
              <v-img src="../assets/cleaning.webp" height="200px" cover />
              <v-card-title class="text-start text-h5">
                <h5> {{ slide.title }}</h5>
              </v-card-title>
              <v-card-subtitle class="text-start text-light-blue text-h6">
                <h6>{{ slide.subtitle }}</h6>
              </v-card-subtitle>
              <v-card-text class="text-start">
                <p>{{ slide.text }}</p>
              </v-card-text>
            </v-card>
          </template>

          <template v-if="slide.id == 1">
            <v-card class="mx-auto card-width" color="light-blue-darken-4">
              <v-img src="../assets/cleaning.webp" height="200px" cover />
              <v-card-title class="text-start text-h5">
                <h5>{{ slide.title }}</h5>
              </v-card-title>
              <v-card-subtitle class="text-start text-light-blue text-h6">
                <h6>{{ slide.subtitle }}</h6>
              </v-card-subtitle>
              <v-card-text class="text-start">
                <p>{{ slide.text }}</p>
              </v-card-text>
            </v-card>
          </template>

          <template v-if="slide.id == 2">
            <v-card class="mx-auto card-width" color="light-blue-darken-4">
              <v-img src="../assets/cleaning.webp" height="200px" cover />
              <v-card-title class="text-start text-h5">
                <h5>{{ slide.title }}</h5>
              </v-card-title>
              <v-card-subtitle class="text-start text-light-blue text-h6">
                <h6>{{ slide.subtitle }}</h6>
              </v-card-subtitle>
              <v-card-text class="text-start">
                <p>{{ slide.text }}</p>
              </v-card-text>
            </v-card>
          </template>

        </v-sheet>
      </v-container>
    </v-carousel-item>
  </v-carousel>

  <!--WHO IS LUCIANA?-->

  <v-container>
    <h1 class="text-start title-responsive">Chi &egrave; Luciana?</h1>
    <h2 class="text-start text-light-blue subtitle-responsive">
      Imprenditrice per passione
    </h2>
  </v-container>

  <v-container>
    <v-row class="d-flex justify-center align-center flex-wrap-reverse">
      <v-col class="text-start" cols="auto" md="8" sm="12" style="margin-bottom: 0; padding-bottom: 0;">
        <p>
          Sono una ragazza <span class="text-light-blue-darken-4">umile, determinata</span>
          e con una grande voglia di lavorare, anche se sono ancora molto
          giovane. Sono orgogliosa di aver preso in mano l'azienda di famiglia e di poter contribuire al suo
          successo.
        </p>
        <br>
        <p>
          Fin da piccola, ho sempre ammirato il duro lavoro dei miei genitori e
          di mio nonno nell'azienda.
          Ho trascorso molte ore osservandoli e imparando tutto ciò che potevo.
          La mia <span class="text-light-blue-darken-4 font-weight-bold">passione</span> per l’azienda è cresciuta di pari
          passo con me, e ho
          sviluppato una forte determinazione nel voler far crescere l'azienda e
          portarla a nuovi livelli.
        </p>
        <br>
        <p>Nonostante la mia giovane età, mi impegno a <span class="text-light-blue-darken-4">imparare
            continuamente</span> e a
          <span class="text-light-blue-darken-4">migliorare le mie competenze</span>. <br>
          Sono consapevole che ci sono ancora molte cose da imparare, ma sono pronta ad affrontare le sfide
          che si presentano lungo il percorso.
        </p>
        <br>
        <p>
          Essere al comando dell'azienda di famiglia è un grande onore per me, ma è anche una responsabilità
          che prendo molto seriamente. Sono <span class="text-light-blue-darken-4">orgogliosa</span> dei risultati che
          abbiamo ottenuto finora.
          Tuttavia, non mi accontento mai e continuo a lavorare con impegno e passione per raggiungere nuovi
          traguardi e garantire un futuro prospero per l'azienda che amo.
        </p>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" style="margin-bottom: 0; padding-bottom: 0;">
        <v-card color="light-blue-darken-4">
          <div id="circle"></div>
          <v-img src="/src/assets/luciana.png" width="100%" max-width="400px" aspect-ratio="16/9" cover></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <!-- VALUES -->

  <v-container class="mt-3">
    <h1 class="title-responsive">I nostri valori</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Il fondamento del nostro lavoro
    </h2>
  </v-container>

  <v-container class="d-flex justify-center align-center flex-wrap">
    <p>
      &#x2022;<span class="text-light-blue"><strong> Qualità</strong></span>: Siamo fermamente impegnati a offrire
      <span class="text-light-blue-darken-4">servizi di pulizia di alta qualità</span>.
      Ci sforziamo di superare le aspettative dei nostri clienti, garantendo
      risultati impeccabili e prestazioni di livello superiore. La qualità è per
      noi un impegno costante e una priorità assoluta. <br><br>
      &#x2022;<span class="text-light-blue"><strong> Affidabilità</strong></span>: La nostra reputazione si basa sulla
      <span class="text-light-blue-darken-4">fiducia e sull'affidabilità</span>. Siamo
      sempre puntuali e rispettiamo gli impegni presi con i nostri clienti. La
      puntualità, la professionalità e la coerenza sono i pilastri su cui
      costruiamo rapporti di lunga durata con i nostri clienti. <br><br>
      &#x2022;<span class="text-light-blue"><strong> Etica</strong></span>: Agiamo sempre in modo etico e responsabile.
      Siamo
      guidati dai principi dell'integrità, dell'onestà e della trasparenza in
      tutte le nostre interazioni e operazioni. Rispettiamo la privacy dei
      nostri clienti e
      <span class="text-light-blue-darken-4">trattiamo le informazioni sensibili con la massima riservatezza</span>.
      <br><br>
      &#x2022;<span class="text-light-blue"><strong> Teamwork</strong></span>: Il nostro successo dipende dalla forza del
      nostro team. Favoriamo un ambiente di lavoro collaborativo, in cui
      <span class="text-light-blue-darken-4">ogni membro del team viene valorizzato</span>
      e incoraggiato a contribuire con le proprie competenze e prospettive.
      Siamo un'impresa che
      <span class="text-light-blue-darken-4">crede nel valore delle persone</span> e nel
      potere del lavoro di squadra. <br><br>
      &#x2022;<span class="text-light-blue"><strong> Responsabilità sociale</strong></span>: Siamo consapevoli del nostro
      ruolo
      nella società e dell'impatto che le nostre attività possono avere
      sull'ambiente e sulla comunità. Ci impegniamo a operare in modo
      sostenibile, utilizzando
      <span class="text-light-blue-darken-4">prodotti eco-friendly</span> e adottando
      pratiche che riducano
      <span class="text-light-blue-darken-4">l'impatto ambientale</span>. Sosteniamo
      anche iniziative e cause sociali che contribuiscono al benessere della
      comunità. <br><br>
      Siamo <span class="font-weight-bold text-light-blue-darken-4"><strong>orgogliosi dei nostri valori</strong></span> e
      lavoriamo instancabilmente per
      mantenerli vivi in ogni aspetto del nostro lavoro.
    </p>
  </v-container>

  <v-spacer></v-spacer>

  <!--CALL TO ACTION-->

  <CallToAction />

  <v-spacer></v-spacer>

  <!--FOOTER-->

  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>

<style scoped>
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

  .card-width {
    max-width: 344px !important;
  }
}

#circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #03A9F4;
  left: -30px;
  top: -30px;
}</style>
