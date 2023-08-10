<script>
export default {
  data: () => ({
    step: 1,
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1: return 'Prodotti certificati'
        case 2: return 'Personale qualificato'
        default: return 'Calendario dedicato'
      }
    },

    currentIcon() {
      switch (this.step) {
        case 1: return 'mdi-check-decagram-outline'
        case 2: return 'mdi-account-check'
        default: return 'mdi-calendar-account'
      }
    }
  },
}
</script>

<template>
  <div class="d-flex flex-row flex-wrap align-center justify-center">
    <v-card id="icon-color" :prepend-icon="currentIcon" variant="flat">

      <template v-slot:title>
        <div class="text-h6 font-weight-regular justify-space-between">
          <h5 class="text-light-blue-darken-4">{{ currentTitle }}</h5>
        </div>
      </template>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <p>I nostri <span class="text-light-blue-darken-4">prodotti</span> sono progettati per offrire la <span class="text-light-blue-darken-4">massima qualità</span>, sicurezza e conformità ai più alti
              standard del settore. Ci impegniamo ad usare solo prodotti che abbiano superato rigorosi <span class="text-light-blue-darken-4">controlli di
              qualità</span> e che soddisfino le normative e le certificazioni applicabili.</p>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <p>Il nostro <span class="text-light-blue-darken-4">personale</span> è il cuore della nostra impresa e rappresenta la nostra forza trainante per fornire un
              servizio eccellente ai nostri clienti. Abbiamo una rigorosa <span class="text-light-blue-darken-4">politica di selezione e formazione</span> per garantire
              che il nostro team sia altamente competente, affidabile e professionale.</p>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <p>Il nostro <span class="text-light-blue-darken-4">servizio di gestione delle prenotazioni</span> in calendario è progettato per semplificare e ottimizzare
              il processo di programmazione e pianificazione delle attività. Sia che tu sia un professionista autonomo, un
              azienda o un organizzazione, offriamo un sistema completo e <span class="text-light-blue-darken-4">user-friendly</span> per gestire le tue prenotazioni in
              modo efficiente.</p>
          </v-card-text>
        </v-window-item>
      </v-window>

      <v-card-actions>
        <v-btn v-if="step > 1" color="light-blue-darken-4" rounded="xl" variant="outlined" @click="step--"
          icon="mdi-arrow-left-thin">
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="step < 3" color="light-blue-darken-4" variant="outlined" rounded="xl" @click="step++"
          icon="mdi-arrow-right-thin">
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style>
#icon-color i.v-icon.v-icon {
  color: #01579B;
}
</style>
