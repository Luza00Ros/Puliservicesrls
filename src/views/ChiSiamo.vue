<script>
export default {
  name: "ChiSiamo",
  data() {
    return {
      step: 1,
      cards: [
        {
          id: 1,
          title: "Il fondatore dell'attività",
          subtitle: "Nonno Ernesto",
          text: "Ernesto Rosati, è il fondatore di questa azienda familiare di pulizie. ",
          image: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/NonnoMod.jpeg?alt=media&token=b472b247-c04a-4da3-83a8-e0eeb175a77e",
        },
        {
          id: 2,
          title: "Il secondo erede dell'attività",
          subtitle: "Marco Rosati",
          text: "Figlio di Enesto, ha guidato l'azienda per un lungo periodo.",
          image: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/MarcoMod.jpeg?alt=media&token=c4060f52-6b26-4645-9315-676c11ab3db3",
        },
        {
          id: 3,
          title: "La terza erede ",
          subtitle: "Luciana Rosati",
          text: "Nipote di Ernesto e figlia di Marco, ha scelto di portare avanti l'azienda famigliare.",
          image: "https://firebasestorage.googleapis.com/v0/b/puliservicesrls-4246e.appspot.com/o/luciana1.png?alt=media&token=466e62ce-253b-4308-841e-620ad76952d3",
        },
      ],
    }
  },

  computed: {
    currentTitle() {
      let title = "";
      this.cards.forEach((card) => {
        if (this.step == card.id) {
          title = card.title;
        }
      });
      return title;
    },

    currentSubtitle() {
      let subtitle = "";
      this.cards.forEach((card) => {
        if (this.step == card.id) {
          subtitle = card.subtitle;
        }
      });
      return subtitle;
    },

    currentText() {
      let text = "";
      this.cards.forEach((card) => {
        if (this.step == card.id) {
          text = card.text;
        }
      });
      return text;
    },

    currentImage() {
      let image = "";
      this.cards.forEach((card) => {
        if (this.step === card.id) {
          image = card.image;
        }
      });
      return image;
    },
  },

  components: {
    Bottom,
    TopNav,
    CallToAction,
  },
};
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" max-height="500" lazy-src="../assets/illustration/story_illustration.svg"
        src="../assets/illustration/story_illustration.svg"></v-img>
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
          <v-btn v-if="step > 1" color="light-blue-darken-4" rounded="xl" variant="text" @click="step--"
            icon="mdi-arrow-left-thin">
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step < 3" color="light-blue-darken-4" variant="text" rounded="xl" @click="step++"
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
      <v-col class="text-start" cols="auto" md="8" sm="12" style="margin-bottom: 0; padding-bottom: 0">
        <p>
          Sono una ragazza
          <span class="text-light-blue-darken-4">umile, determinata</span>
          e con una grande voglia di lavorare, anche se sono ancora molto
          giovane. Sono orgogliosa di aver preso in mano l'azienda di famiglia e
          di poter contribuire al suo successo.
        </p>
        <br />
        <p>
          Fin da piccola, ho sempre ammirato il duro lavoro dei miei genitori e
          di mio nonno nell'azienda. Ho trascorso molte ore osservandoli e
          imparando tutto ciò che potevo. La mia
          <span class="text-light-blue-darken-4 font-weight-bold">passione</span>
          per l’azienda è cresciuta di pari passo con me, e ho sviluppato una
          forte determinazione nel voler far crescere l'azienda.
        </p>
        <br />
        <p>
          Nonostante la mia giovane età, mi impegno a
          <span class="text-light-blue-darken-4">imparare continuamente</span> e
          a
          <span class="text-light-blue-darken-4">migliorare le mie competenze</span>. <br />
          Sono consapevole che ci sono ancora molte cose da imparare, ma sono
          pronta ad affrontare le sfide che si presentano lungo il percorso.
        </p>
        <br />
        <p>
          Essere al comando dell'azienda di famiglia è un grande onore per me,
          ma è anche una responsabilità che prendo molto seriamente. Sono
          <span class="text-light-blue-darken-4">orgogliosa</span> dei risultati
          che abbiamo ottenuto finora. Tuttavia, non mi accontento mai e
          continuo a lavorare con impegno e passione per raggiungere nuovi
          traguardi e garantire un futuro prospero per l'azienda che amo.
        </p>
      </v-col>

      <v-col class="d-flex justify-center" cols="auto" md="4" style="margin-bottom: 0; padding-bottom: 0">
        <v-card color="light-blue-darken-4" variant="flat">
          <div id="blue-circle"></div>
          <v-img lazy-src="/src/assets/luciana.png" src="/src/assets/luciana.png" width="100%" max-width="400px"
            aspect-ratio="16/9" cover></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-spacer></v-spacer>

  <v-container class="mt-3">
    <h1 class="title-responsive">I nostri valori</h1>
    <h2 class="subtitle-responsive text-light-blue">
      Il fondamento del nostro lavoro
    </h2>
  </v-container>

  <v-container class="d-flex justify-center align-center flex-wrap">
    <p>
      &#x2022;<span class="text-light-blue"><strong> Qualità</strong></span>: Siamo fermamente impegnati a offrire
      <span class="text-light-blue-darken-4">servizi di pulizia di alta qualità</span>. Ci sforziamo di soddisfare le
      aspettative dei nostri clienti,
      garantendo risultati impeccabili. La qualità è per noi un impegno costante
      e una priorità assoluta. <br /><br />
      &#x2022;<span class="text-light-blue"><strong> Affidabilità</strong></span>: La nostra reputazione si basa sulla
      <span class="text-light-blue-darken-4">fiducia e sull'affidabilità</span>.
      Rispettiamo gli impegni presi con i nostri clienti. La puntualità, la
      professionalità e la coerenza sono i pilastri su cui costruiamo rapporti
      duraturi con i nostri clienti. <br /><br />
      &#x2022;<span class="text-light-blue"><strong> Etica</strong></span>: Agiamo sempre in modo etico. Siamo guidati dai
      principi dell'integrità,
      dell'onestà e della trasparenza in tutte le nostre interazioni e
      operazioni. Rispettiamo la privacy dei nostri clienti e
      <span class="text-light-blue-darken-4">trattiamo le informazioni sensibili con la massima riservatezza</span>.
      <br /><br />
      &#x2022;<span class="text-light-blue"><strong> Teamwork</strong></span>: Il nostro successo dipende dalla forza del
      nostro team. Favoriamo un
      ambiente di lavoro collaborativo, in cui
      <span class="text-light-blue-darken-4">ogni membro del team viene valorizzato</span>
      e incoraggiato a contribuire con le proprie competenze e prospettive.
      Siamo un'impresa che
      <span class="text-light-blue-darken-4">crede nel valore delle persone</span>
      e nel potere del lavoro di squadra. <br /><br />
      &#x2022;<span class="text-light-blue"><strong> Responsabilità sociale</strong></span>: Siamo consapevoli del nostro
      ruolo nella società e dell'impatto che le
      nostre attività possono avere sull'ambiente e sulla comunità. Ci
      impegniamo a operare in modo sostenibile, utilizzando
      <span class="text-light-blue-darken-4">prodotti eco-friendly</span> e
      adottando pratiche che riducano
      <span class="text-light-blue-darken-4">l'impatto ambientale</span>.
      Sosteniamo anche iniziative e cause sociali che contribuiscono al
      benessere della comunità. <br /><br />
      Siamo
      <span class="font-weight-bold text-light-blue-darken-4"><strong>orgogliosi dei nostri valori</strong></span>
      e lavoriamo instancabilmente per mantenerli vivi in ogni aspetto del
      nostro lavoro.
    </p>
  </v-container>

  <v-spacer></v-spacer>

  <CallToAction />

  <v-spacer></v-spacer>

  <Bottom />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
import CallToAction from "@/components/CallToAction.vue";
</script>
