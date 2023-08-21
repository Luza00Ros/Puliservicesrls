<script>
export default {
  data() {
    return {
      services: [
        { id: 0, title: 'Pulizia generale', text: "Questa include la pulizia di pavimenti, pareti, soffitti, porte e finestre. I pavimenti saranno spazzati e lavati. Le pareti e i soffitti saranno puliti da polvere, ragnatele e altre impurità.", icon: 'mdi-numeric-1' },
        { id: 1, title: 'Pulizia degli scaffali e delle esposizioni', text: "Gli scaffali, gli stand e le esposizioni dei prodotti saranno puliti e organizzati. Si elimineranno le macchie e la polvere per mantenere i prodotti in mostra in condizioni ottimali.", icon: 'mdi-numeric-2' },
        { id: 2, title: 'Pulizia delle vetrine e delle porte', text: "Le vetrine e le porte saranno pulite per garantire che i clienti abbiano una visione chiara dei prodotti in vendita e che l'ingresso sia accogliente e invitante.", icon: 'mdi-numeric-3' },
        { id: 3, title: 'Servizi igienici', text: "I servizi igienici del negozio saranno mantenuti puliti e riforniti con sapone, carta igienica e asciugamani per le mani.", icon: 'mdi-numeric-4' },
        { id: 4, title: 'Smaltimento rifiuti', text: "I cestini dei rifiuti saranno svuotati regolarmente e i rifiuti smaltiti correttamente per evitare odori sgradevoli e mantenere un ambiente pulito.", icon: 'mdi-numeric-5' },
        { id: 5, title: 'Disinfezione delle superfici', text: "Dopo la pandemia di COVID-19, è diventata particolarmente importante disinfettare regolarmente le superfici ad alto contatto, come maniglie delle porte, POS (Point of Sale), carrelli e cestini della spesa, per ridurre la diffusione di germi e batteri.", icon: 'mdi-numeric-6' },
      ]
    }
  }
}
</script>

<template>
  <TopNav />

  <v-container fluid class="d-flex justify-center header-align-center-reverse">
    <v-sheet>
      <v-img max-width="800" src="../assets/illustration/shop_illustration.svg"></v-img>
    </v-sheet>
    <v-sheet>
      <div class="d-flex flex-column fill-height justify-center text-white">
        <div class="text-start text-light-blue mt-5 mb-3 mr-5 ml-5">
          <h1 class="title-responsive">
            Pulizia Negozi
          </h1>
        </div>
        <div class="ma-5 text-start">
          <p class="subtitle-responsive text-light-blue-darken-4 font-weight-bold">
            La pulizia dei negozi è essenziale per garantire un ambiente pulito, igienico e sicuro per i clienti e il
            personale.
          </p>
        </div>
      </div>
    </v-sheet>
  </v-container>

  <v-container>
    <h6 class="text-light-blue-darken-4">La pulizia regolare aiuta a preservare l'aspetto del negozio, a promuovere
      un'immagine positiva e a fornire un'esperienza piacevole ai visitatori. Di seguito elenchiamo gli interventi di
      pulizia che effettuiamo nei negozi:</h6>
    <v-timeline side="end" align="start">
      <v-timeline-item dot-color="light-blue-darken-4" v-for="service in services" :key="service.id" :icon="service.icon">
        <div>
          <div class="text-h6 font-weight-bold text-light-blue">{{ service.title }}</div>
          <p>
            {{ service.text }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>

  <v-container>
    <v-alert variant="tonal" density="compact" type="warning" title="Nota bene" text="La frequenza delle pulizie e delle mansioni saranno prese di comune
    accordo con i clienti, rispettandone le necessità e il budget. Inoltre si
    utilizzano strumenti e prodotti appropriati per garantire una pulizia
    efficace ed evitare danni alle superfici.">
    </v-alert>
  </v-container>

  <CallToAction />

  <Bottom />
</template>

<script setup>
import CallToAction from "@/components/CallToAction.vue";
import TopNav from "@/components/TopNav.vue";
import Bottom from "@/components/BottomFooter.vue";
</script>
