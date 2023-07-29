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
          source: "/src/assets/vileda.webp",
        },
        {
          id: 1,
          title: "Slide 2",
          subtitle: "Subtitle slide 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique, harum eum quaerat eius sequi corporis omnis ut cumque eligendi, nihil placeat commodi quos praesentium nostrum minima, totam in enim?",
          source: "/src/assets/marbec.webp",
        },
        {
          id: 2,
          title: "Slide 3",
          subtitle: "Subtitle slide 3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique, harum eum quaerat eius sequi corporis omnis ut cumque eligendi, nihil placeat commodi quos praesentium nostrum minima, totam in enim?",
          source: "/src/assets/sutter.webp",
        },
      ],
    };
  },
};
</script>

<template>
  <TopNav />

  <!--STORY-->
  <v-container class="mt-3">
    <h1 class="title-responsive">La nostra storia</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Una storia che risale a pi&ugrave; di 20 anni fà...
    </h2>
    <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic recusandae veniam sint iusto non, quisquam saepe? Saepe facilis nisi alias, sequi debitis eum sit culpa obcaecati ipsa. Est, qui.</p>
  </v-container>

  <v-spacer></v-spacer>

  <!-- CAROUSEL -->

  <v-carousel cycle hide-delimiters :show-arrows="false">
    <v-carousel-item v-for="slide in slides" :key="slide.id" cover>
      <v-sheet color="light-blue" height="100%">
        <div class="d-flex flex-wrap fill-height justify-center d-flex text-center align-center">

          <template v-if="slide.id == 0">
            <v-card class="mx-auto card-width" max-width="600px">
              <v-img src="/src/assets/cleaning.webp" height="250px" cover />
              <v-card-title class="text-start">
                {{ slide.title }}
              </v-card-title>
              <v-card-subtitle class="text-start">
                {{ slide.subtitle }}
              </v-card-subtitle>
              <v-card-text class="text-start">
                {{ slide.text }}
              </v-card-text>
            </v-card>
          </template>

          <template v-if="slide.id == 1">
            <v-card class="mx-auto card-width" max-width="600px">
              <v-img src="/src/assets/cleaning.webp" height="250px" cover />
              <v-card-title class="text-start">
                {{ slide.title }}
              </v-card-title>
              <v-card-subtitle class="text-start">
                {{ slide.subtitle }}
              </v-card-subtitle>
              <v-card-text class="text-start">
                {{ slide.text }}
              </v-card-text>
            </v-card>
          </template>

          <template v-if="slide.id == 2">
            <v-card class="mx-auto card-width" max-width="600px">
              <v-img src="/src/assets/cleaning.webp" height="250px" cover />
              <v-card-title class="text-start">
                {{ slide.title }}
              </v-card-title>
              <v-card-subtitle class="text-start">
                {{ slide.subtitle }}
              </v-card-subtitle>
              <v-card-text class="text-start">
                {{ slide.text }}
              </v-card-text>
            </v-card>
          </template>

        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-spacer></v-spacer>

  <!--WHO IS LUCIANA?-->
  <v-container class="mt-5">
    <v-row class="d-flex justify-center align-center flex-wrap">
      <v-col class="text-start" cols="auto" md="8" sm="12">
        <h1 class="title-responsive">Chi è Luciana?</h1>
        <h2 class="subtitle-responsive text-light-blue">
          Imprenditrice per passione
        </h2>
        <p>
          Sono una ragazza umile, determinata e con una grande voglia di
          lavorare, anche se sono ancora molto giovane. Sono orgogliosa di aver
          preso in mano l'impresa di famiglia e di poter contribuire al suo
          successo.
        </p>
        <v-spacer></v-spacer>
        <p>
          Fin da piccola, ho sempre ammirato il duro lavoro dei miei genitori e
          di mio nonno nell'impresa. <br>
          Ho trascorso molte ore osservandoli e imparando tutto ciò che potevo.
          <br>
          La mia passione per l'impresa è cresciuta di pari passo con me, e ho
          sviluppato una forte determinazione nel voler far crescere l'impresa e
          portarla a nuovi livelli. <br>
          Nonostante la mia giovane età, mi impegno a imparare continuamente e a
          migliorare le mie competenze. <br>
        </p>
        <v-spacer></v-spacer>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" sm="12">
        <v-img src="/src/assets/puliservice_logo.svg" width="100%" max-width="300px" aspect-ratio="16/9" cover></v-img>
      </v-col>
    </v-row>
  </v-container>

  <CallToAction />

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
      <b>&#x2022; Qualità</b>: Siamo fermamente impegnati a offrire
      <span class="text-light-blue">servizi di pulizia di alta qualità</span>.
      Ci sforziamo di superare le aspettative dei nostri clienti, garantendo
      risultati impeccabili e prestazioni di livello superiore. La qualità è per
      noi un impegno costante e una priorità assoluta. <br /><br />
      <b>&#x2022; Affidabilità</b>: La nostra reputazione si basa sulla
      <span class="text-light-blue">fiducia e sull'affidabilità</span>. Siamo
      sempre puntuali e rispettiamo gli impegni presi con i nostri clienti. La
      puntualità, la professionalità e la coerenza sono i pilastri su cui
      costruiamo rapporti di lunga durata con i nostri clienti. <br /><br />
      <b>&#x2022; Etica</b>: Agiamo sempre in modo etico e responsabile. Siamo
      guidati dai principi dell'integrità, dell'onestà e della trasparenza in
      tutte le nostre interazioni e operazioni. Rispettiamo la privacy dei
      nostri clienti e
      <span class="text-light-blue">trattiamo le informazioni sensibili con la massima riservatezza</span>. <br /><br />
      <b>&#x2022; Teamwork</b>: Il nostro successo dipende dalla forza del
      nostro team. Favoriamo un ambiente di lavoro collaborativo, in cui
      <span class="text-light-blue">ogni membro del team viene valorizzato</span>
      e incoraggiato a contribuire con le proprie competenze e prospettive.
      Siamo un'impresa che
      <span class="text-light-blue">crede nel valore delle persone</span> e nel
      potere del lavoro di squadra. <br /><br />
      <b>&#x2022; Responsabilità sociale</b>: Siamo consapevoli del nostro ruolo
      nella società e dell'impatto che le nostre attività possono avere
      sull'ambiente e sulla comunità. Ci impegniamo a operare in modo
      sostenibile, utilizzando
      <span class="text-light-blue">prodotti eco-friendly</span> e adottando
      pratiche che riducano
      <span class="text-light-blue">l'impatto ambientale</span>. Sosteniamo
      anche iniziative e cause sociali che contribuiscono al benessere della
      comunità. <br /><br />
      Siamo <b>orgogliosi dei nostri valori</b> e lavoriamo instancabilmente per
      mantenerli vivi in ogni aspetto del nostro lavoro.
    </p>
  </v-container>

  <v-spacer></v-spacer>

  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>

<style>
@media screen and (max-width: 966px) {

  .title-responsive {
    font-size: 3em !important;
    text-align: start;
    line-height: normal;
  }

  .card-width {
    max-width: 344px !important;
  }
}
</style>
