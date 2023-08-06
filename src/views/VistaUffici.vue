<script>
export default {
  methods: {
    routerPush(param) {
      this.$router.push(param);
    }
  }
}
</script>

<template>
  <TopNav />

  <!-- INTRO -->

  <v-container>
    <v-parallax src="../assets/cleaningOffice.webp" height="600" alt="Immagine in background">
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-center mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive text-light-blue">
            Pulizie uffici </h1>
        </div>
        <div class="ma-5 text-center">
          <p class="subtitle-responsive font-weight-bold text-light-blue-darken-4">
            Una buona pulizia migliora la produttività dei dipendenti e il
            benessere di tutti
          </p>
        </div>
      </div>
    </v-parallax>

    <!-- CARD SERVICES -->

    <v-card color="light-blue-darken-4 mx-auto">
      <template v-slot:text>
        <ul style="list-style: none">
          <li>
            <span class="text-light-blue text-h5">
              <strong>1. Raccogliere e svuotare i rifiuti</strong>
            </span>
            <br />
            <span class="font-weight-medium text-h6">Il processo di pulizia degli uffici inizia con la rimozione di
              tutti i rifiuti presenti nelle aree di lavoro. Ciò include
              svuotare i cestini e i contenitori dei rifiuti e assicurarsi che
              siano sostituiti con sacchetti puliti.</span>
          </li>
          <br />
          <li>
            <span class="text-light-blue text-h5">
              <strong>2. Pulizia delle superfici</strong>
            </span>
            <br />
            <span class="font-weight-medium text-h6">Tutte le superfici orizzontali come scrivanie, tavoli, piani di
              lavoro e ripiani sono pulite attentamente. Questo viene fatto
              utilizzando prodotti detergenti appropriati per rimuovere polvere,
              macchie e germi.</span>
          </li>
          <br />
          <li>
            <span class="text-light-blue text-h5">
              <strong>3. Pulizia dei pavimenti</strong>
            </span>
            <br />
            <span class="font-weight-medium text-h6">
              I pavimenti vengono puliti e igienizzati regolarmente. A seconda
              del tipo di pavimento presente negli uffici, può essere necessario
              utilizzare aspirapolvere, spazzatrici o altro per rimuovere
              polvere, sporco e detriti.
            </span>
          </li>
          <br />
          <li>
            <span class="text-light-blue text-h5">
              <strong>4. Pulizia dei bagni</strong>
            </span>
            <br />
            <span class="font-weight-medium text-h6">
              Si pulisce il lavandino, il WC, gli specchi e le superfici con
              detergenti appropriati per garantire la massima igiene.
            </span>
          </li>
          <br />
          <li>
            <span class="text-light-blue text-h5">
              <strong>5. Pulizia delle aree comuni</strong>
            </span>
            <br />
            <span class="font-weight-medium text-h6">
              Se ci sono aree comuni come sale riunioni, cucine o aree di pausa,
              queste saranno pulite accuratamente. Ciò include la pulizia dei
              tavoli, delle sedie, degli elettrodomestici e degli utensili da
              cucina, se presenti.
            </span>
          </li>
        </ul>
      </template>
    </v-card>

    <!-- ALLERT -->

    <v-alert variant="tonal" closable density="compact" type="warning" title="Nota bene" text="La frequenza delle pulizie e delle mansioni saranno prese di comune accordo con i clienti,
    rispettandone le necessità e il budget.">
    </v-alert>

    <!--CALL TO ACTION-->

    <CallToAction />
  </v-container>

  <!--FOOTER-->

  <Bottom />
</template>

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
}
</style>

<script setup>
import TopNav from "@/components/TopNav.vue";
import CallToAction from "@/components/CallToAction.vue";
import Bottom from "@/components/BottomFooter.vue";
</script>
