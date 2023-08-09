<template>
  <TopNav />
  <!--INTRO-->

  <v-parallax src="../assets/maintence.webp" height="600" alt="Immagine in background">
    <div class="d-flex flex-column fill-height justify-center text-white">
      <div class="text-center text-light-blue mt-5 mb-3 mr-5 ml-5">
        <h1 class="title-responsive">
          Piccole manutenzioni
        </h1>
      </div>
      <div class="ma-5 text-center">
        <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
          La manutenzione generale è un insieme di attività preventive e correttive
        </p>
      </div>
    </div>
  </v-parallax>

  <v-spacer />

  <!--TEXT-->

  <v-container>
    <h6 class="text-light-blue-darken-4"> Questo tipo di manutenzione &egrave; necessaria per preservare l'efficenza, la
      sicurezza e le prestazioni ottimali nel corso del tempo.</h6>
  </v-container>

  <!--ALERT-->

  <v-container>
    <v-alert variant="tonal" density="compact" type="info" text="Su questa attività non è presente una lista di servizi che offriamo,
    bensì mettiamo a disposizione il nostro numero di telefono per garantirvi un
    pronto intervento! ">
      <a href="tel:+393484231742" class="text-info">+39 348 42 31 742</a>
    </v-alert>
  </v-container>

  <!--CALL TO ACTION-->

  <CallToAction />

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

  .button-right {
    display: flex;
    align-items: center;
    justify-content: end;
  }
}
</style>

<script setup>
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
</script>
